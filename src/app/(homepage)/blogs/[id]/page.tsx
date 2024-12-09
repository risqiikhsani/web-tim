import { ArrowDownRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const data = {
  id: "item-1",
  title: "Title",
  text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. ",
  label: "Ut varius dolor turpis",
  author: "Jane Doe",
  createdAt: "1 Jan 2024",
  image: "/images/aws1.jpg",
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  console.log(id)

  return (
    <section className="flex flex-col gap-6 items-center">
      <div className="flex flex-col gap-2 items-center text-center lg:items-start lg:text-left">
        <Badge variant="outline">
          Blog
          <ArrowDownRight className="ml-2 size-4" />
        </Badge>
        
        <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
          {data.title}
        </h1>

        <div className="flex w-full justify-center gap-2 lg:justify-start">
          <div>Author : {data.author}</div>
          
          <Badge>{data.createdAt}</Badge>
        </div>
      </div>
      <Image
        width={1000}
        height={1000}
        src={data.image}
        alt="placeholder hero"
        className="rounded-md object-cover"
      />

      <div className="max-w-[800px] text-center">{data.text}</div>
    </section>
  );
}
