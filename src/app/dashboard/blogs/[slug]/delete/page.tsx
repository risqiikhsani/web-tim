import { NewsBlogsType } from "@/types/types";
import { H1 } from "@/components/typography/Typography";
import DeleteForm from "./delete-form";

const URL = process.env.NEXT_PUBLIC_URL

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const response = await fetch(`${URL}/api/blogs/${slug}`);
  const data : NewsBlogsType = await response.json()

  

  return (
    <div>
        <H1>Delete Blogs</H1>

        <DeleteForm initial_data={data}/>
        
    </div>
  );
}
