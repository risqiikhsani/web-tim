import { H3, P } from "@/components/typography/Typography";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { UserType } from "@/types/types";
import { AvatarFallback } from "@radix-ui/react-avatar";
import UpdateForm from "./update-form";
import { auth } from "@/auth";
import { Badge } from "@/components/ui/badge";

const URL = process.env.NEXT_PUBLIC_URL;

export default async function Page() {
  const session = await auth();
  const response = await fetch(`${URL}/api/users`);
  const data: UserType[] = await response.json();
  return (
    <div className="p-6">
      {data.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.map((a, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <Avatar className="w-16 h-16">
                <AvatarImage
                  src={a.picture || ""}
                  alt={a.name}
                  referrerPolicy="no-referrer"
                />
                <AvatarFallback>
                  {a.name ? a.name.charAt(0) : "?"}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <H3 className="">{a.name}</H3>
                <p>{a.createdAt}</p>
                <P className="text-sm text-gray-600">ID: {a.id}</P>
                <div><Badge>{a.role}</Badge></div>
                  
               
              </div>
              <div className="ml-auto">
                {session?.user.role === "moderator" && (
                  <UpdateForm initial_data={a} />
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-600">
          <P>No users found.</P>
        </div>
      )}
    </div>
  );
}
