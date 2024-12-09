import {
    BarChartHorizontal,
    BatteryCharging,
    CircleHelp,
    Layers,
    WandSparkles,
    ZoomIn,
  } from 'lucide-react';
  
  const reasons = [
    {
      title: 'Operational Excellence',
      description:
        'Focuses on running and monitoring systems to deliver business value and improving processes and procedures.',
      icon: <ZoomIn className="size-6" />,
    },
    {
      title: 'Security',
      description:
        'Protects data, systems, and assets through risk assessment and mitigation.',
      icon: <BarChartHorizontal className="size-6" />,
    },
    {
      title: 'Reliability',
      description:
        'Ensures a workload performs its intended function correctly and consistently, even under stress.',
      icon: <CircleHelp className="size-6" />,
    },
    {
      title: 'Performance Efficiency',
      description:
        'Optimizes resource usage and efficiently scales to meet evolving requirements.',
      icon: <WandSparkles className="size-6" />,
    },
    {
      title: 'Cost Optimization',
      description:
        'Avoids unnecessary costs and ensures efficient use of resources.',
      icon: <Layers className="size-6" />,
    },
    {
      title: 'Sustainability',
      description:
        'Minimizes environmental impact by adopting energy-efficient best practices.',
      icon: <BatteryCharging className="size-6" />,
    },
  ];
  
  const Waf = () => {
    return (
      <div className="p-6 rounded-xl my-20 border-2 shadow-lg">
        <div className="container">
          <div className="mb-10 md:mb-20">
            <h2 className="mb-2 text-center text-2xl font-semibold lg:text-3xl">
              We Prioritize <span className='text-primary font-bold'>Well-Architected Framework</span> as foundational principles for designing and evaluating architectures.
            </h2>
          </div>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, i) => (
              <div key={i} className="flex flex-col">
                <div className="mb-5 flex size-16 items-center justify-center rounded-full bg-accent text-cyan-500">
                  {reason.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-primary">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Waf;
  