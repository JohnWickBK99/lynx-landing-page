const stats = [
  {
    number: "50+",
    label: "Projects Delivered",
    description: "Successful implementations across various industries",
  },
  {
    number: "99.9%",
    label: "Uptime Guarantee",
    description: "Enterprise-grade reliability and performance",
  },
  {
    number: "24/7",
    label: "Support Available",
    description: "Round-the-clock technical assistance",
  },
  {
    number: "100M+",
    label: "Transactions Processed",
    description: "Secure blockchain transactions handled",
  },
]

export default function Stats() {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center space-y-2 p-6 rounded-lg border border-border/30 bg-card/20 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-foreground">{stat.label}</div>
              <div className="text-sm text-muted-foreground text-pretty">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
