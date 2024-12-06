export const Feature = () => {
    return (
      <section className="py-32">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-3">
            <h2 className="row-span-2 text-3xl font-semibold lg:text-5xl">
              Our Values and Principles
            </h2>
            <div>
              <h3 className="mb-2 text-xl font-medium">Customized Training Programs</h3>
              <p className="text-muted-foreground">
              Tailor content based on team roles, from developers to architects.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-medium">AWS Certifications Preparation</h3>
              <p className="text-muted-foreground">
              Offer guidance for AWS Certified Solutions Architect, Developer, Data Analytics, etc.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-medium">Workshops & Hands-On Labs</h3>
              <p className="text-muted-foreground">
              Conduct live demonstrations and interactive labs.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-medium">On-Demand Learning</h3>
              <p className="text-muted-foreground">
              Provide flexible, self-paced training materials
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Feature;
  