import { H1 } from "@/components/typography/Typography";

const URL = process.env.NEXT_PUBLIC_URL

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const data = await fetch(`${URL}/api/blogs/${slug}`);
  const news = await data.json();

  return (
    <div>
      <H1>Blogs Detail</H1>
      {JSON.stringify(news)}
    </div>
  );
}
