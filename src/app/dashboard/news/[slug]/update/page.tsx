import { H1 } from "@/components/typography/Typography";
import React from "react";
import UpdateForm from "./update-form";

const URL = process.env.NEXT_PUBLIC_URL

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const response = await fetch(`${URL}/api/news/${slug}`);
  const data = await response.json()

  return (
    <div>
        <H1>Update News</H1>
        <UpdateForm initial_data={data}/>
    </div>
  );
}
