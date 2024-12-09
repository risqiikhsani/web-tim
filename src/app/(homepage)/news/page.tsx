import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const news = [
  {
    id: 'item-1',
    title: 'MSIB Batch 7 telah dibuka',
    text:
      'test',
    label: 'Ut varius dolor turpis',
    author: 'Jane Doe',
    createdAt: '1 Jan 2024',
    image: '/images/aws1.jpg',
  },
  {
    id: 'item-2',
    title: 'TIMCorp MergingHUB new services',
    text:
      'test',
    label: 'Ut varius dolor turpis',
    author: 'Jane Doe',
    createdAt: '1 Jan 2024',
    image: '/images/aws1.jpg',
  },
  {
    id: 'item-3',
    title: 'TIMCorp Data Analytics MSIB',
    text:
      'test',
    label: 'Ut varius dolor turpis',
    author: 'Jane Doe',
    createdAt: '1 Jan 2024',
    image: '/images/aws1.jpg',
  },
  {
    id: 'item-4',
    title: 'MSIB batch 6 telah berakhir dengan phenomenal',
    text:
      'test',
    label: 'Ut varius dolor turpis',
    author: 'Jane Doe',
    createdAt: '1 Jan 2024',
    image: '/images/aws1.jpg',
  },
  {
    id: 'item-5',
    title: 'Pemenang Best Project Capstone MSIB Batch 6',
    text:
      'test',
    label: 'Ut varius dolor turpis',
    author: 'Jane Doe',
    createdAt: '1 Jan 2024',
    image: '/images/aws1.jpg',
  },
];

const Page = () => {
  return (
    <section className=" ">
      <div className="container flex flex-col items-center gap-16">
        <h2 className="mx-auto mb-3 text-pretty text-center text-2xl font-semibold md:mb-4 md:text-3xl lg:mb-6 lg:max-w-3xl">
          News
        </h2>
        <div className="grid gap-y-10 sm:grid-cols-12 sm:gap-y-12 md:gap-y-16 lg:gap-y-20">
          {news.map((item) => (
            <Link
              key={item.id}
              href={`/news/${item.id}`}
              className="group order-last grid gap-y-6 sm:order-first sm:col-span-12 sm:grid-cols-10 sm:gap-x-5 sm:gap-y-0 md:items-center md:gap-x-8 lg:col-span-10 lg:col-start-2 lg:gap-x-12"
            >
              <div className="sm:col-span-5">
                <div className="mb-4 md:mb-6">
                  <div className="flex text-xs uppercase tracking-wider text-muted-foreground">
                    <span className="mr-3 md:mr-5 lg:mr-6">news</span>
                    <span className="mr-3 md:mr-5 lg:mr-6">
                      {item.createdAt}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold md:text-2xl lg:text-3xl group-hover:text-primary">
                  {item.title}
                </h3>
                <div className="mt-4 flex items-center space-x-2 md:mt-5">
                  <span className="font-semibold md:text-base">Read more</span>
                  <ArrowRight className="ml-2 size-3 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
              <div className="order-first sm:order-last sm:col-span-5">
                <div className="aspect-[16/9] text-clip rounded-lg border border-border">
                  <Image
                    width={1000}
                    height={1000}
                    src={item.image}
                    alt={item.title}
                    className="size-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
