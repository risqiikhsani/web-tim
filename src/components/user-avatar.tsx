import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { auth } from "../auth";
import { SignOut } from "./sign-out";
import Link from "next/link";

export default async function UserAvatar() {
  const session = await auth();

  if (!session?.user) return null;

  if (session.user) {
    console.log(session);
  }

  const imageUrl = session.user.image || ""

  return (
    
    <Dialog>
      <DialogTrigger asChild>
        <Avatar className="hover:border-2 hover:border-primary hover:cursor-pointer">
          {imageUrl ? (
            <AvatarImage 
              src={imageUrl} 
              alt={session.user.name || 'User Avatar'}
              referrerPolicy="no-referrer" // Add this to handle cross-origin images
            />
          ) : null}
          <AvatarFallback>{session.user.name?.[0] || 'AB'}</AvatarFallback>
        </Avatar>
      </DialogTrigger>
      {/* Rest of your component */}
      <DialogContent className="sm:max-w-[425px] flex flex-col gap-2">
        <DialogHeader>
          <DialogTitle>Profile</DialogTitle>
        </DialogHeader>

        <p className="text-muted-foreground text-sm">{session.user.name}</p>
        <p className="text-muted-foreground text-sm">{session.user.email}</p>
        <p className="text-muted-foreground text-sm">role : {session.user.role}</p>
        <DialogClose asChild className="border rounded-md text-center p-2 hover:border-primary"><Link href="/dashboard">Dashboard</Link></DialogClose>
        <SignOut />
      </DialogContent>
    </Dialog>
  );
}
