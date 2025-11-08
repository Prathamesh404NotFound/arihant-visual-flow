import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaStar, FaAward, FaUsers } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  // Floating decorative shapes
  const shapes = Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    size: Math.random() * 100 + 50,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
  }));

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </motion.div>

      {/* Animated Decorative Shapes */}
      <div className="absolute inset-0 z-[5] overflow-hidden">
        {shapes.map((shape) => (
          <motion.div
            key={shape.id}
            className="absolute rounded-full border border-white/10"
            style={{
              width: shape.size,
              height: shape.size,
              left: `${shape.x}%`,
              top: `${shape.y}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + shape.delay,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: shape.delay,
            }}
          />
        ))}
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-[5]">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeOut',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30"
            >
              <FaStar className="text-yellow-300" />
              <span className="text-white text-sm font-medium">Premium Fashion Since 1985</span>
              <FaStar className="text-yellow-300" />
            </motion.div>

            {/* Main Title with Gradient Effect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <h1
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold mb-4 px-4"
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 50%, #ffffff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: '0 0 80px rgba(255,255,255,0.3)',
                  filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.3))',
                  letterSpacing: '-0.02em',
                }}
              >
                ARIHANT
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mt-4" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-3"
            >
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white/95 font-light tracking-wide px-4">
                Men's & Kids Wear
              </p>
              <p className="text-base sm:text-lg md:text-xl text-white/80 font-medium px-4">
                Kolhapur's Premier Fashion Destination
              </p>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-bold mt-4 px-4">
                Style Redefined
                <span className="block text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl font-normal mt-2">
                  for Men & Kids
                </span>
              </p>
            </motion.div>

            {/* Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-12 pt-4 px-4"
            >
              {[
                { icon: FaUsers, value: '50K+', label: 'Happy Customers' },
                { icon: FaAward, value: '35+', label: 'Years Experience' },
                { icon: FaStar, value: '4.9', label: 'Customer Rating' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  className="flex flex-col items-center gap-2 px-4 sm:px-6 py-3 sm:py-4 bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl border border-white/20 hover:bg-white/20 transition-all"
                >
                  <stat.icon className="text-xl sm:text-2xl text-white/90" />
                  <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-white/80 font-medium text-center">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-6 sm:pt-8 px-4"
            >
              <Link to="/products" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="group w-full sm:w-auto bg-white text-primary hover:bg-white/95 shadow-2xl hover:shadow-white/50 px-6 sm:px-10 py-5 sm:py-7 text-base sm:text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300"
                >
                  Explore Collection
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-white/80 text-white hover:bg-white hover:text-primary px-6 sm:px-10 py-5 sm:py-7 text-base sm:text-lg font-semibold rounded-full backdrop-blur-sm bg-white/10 hover:bg-white transition-all duration-300 transform hover:scale-105"
                >
                  Visit Store
                </Button>
              </Link>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              className="absolute bottom-10 left-1/2 -translate-x-1/2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center pt-2 backdrop-blur-sm bg-white/10">
                <motion.div
                  className="w-1.5 h-1.5 bg-white rounded-full"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
