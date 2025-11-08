import { motion } from 'framer-motion';
import { Product } from '@/types';
import { Card } from '@/components/ui/card';

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="group overflow-hidden border-0 shadow-card hover:shadow-hover transition-all duration-500 cursor-pointer">
        {/* Image Container with 3D Hover Effect */}
        <div className="relative overflow-hidden aspect-square">
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
          
          {/* Red Glow Overlay on Hover */}
          <motion.div
            className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-500"
            initial={false}
          />
          
          {/* Category Badge */}
          <div className="absolute top-4 right-4">
            <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold uppercase">
              {product.category}
            </span>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-6 space-y-3">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between pt-2">
            <span className="text-2xl font-bold text-primary">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.sizes && (
              <span className="text-xs text-muted-foreground">
                {product.sizes.length} sizes
              </span>
            )}
          </div>
        </div>

        {/* Hover Border Effect */}
        <motion.div
          className="absolute inset-0 border-2 border-primary opacity-0 group-hover:opacity-100 rounded-lg pointer-events-none"
          transition={{ duration: 0.3 }}
        />
      </Card>
    </motion.div>
  );
};

export default ProductCard;
