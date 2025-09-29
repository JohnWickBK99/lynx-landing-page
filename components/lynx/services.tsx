import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

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
    description: "Train custom AI models tailored to your specific business needs and data requirements.",
    features: ["Custom Datasets", "Model Fine-tuning", "Performance Optimization"],
    cta: "Get Started",
  },
  {
    title: "Web3 Integration",
    description: "Seamlessly integrate Web3 functionality into your existing applications and workflows.",
    features: ["Wallet Integration", "dApp Development", "API Solutions"],
    cta: "Explore",
  },
  {
    title: "Blockchain Consulting",
    description: "Strategic guidance on blockchain adoption, tokenomics, and decentralized architecture design.",
    features: ["Strategy Planning", "Technical Architecture", "Implementation Roadmap"],
    cta: "Consult",
  },
  {
    title: "DeFi Protocol Development",
    description: "Build sophisticated DeFi protocols with advanced features like yield farming, lending, and AMM.",
    features: ["Liquidity Pools", "Yield Strategies", "Governance Tokens"],
    cta: "Build Now",
  },
  {
    title: "AI-Powered Analytics",
    description: "Transform your data into actionable insights with our advanced AI analytics platform.",
    features: ["Predictive Analytics", "Real-time Dashboards", "Custom Reports"],
    cta: "Analyze",
  },
]

export default function Services() {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-balance">Our comprehensive services</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            From concept to deployment, we provide end-to-end solutions that drive innovation and accelerate your
            digital transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group"
            >
              <CardHeader className="space-y-3">
                <CardTitle className="text-lg group-hover:text-primary transition-colors">{service.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent"
                >
                  {service.cta} →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
