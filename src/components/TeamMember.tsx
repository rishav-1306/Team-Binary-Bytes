import { motion } from 'motion/react';
import { Linkedin, Github, MessageCircle } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  linkedin: string;
  github: string;
  discord: string;
  index: number;
  fit?: 'cover' | 'contain';
}

export function TeamMember({ name, role, image, linkedin, github, discord, index, fit = 'cover' }: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{ 
        scale: 1.05,
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
      className="group relative bg-gradient-to-br from-black to-gray-900 rounded-xl overflow-hidden border-2 border-green-400/20 hover:border-green-400 transition-all duration-300"
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Glowing effect on hover */}
      <div className="absolute inset-0 bg-green-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent" />
      
      <div className="p-6 relative">
        {/* Image container with 3D effect */}
        <div className="relative mb-4 overflow-hidden rounded-lg">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={image}
              alt={name}
              className={`w-full h-72 ${fit === 'contain' ? 'object-contain' : 'object-cover object-top'} bg-black`}
            />
          </motion.div>
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          
          {/* Corner accent */}
          <div className="absolute top-0 right-0 w-16 h-16">
            <div className="absolute top-0 right-0 border-t-2 border-r-2 border-green-400 w-8 h-8" />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-3">
          <div>
            <h3 className="text-2xl text-green-400 mb-1">{name}</h3>
            <p className="text-green-300/70">{role}</p>
          </div>

          {/* Binary decoration */}
          <div className="text-xs text-green-400/30 font-mono">
            {`<${name.toLowerCase().replace(' ', '_')} />`}
          </div>

          {/* Social links */}
          <div className="flex gap-4 pt-4 border-t border-green-400/20">
            <motion.a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-green-400/10 rounded-lg hover:bg-green-400/20 transition-colors"
            >
              <Linkedin className="w-5 h-5 text-green-400" />
            </motion.a>
            
            <motion.a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-green-400/10 rounded-lg hover:bg-green-400/20 transition-colors"
            >
              <Github className="w-5 h-5 text-green-400" />
            </motion.a>
            
            <motion.a
              href={discord}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-green-400/10 rounded-lg hover:bg-green-400/20 transition-colors"
            >
              <MessageCircle className="w-5 h-5 text-green-400" />
            </motion.a>
          </div>
        </div>

        {/* Animated corner elements */}
        <motion.div
          className="absolute bottom-0 left-0 w-20 h-20 pointer-events-none"
          animate={{
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 0.2,
          }}
        >
          <div className="absolute bottom-0 left-0 border-b-2 border-l-2 border-green-400/30 w-12 h-12" />
        </motion.div>
      </div>
    </motion.div>
  );
}
