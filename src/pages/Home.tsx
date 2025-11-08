import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import ProductCard from '@/components/ProductCard';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { products, brandStory, galleryImages, contactInfo } from '@/data/data';
import { FaArrowRight } from 'react-icons/fa';
import aboutStore from '@/assets/about-store.jpg';

const Home = () => {
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                About <span className="text-primary">Arihant</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {brandStory.description}
              </p>
              <p className="text-md text-muted-foreground italic">
                {brandStory.vision}
              </p>
              <Link to="/about">
                <Button className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-red-glow">
                  Learn More About Us
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-lg overflow-hidden shadow-hover">
                <img
                  src={aboutStore}
                  alt="Arihant Store"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured <span className="text-primary">Collection</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our handpicked selection of premium men's wear and stylish kids' fashion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/products">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-red-glow px-8"
              >
                View All Products
                <FaArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Style <span className="text-primary">Gallery</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A glimpse into our premium collection
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {galleryImages.slice(0, 6).map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300" />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/gallery">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                View Full Gallery
                <FaArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Visit Our <span className="text-primary">Store</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Experience premium fashion in person
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="bg-card p-8 rounded-lg shadow-card space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Branch 1 - Bhavani Mandap</h3>
                <p className="text-muted-foreground">{contactInfo.address}</p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Phone:</strong> {contactInfo.phone}</p>
                  <p><strong>Email:</strong> {contactInfo.email}</p>
                  <p><strong>Hours:</strong> {contactInfo.hours}</p>
                </div>
              </div>

              <div className="bg-card p-8 rounded-lg shadow-card">
                <h3 className="text-xl font-bold text-primary mb-2">Branch 2</h3>
                <p className="text-muted-foreground">Coming Soon! Stay tuned for our second location.</p>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
