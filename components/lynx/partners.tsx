import { Marquee } from "@/components/magicui/marquee"

const partners = [
  { name: "TechCorp", logo: "TC" },
  { name: "BlockChain Inc", logo: "BC" },
  { name: "AI Solutions", logo: "AI" },
  { name: "CryptoVentures", logo: "CV" },
  { name: "Web3 Labs", logo: "W3" },
  { name: "DataFlow", logo: "DF" },
  { name: "SmartContract Co", logo: "SC" },
  { name: "DecentraFi", logo: "DF" },
]

export default function Partners() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-muted-foreground">Trusted by industry leaders</h2>
        </div>

        <div className="relative">
          <Marquee pauseOnHover className="[--duration:30s]">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center mx-8 opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center border border-border/30">
                    <span className="font-bold text-sm text-foreground">{partner.logo}</span>
                  </div>
                  <span className="text-lg font-medium text-muted-foreground whitespace-nowrap">{partner.name}</span>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}
