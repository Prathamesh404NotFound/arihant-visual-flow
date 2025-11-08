import { motion } from 'framer-motion';
import { brandStory, brandMilestones } from '@/data/data';
import aboutStore from '@/assets/about-store.jpg';
import { FaCheck } from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 to-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Story</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {brandStory.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image and Vision Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-lg overflow-hidden shadow-hover">
                <img
                  src={aboutStore}
                  alt="Arihant Store Interior"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-foreground">
                Our <span className="text-primary">Vision</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {brandStory.vision}
              </p>
              
              <div className="space-y-4 pt-6">
                <h3 className="text-2xl font-semibold text-foreground">Why Choose Arihant?</h3>
                <ul className="space-y-3">
                  {[
                    'Premium quality fabrics and craftsmanship',
                    'Expert tailoring and perfect fits',
                    'Wide range of styles for all occasions',
                    'Personalized customer service',
                    'Competitive pricing without compromising quality',
                    'Latest fashion trends from around the world'
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="bg-primary/10 rounded-full p-1 mt-1">
                        <FaCheck className="text-primary text-sm" />
                      </div>
                      <span className="text-muted-foreground">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Milestones that shaped Arihant Fashion
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20" />

              {/* Timeline Items */}
              {brandMilestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative mb-12 ${
                    index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:text-right'
                  }`}
                >
                  <div className={`flex items-center gap-4 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    {/* Year Badge */}
                    <div className="relative z-10 bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center font-bold shadow-red-glow flex-shrink-0">
                      {milestone.year}
                    </div>

                    {/* Content Card */}
                    <div className="flex-1 bg-card p-6 rounded-lg shadow-card hover:shadow-hover transition-all duration-300">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Values</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Quality First',
                description: 'We never compromise on the quality of our products and services.',
              },
              {
                title: 'Customer Delight',
                description: 'Your satisfaction is our top priority and drives everything we do.',
              },
              {
                title: 'Innovation',
                description: 'Constantly evolving to bring you the latest in fashion trends.',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-card p-8 rounded-lg shadow-card hover:shadow-hover transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-primary rounded-full" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
