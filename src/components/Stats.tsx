// src/components/Stats.tsx
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
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Soft gradient at top for smooth transition from previous section */}
      <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-primary-dark/40 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="space-y-1"
            >
              {/* Main Highlight */}
              <div className="text-4xl md:text-6xl font-extrabold text-primary-foreground drop-shadow-sm">
                {stat.value}
              </div>

              {/* Subtext */}
              <div className="text-sm md:text-base text-primary-foreground/90 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Soft bottom blend for smooth transition */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-primary-dark/40 to-transparent pointer-events-none" />
    </section>
  );
};

export default Stats;
