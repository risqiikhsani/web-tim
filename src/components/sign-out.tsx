import { auth, signOut } from "@/auth";
import { Button } from "./ui/button";

export async function SignOut() {
  const session = await auth();

  if (!session?.user) return null;

  return (
    <form
      action={async () => {
        "use server";
        await signOut({redirectTo:"/"});
      }}
    >
      <Button type="submit" variant="outline" className="w-full hover:border-primary">Sign Out</Button>
    </form>
  );
}
