import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { auth } from "../auth";
import { SignOut } from "./sign-out";

export default async function UserAvatar() {
  const session = await auth();

  if (!session?.user) return null;

  if (session.user) {
    console.log(session);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Avatar>
          <AvatarImage src={session.user.image || `/logo/timcorp.png`} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] flex flex-col gap-2">
        <DialogHeader>
          <DialogTitle>Profile</DialogTitle>
        </DialogHeader>

        <p className="text-muted-foreground text-sm">{session.user.name}</p>
        <p className="text-muted-foreground text-sm">{session.user.email}</p>

        <SignOut />
      </DialogContent>
    </Dialog>
  );
}
