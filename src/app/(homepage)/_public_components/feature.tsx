import type { FeatureType } from "@/types/types";


export default function Feature({ features }: { features: FeatureType[]  }){
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-3">
          <h2 className="row-span-2 text-3xl font-semibold lg:text-5xl">
            Our Values and Principles
          </h2>
          {features.map((a, i) => (
            <div key={i}>
              <h3 className="mb-2 text-xl font-medium">{a.title}</h3>
              <p className="text-muted-foreground">{a.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

