"use client";
import { motion } from "framer-motion";
import { AuroraText } from "../magicui/aurora-text";

export default function Hero() {
  return (
    <section className="relative min-h-screen -top-15 flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Global Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-orange-900/50 to-amber-900/30">
        {/* World Map Silhouette */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
            {/* Simplified world continents */}
            <path
              d="M200 300 Q250 280 300 300 L350 320 Q400 310 450 330 L500 340 Q550 330 600 350 L650 360 Q700 350 750 370 L800 380 Q850 370 900 390 L950 400 Q1000 390 1050 410"
              stroke="rgba(251, 146, 60, 0.3)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
            />
            <path
              d="M150 400 Q200 380 250 400 L300 420 Q350 410 400 430 L450 440 Q500 430 550 450 L600 460 Q650 450 700 470 L750 480 Q800 470 850 490"
              stroke="rgba(251, 146, 60, 0.2)"
              strokeWidth="1.5"
              fill="none"
              className="animate-pulse"
              style={{ animationDelay: "1s" }}
            />
            <path
              d="M100 500 Q150 480 200 500 L250 520 Q300 510 350 530 L400 540 Q450 530 500 550 L550 560 Q600 550 650 570"
              stroke="rgba(251, 146, 60, 0.25)"
              strokeWidth="1"
              fill="none"
              className="animate-pulse"
              style={{ animationDelay: "2s" }}
            />
          </svg>
        </div>

        {/* Global Connection Nodes */}
        <div className="absolute inset-0">
          {/* Major connection hubs */}
          <div className="absolute top-1/4 left-1/6 w-3 h-3 bg-orange-400/60 rounded-full animate-pulse shadow-lg shadow-orange-400/30"></div>
          <div
            className="absolute top-1/3 left-1/3 w-2 h-2 bg-amber-400/60 rounded-full animate-pulse shadow-lg shadow-amber-400/30"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute top-2/5 left-1/2 w-4 h-4 bg-orange-500/60 rounded-full animate-pulse shadow-lg shadow-orange-500/30"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/3 right-1/3 w-2 h-2 bg-orange-400/60 rounded-full animate-pulse shadow-lg shadow-orange-400/30"
            style={{ animationDelay: "1.5s" }}
          ></div>
          <div
            className="absolute top-1/4 right-1/6 w-3 h-3 bg-amber-400/60 rounded-full animate-pulse shadow-lg shadow-amber-400/30"
            style={{ animationDelay: "2s" }}
          ></div>

          {/* Secondary nodes */}
          <div
            className="absolute top-3/5 left-1/4 w-1.5 h-1.5 bg-orange-300/40 rounded-full animate-pulse"
            style={{ animationDelay: "0.8s" }}
          ></div>
          <div
            className="absolute top-2/3 left-2/3 w-1.5 h-1.5 bg-amber-300/40 rounded-full animate-pulse"
            style={{ animationDelay: "1.3s" }}
          ></div>
          <div
            className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-orange-300/40 rounded-full animate-pulse"
            style={{ animationDelay: "1.8s" }}
          ></div>
        </div>

        {/* Animated Connection Lines */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <defs>
              <linearGradient
                id="connectionGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="rgba(251, 146, 60, 0.4)" />
                <stop offset="50%" stopColor="rgba(245, 158, 11, 0.3)" />
                <stop offset="100%" stopColor="rgba(251, 191, 36, 0.2)" />
              </linearGradient>
            </defs>

            {/* Connection lines between nodes */}
            <path
              d="M200 200 Q400 150 600 200 Q800 250 1000 200"
              stroke="url(#connectionGradient)"
              strokeWidth="1"
              fill="none"
              strokeDasharray="5,5"
              className="animate-pulse"
            />
            <path
              d="M150 300 Q350 250 550 300 Q750 350 950 300"
              stroke="url(#connectionGradient)"
              strokeWidth="1"
              fill="none"
              strokeDasharray="3,7"
              className="animate-pulse"
              style={{ animationDelay: "1s" }}
            />
            <path
              d="M100 400 Q300 350 500 400 Q700 450 900 400"
              stroke="url(#connectionGradient)"
              strokeWidth="1"
              fill="none"
              strokeDasharray="4,6"
              className="animate-pulse"
              style={{ animationDelay: "2s" }}
            />
          </svg>
        </div>

        {/* Floating Data Particles */}
        <div className="absolute inset-0">
          <div
            className="absolute top-1/5 left-1/5 w-1 h-1 bg-orange-300/60 rounded-full animate-bounce"
            style={{ animationDelay: "0.5s", animationDuration: "3s" }}
          ></div>
          <div
            className="absolute top-2/5 left-3/5 w-1 h-1 bg-amber-300/60 rounded-full animate-bounce"
            style={{ animationDelay: "1.2s", animationDuration: "2.5s" }}
          ></div>
          <div
            className="absolute top-3/5 left-1/3 w-1 h-1 bg-orange-300/60 rounded-full animate-bounce"
            style={{ animationDelay: "2.1s", animationDuration: "3.5s" }}
          ></div>
          <div
            className="absolute top-1/6 right-1/4 w-1 h-1 bg-amber-300/60 rounded-full animate-bounce"
            style={{ animationDelay: "0.8s", animationDuration: "2.8s" }}
          ></div>
          <div
            className="absolute top-4/5 right-1/3 w-1 h-1 bg-orange-300/60 rounded-full animate-bounce"
            style={{ animationDelay: "1.7s", animationDuration: "3.2s" }}
          ></div>
        </div>

        {/* Rotating Globe Effect */}
        <div className="absolute top-1/2 right-1/6 transform -translate-y-1/2">
          <div className="relative w-32 h-32 opacity-20">
            <div
              className="absolute inset-0 rounded-full border border-orange-400/30 animate-spin"
              style={{ animationDuration: "20s" }}
            >
              <div className="absolute top-2 left-1/2 w-1 h-1 bg-orange-400/60 rounded-full transform -translate-x-1/2"></div>
              <div className="absolute bottom-2 left-1/2 w-1 h-1 bg-amber-400/60 rounded-full transform -translate-x-1/2"></div>
              <div className="absolute top-1/2 left-2 w-1 h-1 bg-orange-500/60 rounded-full transform -translate-y-1/2"></div>
              <div className="absolute top-1/2 right-2 w-1 h-1 bg-orange-400/60 rounded-full transform -translate-y-1/2"></div>
            </div>
            <div
              className="absolute inset-2 rounded-full border border-amber-400/20 animate-spin"
              style={{
                animationDuration: "15s",
                animationDirection: "reverse",
              }}
            >
              <div className="absolute top-1 left-1/2 w-0.5 h-0.5 bg-amber-400/60 rounded-full transform -translate-x-1/2"></div>
              <div className="absolute bottom-1 left-1/2 w-0.5 h-0.5 bg-orange-400/60 rounded-full transform -translate-x-1/2"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left space-y-8">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance text-foreground">
                The future of{" "}
                <AuroraText colors={["#ffccd3", "#e78a53"]}>
                  Global AI & Web3
                </AuroraText>
                solutions
              </div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:text-xl text-pretty max-w-2xl text-lg text-muted-foreground"
            >
              Connect with the world through cutting-edge AI models, blockchain
              technology, and global Web3 innovations that transcend borders.
            </motion.p>
          </div>

          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 hover:-translate-y-1 shadow-lg text-primary-foreground border-0"
            >
              Start Building →
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 border-orange-400/50 hover:border-orange-300/70 transition-all duration-300 bg-transparent text-orange-100 hover:text-white hover:bg-orange-500/10"
            >
              View Solutions
            </Button>
          </div> */}

          <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-orange-200/70">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-2"
            >
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
              <span>Global Reach</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-2"
            >
              <div
                className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <span>24/7 Worldwide Support</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-2"
            >
              <div
                className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <span>Cross-Border Solutions</span>
            </motion.div>
          </div>
        </div>

        {/* Right Content - Global Tech Visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
            {/* Central Global Hub */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-white/50 to-primary/70 rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/70 to-white/50 rounded-full flex items-center justify-center">
                {/* <span className="text-primary-foreground font-bold text-lg">
                  🌍
                </span> */}
                <img
                  src="/logo/lynx-or-sm.svg"
                  alt="Lynx AI"
                  className="w-auto h-8"
                />
              </div>
            </div>

            {/* Orbiting Global Elements */}
            <div
              className="absolute inset-0 animate-spin"
              style={{ animationDuration: "25s" }}
            >
              {/* Americas Node */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-full border border-orange-400/40 flex items-center justify-center backdrop-blur-sm">
                <span className="text-xs font-bold text-orange-300">🌎</span>
              </div>

              {/* Asia Node */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-gradient-to-br from-amber-500/20 to-orange-600/20 rounded-full border border-amber-400/40 flex items-center justify-center backdrop-blur-sm">
                <span className="text-xs font-bold text-amber-300">🌏</span>
              </div>

              {/* Europe/Africa Node */}
              <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-orange-600/20 to-red-500/20 rounded-full border border-orange-400/40 flex items-center justify-center backdrop-blur-sm">
                <span className="text-xs font-bold text-orange-300">🌍</span>
              </div>

              {/* Oceania Node */}
              <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-amber-600/20 to-orange-500/20 rounded-full border border-amber-400/40 flex items-center justify-center backdrop-blur-sm">
                <span className="text-xs font-bold text-amber-300">
                  {/* 🌐 */}
                  🌍
                </span>
              </div>
            </div>

            {/* Global Connection Rings */}
            <div className="absolute inset-0">
              <svg className="w-full h-full" viewBox="0 0 450 450">
                <defs>
                  <linearGradient
                    id="globalGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="rgba(251, 146, 60, 0.4)" />
                    <stop offset="50%" stopColor="rgba(245, 158, 11, 0.3)" />
                    <stop offset="100%" stopColor="rgba(251, 191, 36, 0.4)" />
                  </linearGradient>
                </defs>
                <circle
                  cx="225"
                  cy="225"
                  r="175"
                  fill="none"
                  stroke="url(#globalGradient)"
                  strokeWidth="1"
                  strokeDasharray="8,4"
                  className="animate-pulse"
                />
                <circle
                  cx="225"
                  cy="225"
                  r="125"
                  fill="none"
                  stroke="url(#globalGradient)"
                  strokeWidth="1"
                  strokeDasharray="6,6"
                  className="animate-pulse"
                  style={{ animationDelay: "1s" }}
                />
                <circle
                  cx="225"
                  cy="225"
                  r="75"
                  fill="none"
                  stroke="url(#globalGradient)"
                  strokeWidth="1"
                  strokeDasharray="4,8"
                  className="animate-pulse"
                  style={{ animationDelay: "2s" }}
                />
              </svg>
            </div>

            {/* Global Data Particles */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-orange-400/20 rounded-full animate-pulse shadow-lg shadow-orange-400/20"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-amber-400/20 rounded-full animate-pulse delay-1000 shadow-lg shadow-amber-400/20"></div>
            <div className="absolute top-1/2 -right-8 w-4 h-4 bg-orange-500/30 rounded-full animate-pulse delay-500 shadow-lg shadow-orange-500/20"></div>
            <div className="absolute top-1/4 -left-6 w-3 h-3 bg-amber-500/40 rounded-full animate-pulse delay-700 shadow-lg shadow-amber-500/20"></div>
            <div className="absolute bottom-1/4 -right-6 w-5 h-5 bg-orange-400/25 rounded-full animate-pulse delay-300 shadow-lg shadow-orange-400/20"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
