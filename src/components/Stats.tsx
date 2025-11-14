const stats = [
  {
    value: "15+",
    label: "Years Experience",
  },
  {
    value: "$50M+",
    label: "Recovered for Clients",
  },
  {
    value: "200+",
    label: "Satisfied Clients",
  },
  {
    value: "98%",
    label: "Success Rate",
  },
];

const Stats = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-primary-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-primary-foreground/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
