import CopyTextButton from "@/components/copy-text-button";
import { H1 } from "@/components/typography/Typography";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { MessagesType } from "@/types/types";

const URL = process.env.NEXT_PUBLIC_URL;
export default async function page() {
  const response = await fetch(`${URL}/api/messages`);
  const data: MessagesType[] = await response.json();
  return (
    <div className="flex flex-col gap-2">
      <H1>List of Anonymous Messages</H1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead >Email</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Message</TableHead>
            <TableHead>Time Creation</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((a, i) => (
            <TableRow key={i}>
              <TableCell className="flex items-center">{a.id}
                <CopyTextButton text={a.id}/>
              </TableCell>
              <TableCell>{a.name}</TableCell>
              <TableCell>{a.message}</TableCell>
              <TableCell>{a.createdAt}</TableCell>
              <TableCell className="flex gap-2">
                <Button>Detail</Button>
                <Button>Answer with company email</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
