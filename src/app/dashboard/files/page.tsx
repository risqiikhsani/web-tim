import { H1 } from "@/components/typography/Typography";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { File } from "lucide-react";
import Link from "next/link";
import CreateForm from "./create-form";
import DeleteForm from "./delete-form";
import { ListObjectsV2CommandOutput } from "@aws-sdk/client-s3";

const URL = process.env.NEXT_PUBLIC_URL;

export default async function page() {
  const response = await fetch(`${URL}/api/files`);
  const data : ListObjectsV2CommandOutput = await response.json();
  return (
    <div className="flex flex-col gap-4">
      <H1>Files</H1>
      <CreateForm />
      <Table>
        <TableCaption>A list of files.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.Contents?.map((a, index) => (
            <TableRow key={index}>
              <TableCell className="flex gap-2 items-center">
                <File/>
                <Button asChild variant="link">
                <Link href={`${process.env.AWS_CDN_S3_BUCKET}/${a.Key!}`} target="_blank">{a.Key!}</Link>
                </Button>
                
              </TableCell>
              <TableCell>
                <DeleteForm file_key={a.Key!} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
