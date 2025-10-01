import { motion } from "framer-motion";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { Hero } from "@/components/Home/Hero";
import { ProductShowcase } from "@/components/Home/ProductShowcase";
import { FeatureSection } from "@/components/Features/FeatureSection";
import { MockupCanvas } from "@/components/MockupDesigner/MockupCanvas";
import { CartSidebar } from "@/components/Cart/CartSidebar";
import { useState } from "react";

const Index = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      name: "Custom Design Tee",
      price: 24.99,
      quantity: 2,
      size: "L",
      color: "Black",
      image: "👕",
      customDesign: "My Design"
    }
  ]);

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      setCartItems(items => items.filter(item => item.id !== id));
    } else {
      setCartItems(items => 
        items.map(item => 
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-background"
    >
      <Header 
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onMenuToggle={() => setIsCartOpen(true)}
      />
      
      <main>
        <Hero />
        <ProductShowcase />
        <FeatureSection />
        
        {/* Mockup Designer Demo Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Try Our Design Tool
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience our powerful mockup designer that lets you preview your designs in real-time
              </p>
            </motion.div>
            
            <div className="max-w-2xl mx-auto">
              <MockupCanvas designImage="placeholder" />
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Cart Sidebar */}
      <CartSidebar
        open={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
      />
    </motion.div>
  );
};

export default Index;
