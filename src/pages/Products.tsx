import { useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '@/components/SEO';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/data';
import { Button } from '@/components/ui/button';
import { getProductCollectionSchema, getBreadcrumbSchema } from '@/lib/seo-helpers';

const Products = () => {
  const structuredData = [
    getProductCollectionSchema(products),
    getBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Products', url: '/products' },
    ]),
  ];
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'men' | 'kids'>('all');

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'men', label: "Men's Wear" },
    { value: 'kids', label: "Kids Wear" },
  ];

  return (
    <>
      <SEO
        title="Products - Premium Men's & Kids Wear Collection | Arihant Fashion Kolhapur"
        description="Browse our premium collection of men's suits, blazers, shirts, and kids formal wear. Quality fashion at competitive prices. Visit our store in Kolhapur for expert tailoring and personalized service."
        keywords="men's suits Kolhapur, blazers Kolhapur, formal shirts Kolhapur, kids formal wear, men's wear collection, kids fashion Kolhapur, premium clothing Kolhapur"
        url="/products"
        image="/og-image.jpg"
        type="website"
        structuredData={structuredData}
      />
      <main className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Collection</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover premium fashion for men and kids
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.value}
                onClick={() => setSelectedCategory(category.value as any)}
                variant={selectedCategory === category.value ? 'default' : 'outline'}
                className={
                  selectedCategory === category.value
                    ? 'bg-primary text-primary-foreground shadow-red-glow'
                    : 'border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                }
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-2xl text-muted-foreground">
                  No products found in this category
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h2 className="text-4xl font-bold text-foreground">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-lg text-muted-foreground">
              Visit our store in Kolhapur to explore our complete collection and get personalized styling assistance.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-red-glow px-8"
            >
              Visit Our Store
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
