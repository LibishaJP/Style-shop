import { motion } from "framer-motion";
import { ArrowRight, Palette, Shirt, Star, ShoppingBag, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Floating Clothing Icons Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* T-Shirt floating across */}
        <motion.div
          className="absolute top-1/4 -left-16"
          animate={{
            x: [0, window.innerWidth + 100],
            y: [0, -20, 40, 0],
            rotate: [0, 10, -5, 0],
            opacity: [0.2, 0.4, 0.7, 0.4, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            delay: 0
          }}
        >
          <Shirt className="h-12 w-12 text-button-hover/30" />
        </motion.div>

        {/* Hoodie floating */}
        <motion.div
          className="absolute top-1/2 -left-16"
          animate={{
            x: [0, window.innerWidth + 100],
            y: [0, 20, -20, 0],
            rotate: [0, -8, 12, 0],
            opacity: [0, 0.4, 0.6, 0.4, 0]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
            delay: 8
          }}
        >
          <Package className="h-16 w-16 text-highlight/40" />
        </motion.div>

        {/* Shopping Bag floating */}
        <motion.div
          className="absolute top-3/4 -left-16"
          animate={{
            x: [0, window.innerWidth + 100],
            y: [0, -25, 15, 0],
            rotate: [0, 15, -10, 0],
            opacity: [0, 0.25, 0.4, 0.25, 0]
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
            delay: 15
          }}
        >
          <ShoppingBag className="h-10 w-10 text-accent/35" />
        </motion.div>

        {/* Additional smaller icons */}
        <motion.div
          className="absolute top-1/6 -left-16"
          animate={{
            x: [0, window.innerWidth + 100],
            y: [0, 10, -10, 0],
            opacity: [0, 0.2, 0.3, 0.2, 0]
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
            delay: 20
          }}
        >
          <Palette className="h-8 w-8 text-primary/25" />
        </motion.div>

        {/* Static decorative elements */}
        <motion.div
          className="absolute top-20 right-10 w-20 h-20 bg-primary/5 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-16 h-16 bg-highlight/5 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium"
            >
        
          
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight"
              >
                Turn Your
                <span className="gradient-text block mt-2">
                  Ideas Into
                </span>
                Wearable Art
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg md:text-xl text-muted-foreground max-w-2xl"
              >
                Upload your designs, customize placement, and create unique apparel 
                that tells your story. From concept to closet in just a few clicks.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-white font-semibold px-8 py-4 h-auto group">
                  Start Designing
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="lg" className="font-semibold px-8 py-4 h-auto">
                  View Catalog
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex justify-center lg:justify-start space-x-8 pt-8"
            >
              <StatItem number="10K+" label="Happy Customers" />
              <StatItem number="50K+" label="Designs Created" />
              <StatItem number="4.9" label="★ Rating" />
            </motion.div>
          </motion.div>

          {/* Right Content - Product Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Product Display */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-20"
              >
                <div className="w-full max-w-md mx-auto bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl">
                  {/* Mockup T-Shirt */}
                  <motion.div
                    animate={{ rotate: [0, 2, -2, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="relative"
                  >
                    <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                      <Shirt className="h-32 w-32 text-button-hover" />
                      {/* Custom Design Overlay */}
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <div className="w-20 h-20 bg-gradient-primary rounded-full opacity-80 flex items-center justify-center">
                          <Palette className="h-8 w-8 text-white" />
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                  
                  {/* Product Info */}
                  <div className="mt-6 text-center">
                    <h3 className="font-heading font-semibold text-lg">Custom Design Tee</h3>
                    <p className="text-muted-foreground text-sm mt-1">Premium Cotton Blend</p>
                    <div className="flex items-center justify-center mt-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-muted-foreground">(234 reviews)</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 z-10"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold">NEW</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-0 -left-14 z-10"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="bg-success text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Fast Shipping
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-primary rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

const StatItem = ({ number, label }: { number: string; label: string }) => (
  <div className="text-center">
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
      className="text-2xl md:text-3xl font-bold gradient-text"
    >
      {number}
    </motion.div>
    <div className="text-sm text-muted-foreground mt-1">{label}</div>
  </div>
);