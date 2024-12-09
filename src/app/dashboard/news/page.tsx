import { NewsBlogsType } from "@/types/types";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ConvertDate } from "@/lib/convert-date";
import { H1 } from "@/components/typography/Typography";
import DeleteForm from "./delete-form";

const URL = process.env.NEXT_PUBLIC_URL;

export default async function page() {
  const response = await fetch(`${URL}/api/news`);
  const data: NewsBlogsType[] = await response.json();

  return (
    <div className="flex flex-col gap-4">
      <H1>News</H1>
      <Button asChild>
        <Link href="/dashboard/news/create">Create news</Link>
      </Button>

      <Table>
        <TableCaption>A list of publish.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Text</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Time Created</TableHead>
            <TableHead>Time Updated</TableHead>
            <TableHead>Details</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((a) => (
            <TableRow key={a.id}>
              <TableCell className="font-medium max-w-10 truncate">{a.id}</TableCell>
              <TableCell className="font-medium max-w-20 truncate">{a.title}</TableCell>
              <TableCell className="font-medium max-w-20 truncate">{a.text}</TableCell>
              <TableCell>
                <Badge>{a.type}</Badge>
              </TableCell>
              <TableCell>
                {ConvertDate(a.createdAt)}
              </TableCell>
              <TableCell>{a.updatedAt && ConvertDate(a.updatedAt)}</TableCell>
              <TableCell>
                <Button asChild variant="outline">
                  <Link href={`/dashboard/news/${a.id}`}>Detail</Link>
                </Button>
              </TableCell>
              <TableCell>
                <Button asChild variant="outline" className="mr-2">
                  <Link href={`/dashboard/news/${a.id}/update`}>Update</Link>
                </Button>
                <DeleteForm initial_data={a}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
