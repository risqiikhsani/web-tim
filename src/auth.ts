import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { CreateItem, GetItemByKeys } from "./lib/functions";

// https://authjs.dev/reference/core
// flow = profile (once) -> signin callback (once)-> jwt callback (multiple times) -> session callback (multiple times)
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
      authorization: {
        params: {
          scope: "openid profile email https://www.googleapis.com/auth/userinfo.profile"
        }
      },
      // async profile(profile) {
      //   console.info('\x1b[32m%s\x1b[0m',"profile is running")
      //   const response = await GetItemByKeys({type:"user",id:profile.email})
      //   if(response.id){
      //     console.info('\x1b[32m%s\x1b[0m',"updating role based on database")
      //     return {
      //       role: response.role,
      //       image: profile.picture || profile.avatar_url, // Add this line
      //       ...profile,
      //     };
      //   }else{
      //     console.info('\x1b[32m%s\x1b[0m',"no user data, role default to user role")
      //     return {
      //       role: profile.role || "user",
      //       image: profile.picture || profile.avatar_url, // Add this line
      //       ...profile,
      //     };
      //   }
      // },
      async profile(profile){
        console.info('\x1b[32m%s\x1b[0m',"profile is running")
        console.info("profile",profile)
        const user = await GetItemByKeys({type:"user",id:profile.email})
        if(user?.id){
          console.log("user exists in database, get the role")
          // user exists in database
          // get the role in database
          return {
            role:user.role || "user",
            image:profile.picture || profile.avatar_url,
            new_user:false,
            ...profile
          }
        }else{
          console.log("user not exist in database, assign new role")
          // user doesn't exist in database
          // assign new role
          return {
            role:profile.role || "user",
            image:profile.picture || profile.avatar_url,
            new_user:true,
            ...profile
          }
        }
      }
    })],
  pages: {
    signIn: "/auth/login",
  },  
  // Events are asynchronous functions that do not return a response, they are useful for audit logging.
  // events:{
  //   createUser: (message) => console.info('\x1b[32m%s\x1b[0m',message),
  //   linkAccount: (message) => console.info('\x1b[32m%s\x1b[0m',message),
  //   session: (message) => console.info('\x1b[32m%s\x1b[0m',message),
  //   signIn: (message) => console.info('\x1b[32m%s\x1b[0m',message),
  //   signOut: (message) => console.info('\x1b[32m%s\x1b[0m',message),
  //   updateUser: (message) => console.info('\x1b[32m%s\x1b[0m',message)
  // },
  session:{
    // Relative time from now in seconds when to expire the session
    maxAge: 2592000, // 30 days
    // if using adapter , will default to database
    strategy:"jwt",
    // how often the session should be updated in second
    updateAge: 86400 // 1 day 
  },
  // https://authjs.dev/reference/core
  // Callbacks are asynchronous functions you can use to control what happens when an action is performed
  callbacks: {
    // This jwt callback is called whenever a JSON Web Token is created (i.e. at sign in) or updated (i.e whenever a session is accessed in the client).
    // Anything you return here will be saved in the JWT and forwarded to the session callback
    // The JWT is encrypted by default via your AUTH_SECRET environment variable.
    async jwt({ token, user,trigger }) {
      console.info('\x1b[32m%s\x1b[0m',"jwt callback is running, triggered by",trigger)
      // params.account Contains information about the provider that was used to sign in.
      // params.profile The OAuth profile returned from your provider.
      // params.session When using AuthConfig.session strategy: "jwt", this is the data sent from the client via the useSession().update method.
      // params.token When trigger is "signIn" or "signUp", it will be a subset of JWT,name, email and image will be included.
      // params.trigger Check why was the jwt callback invoked. signin/signup/update
      // params.user Either the result of the OAuthConfig.profile or the CredentialsConfig.authorize callback. (jwt or database model)
      if (user) {
         token.role = user.role;
      }
      return token;
    },
    // This callback is called whenever a session is checked
    // the return value will be exposed to the client, so be careful what you return here
    // By default, only a subset (email, name, image) of the token is returned for increased security.
    async session({ session, token }) {
      console.info('\x1b[32m%s\x1b[0m',"session callback is running")
      session.user.id = token.sub;
      session.user.role = token.role;
      return session;
    },
    // Controls whether a user is allowed to sign in or not. (true / false)
    async signIn({user,account }) {
      console.info('\x1b[32m%s\x1b[0m',"signin callback is running")
      // params.credentials? If Credentials provider is used, it contains the user credentials
      // params.account?
      // params.email?
      // params.email.verificationRequest?
      // params.profile?
      // params.user
      if (account?.provider === 'google') {
        console.info('\x1b[32m%s\x1b[0m',"Creating or updating user database")
        try {
          // Null/undefined checks are important
          const userEmail = user.email
          if (!userEmail) {
            console.error('No email found')
            return false
          }
    
          // Check if user exists
          // const keys = {
          //   type: "user",
          //   id: userEmail
          // }
          // const response = await GetItemByKeys(keys)
    
          // If user doesn't exist, create user
          // note : user.new_user was sent by profile() above to check if user exists in db or not, we dont need to fetch db again.
          if (user.new_user) {
            const data = {
              type: "user",
              id: userEmail,
              name: user.name,
              picture: user.image,
              role:user.role,
              createdAt: new Date().toISOString()
            }
            
            await CreateItem(data)
            console.info('\x1b[32m%s\x1b[0m',"User is created.")
            return true
          }else{
            // if user exist , update user database based on data from provider
            // const update_data = {
            //   name: user.name || '',
            //   picture: user.image || '',
            //   role:user.role
            // }
            // await UpdateItem(keys,update_data)
            console.info('\x1b[32m%s\x1b[0m',"User is already exist in db.")
            return true
          }
        } catch (error) {
          console.error("Error in Google sign-in process", error)
          return false
        }
      }
      return true
    }
  },
});
