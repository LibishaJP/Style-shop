import { motion } from "framer-motion";
import { Star, Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Product {
  id: string;
  name: string;
  price: number;
  rating: number;
  image: string;
  category: string;
  colors: string[];
}

const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Classic Cotton Tee",
    price: 24.99,
    rating: 4.8,
    image: "🎽",
    category: "T-Shirts",
    colors: ["#000000", "#FFFFFF", "#FF6B6B", "#4ECDC4"]
  },
  {
    id: "2", 
    name: "Premium Hoodie",
    price: 49.99,
    rating: 4.9,
    image: "👕",
    category: "Hoodies",
    colors: ["#2C3E50", "#E74C3C", "#3498DB", "#95A5A6"]
  },
  {
    id: "3",
    name: "Canvas Tote Bag",
    price: 19.99,
    rating: 4.7,
    image: "👜",
    category: "Bags",
    colors: ["#F8F9FA", "#343A40", "#FD7E14", "#20C997"]
  },
  {
    id: "4",
    name: "Baseball Cap",
    price: 29.99,
    rating: 4.6,
    image: "🧢",
    category: "Accessories",
    colors: ["#000000", "#FFFFFF", "#DC3545", "#0D6EFD"]
  }
];

export const ProductShowcase = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold mb-4"
          >
            Featured Products
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Discover our most popular items, perfect for your custom designs
          </motion.p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-white font-semibold px-8">
            View All Products
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
        {/* Product Image */}
        <div className="relative aspect-square bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20" />
          </div>
          
          {/* Product Emoji/Icon */}
          <motion.div
            className="text-6xl group-hover:scale-110 transition-transform duration-300"
            whileHover={{ rotate: [0, -5, 5, 0] }}
            transition={{ duration: 0.5 }}
          >
            {product.image}
          </motion.div>

          {/* Hover Actions */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-black/20 flex items-center justify-center space-x-2"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-white rounded-full shadow-lg hover:bg-primary hover:text-white transition-colors"
            >
              <Heart className="h-4 w-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-white rounded-full shadow-lg hover:bg-primary hover:text-white transition-colors"
            >
              <ShoppingCart className="h-4 w-4" />
            </motion.button>
          </motion.div>

          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <span className="bg-primary text-dark text-xs px-2 py-1 rounded-full font-medium">
              {product.category}
            </span>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-1 group-hover:text-primary-gradient-start transition-colors">
              {product.name}
            </h3>
            <div className="flex items-center space-x-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-3 w-3 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`}
                  />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">
                ({product.rating})
              </span>
            </div>
          </div>

          {/* Color Options */}
          <div className="flex items-center space-x-2">
            <span className="text-xs text-muted-foreground">Colors:</span>
            <div className="flex space-x-1">
              {product.colors.map((color, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-4 h-4 rounded-full border-2 border-border cursor-pointer"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* Price and CTA */}
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold gradient-text"
            >
              ${product.price}
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="sm" variant="outline" className="hover:bg-button-hover hover:text-white">
                Customize
              </Button>
            </motion.div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};