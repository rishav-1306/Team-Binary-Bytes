import { motion } from 'motion/react';
import { TeamMember } from './TeamMember';
import amritImg from './ui/amrit.jpg';
import ananyaImg from './ui/ananya.jpg';
import ayushImg from './ui/ayush.jpg';
import rishavImg from './ui/rishavv.jpg';
import shreyaImg from './ui/shreya.jpg';
import rounakImg from './ui/rounak.jpg';

const teamMembers = [
  {
    name: 'Amrit',
    role: 'Merge Mage',
    image: amritImg,
    fit: 'contain',
    linkedin: 'https://www.linkedin.com/in/amrit-arya/',
    github: 'https://github.com/amrit-arya',
    discord: 'https://discord.com',
  },
  {
    name: 'Ananya',
    role: 'Data Dazzler',
    image: ananyaImg,
    fit: 'contain',
    linkedin: 'https://www.linkedin.com/in/ananya-srivastav-544251317/',
    github: 'https://github.com/ananya3377',
    discord: 'https://discord.com',
  },
  {
    name: 'Ayush',
    role: 'App Alchemy',
    image: ayushImg,
    linkedin: 'https://www.linkedin.com/in/ayushkumarjsr/',
    github: 'https://github.com/ayush6447',
    discord: 'https://discord.com',
  },
  {
    name: 'Rishav',
    role: 'Divine stacker',
    image: rishavImg,
    fit: 'contain',
    linkedin: 'https://www.linkedin.com/in/rishav-singh13/',
    github: 'https://github.com/rishav-1306',
    discord: 'https://discord.com/channels/@me',
  },
  {
    name: 'Shreya',
    role: 'Pixel Rogue',
    image: shreyaImg,
    fit: 'contain',
    linkedin: 'https://www.linkedin.com/in/shreya-kumari-6841a5311/',
    github: 'https://github.com',
    discord: 'https://discord.com',
  },
  {
    name: 'Rounak',
    role: 'Script Sorcerer',
    image: rounakImg,
    linkedin: 'https://www.linkedin.com/in/rounakmahato/',
    github: 'https://github.com/Rounak75',
    discord: 'https://discord.com',
  },
];

export function TeamSection() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-20 px-4 relative overflow-hidden">
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1)_0%,transparent_70%)]" />

      {/* Animated glowing orbs */}
      <motion.div
        className="absolute top-40 right-10 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-40 left-10 w-80 h-80 bg-green-400/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Animated grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#22c55e_0.5px,transparent_0.5px),linear-gradient(to_bottom,#22c55e_0.5px,transparent_0.5px)] bg-[size:60px_60px] opacity-[0.05]" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-400/5 font-mono"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 100 + 50}px`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            {['0', '1'][Math.floor(Math.random() * 2)]}
          </motion.div>
        ))}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute bg-green-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Diagonal lines */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`diag-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-green-400/20 to-transparent"
          style={{
            top: `${i * 15}%`,
            left: 0,
            right: 0,
            transform: `rotate(${i % 2 === 0 ? 2 : -2}deg)`,
          }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-24 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto mb-6"
          />
          
          <h2 className="text-5xl md:text-6xl text-green-400 mb-4">
            Meet The Team
          </h2>
          
          <p className="text-xl text-green-300/70 max-w-2xl mx-auto">
            The brilliant minds behind Binary Bytes, turning ideas into reality
          </p>
          
          <div className="mt-4 text-green-400/40 font-mono text-sm">
            {'// Six developers, infinite possibilities'}
          </div>
        </motion.div>

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={member.name}
              {...member}
              index={index}
            />
          ))}
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="inline-block px-8 py-4 border border-green-400/30 rounded-lg bg-green-400/5">
            <p className="text-green-400/70 font-mono">
              {'<Binary Bytes /> • Established 2025'}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Floating binary code animation */}
      <motion.div
        className="absolute top-1/4 left-10 text-green-400/10 font-mono text-sm"
        animate={{
          y: [0, -100],
          opacity: [0.1, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        01010101
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-10 text-green-400/10 font-mono text-sm"
        animate={{
          y: [0, -100],
          opacity: [0.1, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
          delay: 2,
        }}
      >
        11001100
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-20 text-green-400/10 font-mono text-sm"
        animate={{
          y: [0, -120],
          opacity: [0.15, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "linear",
          delay: 4,
        }}
      >
        10101010
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-20 text-green-400/10 font-mono text-sm"
        animate={{
          y: [0, -80],
          opacity: [0.12, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "linear",
          delay: 1,
        }}
      >
        11110000
      </motion.div>

      {/* Floating code symbols */}
      <motion.div
        className="absolute top-20 right-1/4 text-green-400/15 text-3xl font-mono"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {'</>'}
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-1/4 text-green-400/15 text-3xl font-mono"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        {'{}'}
      </motion.div>

      {/* Hexagon decorations */}
      <motion.div
        className="absolute top-1/3 left-10 w-16 h-16 border border-green-400/20"
        style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-10 w-12 h-12 border border-green-400/15"
        style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' }}
        animate={{
          rotate: [360, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}
