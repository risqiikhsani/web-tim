export const Feature = () => {
    return (
      <section className="py-32">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-3">
            <h2 className="row-span-2 text-3xl font-semibold lg:text-5xl">
              Our Values and Principles
            </h2>
            <div>
              <h3 className="mb-2 text-xl font-medium">Cloud Strategy Development</h3>
              <p className="text-muted-foreground">
              Design tailored AWS cloud strategies aligned with business goals
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-medium">Cost Optimization</h3>
              <p className="text-muted-foreground">
              Identify ways to reduce AWS costs while maintaining performance
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-medium">Governance & Compliance</h3>
              <p className="text-muted-foreground">
              Implement security best practices and ensure compliance with industry standards.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-medium">Performance Monitoring</h3>
              <p className="text-muted-foreground">
              Offer continuous insights to optimize AWS workloads
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Feature;
  