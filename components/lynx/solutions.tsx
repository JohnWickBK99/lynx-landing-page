import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const solutions = [
  {
    title: "AI-Powered Analytics",
    description: "Advanced machine learning models for predictive analytics and intelligent automation",
    features: ["Real-time Processing", "Predictive Models", "Custom AI Training"],
    badge: "AI",
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "Blockchain Infrastructure",
    description: "Secure, scalable blockchain solutions for enterprise applications and DeFi protocols",
    features: ["Smart Contracts", "DeFi Integration", "Cross-chain Support"],
    badge: "Blockchain",
    gradient: "from-green-500/20 to-teal-500/20",
  },
  {
    title: "Web3 Development",
    description: "Full-stack Web3 applications with seamless user experience and robust security",
    features: ["dApp Development", "Wallet Integration", "NFT Platforms"],
    badge: "Web3",
    gradient: "from-orange-500/20 to-red-500/20",
  },
]

export default function Solutions() {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="text-sm px-4 py-2">
            Our Solutions
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-balance">Cutting-edge technology solutions</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            We deliver innovative solutions that combine the power of AI, blockchain, and Web3 to transform your
            business operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden border-border/50 bg-gradient-to-br ${solution.gradient} backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 group`}
            >
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="text-xs">
                    {solution.badge}
                  </Badge>
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <div className="w-4 h-4 rounded-full bg-primary"></div>
                  </div>
                </div>
                <CardTitle className="text-xl">{solution.title}</CardTitle>
                <CardDescription className="text-base">{solution.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
