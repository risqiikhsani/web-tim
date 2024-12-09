import { type DefaultSession } from "next-auth";
import 'next-auth/jwt';

declare module "next-auth"{
    interface Session{
        user: User & DefaultSession["user"];
    }

    interface User{
        role:string;
        new_user?:boolean;
    }
}

declare module "next-auth/jwt"{
    interface JWT {
        sub:string;
        role:string;
    }
}