  // import Google from "next-auth/providers/google";
  // import NextAuth from "next-auth";
  // import { DynamoDB, DynamoDBClientConfig } from "@aws-sdk/client-dynamodb"
  // import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb"
  // import { DynamoDBAdapter } from "@auth/dynamodb-adapter"

  // const config: DynamoDBClientConfig = {
  //   credentials: {
  //     accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
  //     secretAccessKey: process.env.AWS_SECRET_ACCESS_ID!,
  //   },
  //   region: process.env.AWS_REGION
  // }

  // const client = DynamoDBDocument.from(new DynamoDB(config),{
  //   marshallOptions: {
  //     convertEmptyValues: true,
  //     removeUndefinedValues: true,
  //     convertClassInstanceToMap: true,
  //   },
  // })

  // import Credentials from "next-auth/providers/credentials";
  // import type { Provider } from "next-auth/providers";

  // // const providers: Provider[] = [
  // //   Google({
  // //     clientId: process.env.AUTH_GOOGLE_ID,
  // //     clientSecret: process.env.AUTH_GOOGLE_SECRET,
  // //     // We can extend the default session data in a few ways, one of which is by using the authorize and profile functions.
  // //     // async profile(profile) {
  // //     //   return { ...profile }
  // //     // },
  // //   }),
  // //   // Credentials({
  // //   // // We can extend the default session data in a few ways, one of which is by using the authorize and profile functions.
  // //   //   async authorize(credentials) {
  // //   //     return { ...credentials }
  // //   //   },
  // //   // }),
  // // ]

  // export const { handlers, auth, signIn, signOut } = NextAuth({
  //   providers: [
  //     Google({
  //       // authorization: {
  //       //   params: {
  //       //     scope: "openid profile email https://www.googleapis.com/auth/userinfo.profile"
  //       //   }
  //       // },
  //       profile(profile) {
  //         return {
  //           role: profile.role ?? "user",
  //           image: profile.picture || profile.avatar_url, // Add this line
  //           ...profile,
  //         };
  //       },
  //     }),
  //   ],
  //   adapter: DynamoDBAdapter(client,{ tableName: 'next-auth',indexName:'GSI1PK-GSI1SK-index' }),
  //   pages: {
  //     signIn: "/auth/login",
  //   },
  //   //adapter: DynamoDBAdapter(client),
  //   callbacks: {
  //     async signIn({ user, account, profile }) {
  //       // Automatically link accounts with the same email
  //       return true;
  //     },
  //     // the jwt callback exposes the user’s profile information coming from the provider
  //     jwt({ token, user, profile }) {
  //       // console.log('Profile:', profile)
  //       // console.log('Token:', token)
  //       // example of token returned
  //       // Token: {
  //       //   name: 'Risqi Ikhsani',
  //       //   email: 'risqiikhsani16@gmail.com',
  //       //   picture: 
  //       //   sub: 
  //       //   id: 
  //       //   role: 
  //       //   iat: 
  //       //   exp: 
  //       //   jti: 
  //       // }
  //       if (user) {
  //         // User is available during sign-in
  //         // You can leverage this to add the user’s id to the JWT token
  //         // token.id = user.id;
  //         // set role from profile provider to jwt
  //         // token.role = user.role;
  //       }
  //       return token;
  //     },
  //     session({ session, token, user }) {
  //       // Then, on subsequent calls of this API will have access to the user’s id via token.id
  //       // Then, to expose the user’s id in the actual session, you can access token.id in the session callback and save it on session.user.id.
  //       // session.user.id = token.id;
  //       // set role from jwt to session
  //       // session.user.role = token.role;
  //       // Calls to auth() or useSession() will now have access to the user’s id.
  //       return session;
  //     },
  //     // If you are using a database session strategy, you can add the user’s id to the session by modifying the session callback
  //     // // The user object is the user from the database, and there is no token
  //     // session({ session, user }) {
  //     //   session.user.id = user.id
  //     //   return session
  //     // },

  //     // signIn({ profile }) {
  //     //   // t is possible to only allow your company’s employees to sign up with their company email addresses.
  //     //   return profile.email.endsWith("@yourdomain.com")
  //     // }
  //   },
  // });
