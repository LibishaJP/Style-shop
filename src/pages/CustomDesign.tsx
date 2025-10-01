import { motion } from "framer-motion";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { MockupCanvas } from "@/components/MockupDesigner/MockupCanvas";
import { Palette, Upload, Download, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const CustomDesign = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-background"
    >
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-button-hover px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Palette className="h-4 w-4" />
              <span>Design Studio</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Create Your <span className="gradient-text">Custom Design</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Upload your artwork, adjust placement, and preview on realistic mockups before ordering.
            </p>
          </motion.div>

          {/* Design Tools */}
          <div className="grid lg:grid-cols-4 gap-8 mb-8">
            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="bg-card rounded-xl border p-6 space-y-6">
                <div>
                  <h3 className="font-semibold mb-4">Design Tools</h3>
                  <div className="space-y-3">
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Design
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <Settings className="h-4 w-4 mr-2" />
                      Adjust Position
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <Download className="h-4 w-4 mr-2" />
                      Export Mockup
                    </Button>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Product Options</h4>
                  <div className="space-y-2 text-sm">
                    <label className="flex items-center space-x-2">
                      <input type="radio" name="product" defaultChecked />
                      <span>T-Shirt</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="radio" name="product" />
                      <span>Hoodie</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="radio" name="product" />
                      <span>Tote Bag</span>
                    </label>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Main Canvas */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-3"
            >
              <div className="bg-card rounded-xl border p-6">
                <MockupCanvas designImage="placeholder" />
              </div>
            </motion.div>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center space-x-4"
          >
            <Button variant="outline" size="lg">
              Save Draft
            </Button>
            <Button size="lg" className="bg-gradient-primary text-white">
              Add to Cart
            </Button>
          </motion.div>
        </div>
      </main>

      <Footer />
    </motion.div>
  );
};

export default CustomDesign;