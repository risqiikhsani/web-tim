import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const blogs = [
  {
    id: "item-1",
    title: "Contoh Serverless Architecture",
    text: "test",
    label: "aws services",
    author: "Jane Doe",
    createdAt: "1 Jan 2024",
    image: "/images/aws1.jpg",
  },
  {
    id: "item-2",
    title: "Manfaat Amazon Bedrock model Anthropic",
    text: "test",
    label: "aws services",
    author: "Jane Doe",
    createdAt: "1 Jan 2024",
    image: "/images/aws1.jpg",
  },
  {
    id: "item-3",
    title: "Perbandingan AWS RDS Aurora V1 dan V2",
    text: "test",
    label: "aws services",
    author: "Jane Doe",
    createdAt: "1 Jan 2024",
    image: "/images/aws1.jpg",
  },
  {
    id: "item-4",
    title: "AWS DynamoDB DAX vs AWS DynamoDB",
    text: "test",
    label: "aws services",
    author: "Jane Doe",
    createdAt: "1 Jan 2024",
    image: "/images/aws1.jpg",
  },
  {
    id: "item-5",
    title: "Review AWS Amplify",
    text: "test",
    label: "aws services",
    author: "Jane Doe",
    createdAt: "1 Jan 2024",
    image: "/images/aws1.jpg",
  },
  {
    id: "item-6",
    title: "Review AWS ECS vs AWS EKS",
    text: "test",
    label: "aws services",
    author: "Jane Doe",
    createdAt: "1 Jan 2024",
    image: "/images/aws1.jpg",
  },
  {
    id: "item-7",
    title: "Services penting dalam Data Analytics di AWS",
    text: "test",
    label: "aws services",
    author: "Jane Doe",
    createdAt: "1 Jan 2024",
    image: "/images/aws1.jpg",
  },
  {
    id: "item-8",
    title: "Apa itu AWS ElastiCache",
    text: "test",
    label: "aws services",
    author: "Jane Doe",
    createdAt: "1 Jan 2024",
    image: "/images/aws1.jpg",
  },
  {
    id: "item-9",
    title: "Perbandingan AWS CDK dan AWS CloudFormation",
    text: "test",
    label: "aws services",
    author: "Jane Doe",
    createdAt: "1 Jan 2024",
    image: "/images/aws1.jpg",
  },
  {
    id: "item-10",
    title: "Review AWS Recognition",
    text: "test",
    label: "aws services",
    author: "Jane Doe",
    createdAt: "1 Jan 2024",
    image: "/images/aws1.jpg",
  },
];

const Page = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mb-8 md:mb-14 lg:mb-16">
          <h1 className="mb-4 w-full text-4xl font-medium md:mb-5 md:text-5xl lg:mb-6 lg:text-6xl">
            Blogs
          </h1>
          <p>List of blogs</p>
        </div>
        <div className="grid gap-x-4 gap-y-8 md:grid-cols-2 lg:gap-x-6 lg:gap-y-12 2xl:grid-cols-3">
          {blogs.map((blog) => (
            <a
              key={blog.id}
              href={`/blogs/${blog.id}`}
              className="group flex flex-col"
            >
              <div className="mb-4 flex text-clip rounded-xl md:mb-5">
                <div className="size-full transition duration-300 group-hover:scale-105">
                  <Image
                    width={1000}
                    height={1000}
                    src={blog.image}
                    alt={blog.title}
                    className="aspect-[3/2] size-full object-cover object-center"
                  />
                </div>
              </div>

              <div>
                <Badge>{blog.label}</Badge>
              </div>
              <div className="group-hover:text-primary mb-2 line-clamp-3 break-words pt-4 text-lg font-medium md:mb-3 md:pt-4 md:text-2xl lg:pt-4 lg:text-3xl">
                {blog.title}
              </div>
              <div className="mb-4 line-clamp-2 text-sm text-muted-foreground md:mb-5 md:text-base">
                {blog.createdAt}
              </div>
              <div className="flex items-center gap-2">
                <Avatar className="size-12">
                  <AvatarImage src="https://www.shadcnblocks.com/images/block/avatar-1.webp" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-px">
                  <span className="text-md font-medium">{blog.author}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
