import CopyTextButton from "@/components/copy-text-button";
import { H1 } from "@/components/typography/Typography";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import { SubscribersType } from "@/types/types";

const URL = process.env.NEXT_PUBLIC_URL;
export default async function page() {
  const response = await fetch(`${URL}/api/subscribers`);
  const data: SubscribersType[] = await response.json();
  return (
    <div className="flex flex-col gap-2">
      <H1>List of Website Subscribers</H1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead >Email</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Time Subscribe</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((a, i) => (
            <TableRow key={i}>
              <TableCell className="flex items-center">{a.id}
                <CopyTextButton text={a.id}/>
              </TableCell>
              <TableCell>{a.type}</TableCell>
              <TableCell>{a.createdAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
