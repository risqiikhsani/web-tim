import { H1 } from "@/components/typography/Typography";
import type { ListObjectsCommandOutput } from "@aws-sdk/client-s3";
import CreateForm from "./create-form";
import DeleteForm from "./delete-form";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { File, FolderArchiveIcon } from "lucide-react";

const URL = process.env.NEXT_PUBLIC_URL;

export default async function page() {
  const response = await fetch(`${URL}/api/files`);
  const data: ListObjectsCommandOutput = await response.json();
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
          {data.Contents?.map((a, i) => (
            <TableRow key={i}>
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
