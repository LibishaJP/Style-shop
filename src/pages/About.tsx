import { motion } from "framer-motion";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { Heart, Users, Award, Target } from "lucide-react";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-background"
    >
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              About <span className="gradient-text">Styleshop</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We're passionate about helping people express their creativity through custom apparel. 
              Founded in 2020, Styleshop has grown from a small startup to a leading platform for 
              custom clothing design and printing.
            </p>
          </motion.div>

          {/* Values Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: Heart,
                title: "Passion",
                description: "We love what we do and it shows in every product we create."
              },
              {
                icon: Users,
                title: "Community",
                description: "Building connections through shared creativity and self-expression."
              },
              {
                icon: Award,
                title: "Quality",
                description: "Premium materials and printing techniques for lasting results."
              },
              {
                icon: Target,
                title: "Innovation",
                description: "Constantly improving our tools and services for better experiences."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Story Section */}
          <motion.div
            
          >
            <h2 className="text-3xl font-heading font-bold text-center mb-8">Our Story</h2>
            <div className="prose prose-lg max-w-4xl mx-auto text-muted-foreground">
              <p>
                Styleshop was born from a simple idea: everyone should be able to turn their 
                creative visions into reality. Our founders, frustrated by the limitations of 
                existing custom printing services, set out to create a platform that would 
                make custom apparel design accessible, affordable, and enjoyable.
              </p>
              <p>
                Today, we've helped over 10,000 customers create more than 50,000 unique designs. 
                From artists selling their work to businesses creating branded merchandise, 
                from event organizers to individuals celebrating special moments, Styleshop 
                has become the go-to platform for custom apparel.
              </p>
              <p>
                We're proud to work with sustainable suppliers and use eco-friendly printing 
                processes wherever possible. Our mission is to enable creativity while being 
                mindful of our impact on the planet.
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </motion.div>
  );
};

export default About;