const data = [
  {
    title: "Count students",
    count: 1200,
    type: "students",
  },
  {
    title: "Count clients",
    count: 20,
    type: "clients",
  },
  {
    title: "Count partners",
    count: 10,
    type: "partners",
  },
];

const Stat = () => {
  return (
    <section className="py-32">
      <div className="container">
        <h1 className="text-center text-4xl font-semibold lg:text-6xl">
          Together we make the world a better place.
        </h1>
        <div className="grid gap-10 pt-9 md:grid-cols-3 lg:gap-0 lg:pt-20">
          {data.map((a, i) => (
            <div className="text-center" key={i}>
              <p className="text-sm font-medium text-muted-foreground">
                {a.title}
              </p>
              <p className="pt-4 text-7xl font-semibold lg:pt-10">{a.count}</p>
              <p className="text-2xl font-semibold text-muted-foreground">
                {a.type}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stat;
