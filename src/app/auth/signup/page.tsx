import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SignInGoogle from "./sign-in-google";

import Link from "next/link";
import Image from "next/image";

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
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>Sign Up with available methods below.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <SignInGoogle/>
        <CardDescription>Already have an account? <Link href="/auth/login">Login</Link></CardDescription>
      </CardContent>
    </Card>
  );
}
