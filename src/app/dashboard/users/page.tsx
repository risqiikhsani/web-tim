import { H3, P } from "@/components/typography/Typography";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { UserType } from "@/types/types";
import { AvatarFallback } from "@radix-ui/react-avatar";
import UpdateForm from "./update-form";
import { auth } from "@/auth";

const URL = process.env.NEXT_PUBLIC_URL;

export default async function Page() {
  const session = await auth();
  const response = await fetch(`${URL}/api/users`);
  const data: UserType[] = await response.json();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {data.length > 0 &&
        data.map((a, i) => (
          <div key={i}>
            <div className="flex gap-4 p-4 rounded-lg shadow-md border">
              <Avatar>
                <AvatarImage
                  src={a.picture || ""}
                  alt={a.name}
                  referrerPolicy="no-referrer"
                />
                <AvatarFallback>US</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <H3>{a.name}</H3>
                <P>{a.id}</P>
                <P>role : {a.role}</P>
              </div>
              <div className="flex-1"></div>
              {session?.user.role == "moderator" && <UpdateForm initial_data={a} />}
            </div>
          </div>
        ))}
    </div>
  );
}
