export const Feature = () => {
    return (
      <section className="py-32">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-3">
            <h2 className="row-span-2 text-3xl font-semibold lg:text-5xl">
              Our Values and Principles
            </h2>
            <div>
              <h3 className="mb-2 text-xl font-medium">Workload Migration</h3>
              <p className="text-muted-foreground">
              Migrate on-premises or cloud workloads to AWS.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-medium">Database Migration</h3>
              <p className="text-muted-foreground">
              Utilize AWS Database Migration Service for seamless database transitions.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-medium">Hybrid Cloud Solutions</h3>
              <p className="text-muted-foreground">
              Integrate AWS with existing on-prem systems for hybrid environments.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-medium">Cloud-Native Transformations</h3>
              <p className="text-muted-foreground">
              Transform traditional workloads into cloud-native applications.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Feature;
  