import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SignInGoogle from "./sign-in-google";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <Card>
      <Image
        width={100}
        height={100}
        alt="logo"
        src="/logo/timcorp.png"
        className="mx-auto mt-4"
      />
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Login with available methods below.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <SignInGoogle />
        <CardDescription>
          Dont have an account? <Link href="/auth/signup">Sign Up</Link>
        </CardDescription>
      </CardContent>
    </Card>
  );
}
