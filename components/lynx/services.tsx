import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    title: "Smart Contract Development",
    description:
      "Custom smart contracts built with security and efficiency in mind. From simple tokens to complex DeFi protocols.",
    features: ["Security Audits", "Gas Optimization", "Multi-chain Support"],
    cta: "Learn More",
  },
  {
    title: "AI Model Training",
    description:
      "Train custom AI models tailored to your specific business needs and data requirements.",
    features: [
      "Custom Datasets",
      "Model Fine-tuning",
      "Performance Optimization",
    ],
    cta: "Get Started",
  },
  {
    title: "Web3 Integration",
    description:
      "Seamlessly integrate Web3 functionality into your existing applications and workflows.",
    features: ["Wallet Integration", "dApp Development", "API Solutions"],
    cta: "Explore",
  },
  {
    title: "Blockchain Consulting",
    description:
      "Strategic guidance on blockchain adoption, tokenomics, and decentralized architecture design.",
    features: [
      "Strategy Planning",
      "Technical Architecture",
      "Implementation Roadmap",
    ],
    cta: "Consult",
  },
  {
    title: "DeFi Protocol Development",
    description:
      "Build sophisticated DeFi protocols with advanced features like yield farming, lending, and AMM.",
    features: ["Liquidity Pools", "Yield Strategies", "Governance Tokens"],
    cta: "Build Now",
  },
  {
    title: "AI-Powered Analytics",
    description:
      "Transform your data into actionable insights with our advanced AI analytics platform.",
    features: [
      "Predictive Analytics",
      "Real-time Dashboards",
      "Custom Reports",
    ],
    cta: "Analyze",
  },
];

export default function Services() {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <button
            type="button"
            className="group relative z-[60] mx-auto rounded-full border border-white/20 bg-white/5 px-6 py-1 text-xs backdrop-blur transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-100 md:text-sm"
          >
            <div className="absolute inset-x-0 -top-px mx-auto h-0.5 w-1/2 bg-gradient-to-r from-transparent via-[#e78a53] to-transparent shadow-2xl transition-all duration-500 group-hover:w-3/4"></div>
            <div className="absolute inset-x-0 -bottom-px mx-auto h-0.5 w-1/2 bg-gradient-to-r from-transparent via-[#e78a53] to-transparent shadow-2xl transition-all duration-500 group-hover:h-px"></div>
            <span className="relative text-white">Services</span>
          </button>
          <h2 className="from-foreground/60 via-foreground to-foreground/60 dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 mt-5 bg-gradient-to-r bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px] __className_bb4e88 relative z-10">
            Our comprehensive services
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            From concept to deployment, we provide end-to-end solutions that
            drive innovation and accelerate your digital transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group"
            >
              <CardHeader className="space-y-3">
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                {/* <Button
                  variant="ghost"
                  size="sm"
                  className="w-fit justify-start p-0 h-auto text-primary hover:text-primary/80 hover:!bg-transparent"
                >
                  {service.cta} →
                </Button> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
