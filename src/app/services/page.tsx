import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Infinity, MessagesSquare, Zap, ZoomIn } from 'lucide-react';
import Link from 'next/link';

const feature = [
    {
      title: 'Cloud Consulting',
      description:
        'Leverage our expertise to craft a tailored AWS strategy. We provide in-depth analysis, architectural guidance, and best practices to align your cloud environment with business goals.',
      icon: <Zap className="size-6" />,
      button:'Learn more',
      link:'cloud-consulting'
    },
    {
      title: 'Cloud Solutions',
      description:
        'Transform your business with cutting-edge AWS solutions designed to enhance scalability, optimize performance, and reduce costs. From infrastructure setup to advanced integrations, we’ve got you covered.',
      icon: <Zap className="size-6" />,
      button:'Learn more',
      link:'cloud-solutions'
    },
    {
      title: 'Migration / Transformation',
      description:
        'Seamlessly migrate and modernize your workloads with our proven AWS migration methodologies. We ensure minimal disruption, improved efficiency, and a smooth transition to the cloud.',
      icon: <Zap className="size-6" />,
      button:'Learn more',
      link:'cloud-migration-transformation'
    },
    
    {
      title: 'Education / Training',
      description:
        'Empower your team with comprehensive AWS training. From foundational concepts to advanced certifications, we provide hands-on learning tailored to your organization’s needs.',
      icon: <Zap className="size-6" />,
      button:'Learn more',
      link:'education'
    },
  ];
  
const Page = () => {
  return (
    <section className="">
      <div className="container">
        <div className="flex w-full flex-col items-center">
          <div className="flex flex-col items-center space-y-4 text-center sm:space-y-6 md:max-w-3xl md:text-center">
            <p className="text-sm text-muted-foreground">WHY WE ARE UNIQUE</p>
            <h2 className="text-3xl font-medium md:text-5xl">
              Bringing the best to you by the best in the industry
            </h2>

            <p className="text-muted-foreground md:max-w-2xl">
            Your Trusted Partner in <span className="text-primary">AWS Cloud Solutions</span> and <span className="text-primary">Education</span>.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-20 grid max-w-5xl gap-6 md:grid-cols-2">
          {feature.map((feature, idx) => (
            <div
              className="flex flex-col justify-between rounded-lg bg-accent p-6 md:min-h-[300px] md:p-8"
              key={idx}
            >
              <span className="mb-6 flex size-11 items-center justify-center rounded-full bg-background text-purple-600">
                {feature.icon}
              </span>
              <div>
                <h3 className="text-lg font-medium md:text-2xl text-primary">
                  {feature.title}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
              <Button asChild variant="outline" className='rounded-xl mt-4'>
                <Link href={`/services/${feature.link}`}>{feature.button}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
