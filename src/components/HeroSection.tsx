import { motion } from 'motion/react';
import logo from 'figma:asset/f7497c096327a2b4551aa107c2c85cc073defc9c.png';

export function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.15)_0%,transparent_50%)]" />
      
      {/* Animated glowing orbs */}
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 bg-green-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              background: `rgba(34, 197, 94, ${Math.random() * 0.5 + 0.2})`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Matrix-style falling lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute w-px bg-gradient-to-b from-transparent via-green-400/50 to-transparent"
            style={{
              left: `${(i + 1) * 6}%`,
              height: '100px',
            }}
            animate={{
              y: [-100, window.innerHeight + 100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#22c55e_0.5px,transparent_0.5px),linear-gradient(to_bottom,#22c55e_0.5px,transparent_0.5px)] bg-[size:50px_50px] opacity-[0.08]" />
      
      {/* Scanline effect */}
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(34,197,94,0.03)_50%)] bg-[length:100%_4px] pointer-events-none"
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ scale: 0, rotateY: -180, opacity: 0 }}
          animate={{ scale: 1, rotateY: 0, opacity: 1 }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
          className="mb-8"
        >
          <img 
            src={logo} 
            alt="Binary Bytes Logo" 
            className="w-64 h-64 md:w-96 md:h-96 mx-auto object-contain"
          />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
        >
          <h1 className="text-4xl md:text-6xl text-green-400 mb-4">
            Binary Bytes
          </h1>
          <p className="text-xl md:text-2xl text-green-300/80">
            Building the Future, One Byte at a Time
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="mt-16"
        >
          <div className="flex flex-col items-center gap-2 text-green-400/60">
            <span className="text-sm">Scroll to meet the team</span>
            <svg
              className="w-6 h-6 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Floating code symbols */}
      <motion.div
        className="absolute top-20 left-10 text-green-400/30 text-5xl font-mono"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {'{ }'}
      </motion.div>

      <motion.div
        className="absolute bottom-32 right-20 text-green-400/30 text-5xl font-mono"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {'< />'}
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-1/4 text-green-400/20 text-4xl font-mono"
        animate={{
          x: [0, 15, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {'[ ]'}
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-1/4 text-green-400/25 text-3xl font-mono"
        animate={{
          x: [0, -20, 0],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {'( )'}
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-1/3 text-green-400/20 text-4xl font-mono"
        animate={{
          y: [0, -25, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {'=> '}
      </motion.div>

      {/* Geometric shapes */}
      <motion.div
        className="absolute top-1/4 right-10 w-16 h-16 border-2 border-green-400/30"
        animate={{
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-1/3 w-12 h-12 border-2 border-green-400/25 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/2 right-1/2 w-20 h-20 border-2 border-green-400/20"
        style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }}
        animate={{
          rotate: [0, 360],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}
