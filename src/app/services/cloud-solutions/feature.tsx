export const Feature = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-3">
          <h2 className="row-span-2 text-3xl font-semibold lg:text-5xl">
            Our Values and Principles
          </h2>
          <div>
            <h3 className="mb-2 text-xl font-medium">Architecture Design</h3>
            <p className="text-muted-foreground">
            Design secure, scalable AWS infrastructure for startups to enterprises
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-medium">DevOps Automation</h3>
            <p className="text-muted-foreground">
            Build CI/CD pipelines using AWS tools like CodePipeline and CodeBuild
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-medium">Application Modernization</h3>
            <p className="text-muted-foreground">
            Migrate and modernize legacy applications to serverless or containerized AWS services
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-medium">Data & Analytics Solutions</h3>
            <p className="text-muted-foreground">
            Enable data-driven decisions with AWS services like Redshift, Athena, and QuickSight
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
