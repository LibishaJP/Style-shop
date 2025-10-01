import { motion } from "framer-motion";
import { Upload, Palette, Truck, CreditCard, Star, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Upload,
    title: "Easy Upload",
    description: "Upload your designs in PNG, SVG, or JPEG format with drag-and-drop simplicity.",
    color: "text-button-hover"
  },
  {
    icon: Palette,
    title: "Live Preview",
    description: "See exactly how your design looks on products with our interactive mockup editor.",
    color: "text-accent"
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Safe and secure checkout with Stripe. We accept all major credit cards.",
    color: "text-success"
  },
  {
    icon: Truck,
    title: "Fast Shipping",
    description: "Free shipping on orders over $50. Express delivery available worldwide.",
    color: "text-button-hover"
  },
  {
    icon: Star,
    title: "Premium Quality",
    description: "High-quality materials and printing techniques for long-lasting results.",
    color: "text-accent"
  },
  {
    icon: Shield,
    title: "100% Guarantee",
    description: "Not satisfied? We offer a full money-back guarantee on all orders.",
    color: "text-success"
  }
];

export const FeatureSection = () => {
  return (
    <section className="py-20 bg-background">
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
            Why Choose Styleshop?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            We make custom printing simple, fast, and affordable with industry-leading quality
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-primary/10 via-accent/10 to-success/10 rounded-2xl p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatItem number="10K+" label="Happy Customers" />
            <StatItem number="50K+" label="Orders Completed" />
            <StatItem number="4.9" label="Average Rating" />
            <StatItem number="24/7" label="Support Available" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  feature: {
    icon: React.ElementType;
    title: string;
    description: string;
    color: string;
  };
  index: number;
}

const FeatureCard = ({ feature, index }: FeatureCardProps) => {
  const { icon: Icon, title, description, color } = feature;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <Card className="p-6 h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-muted/20">
        <div className="space-y-4">
          {/* Icon */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-all`}
          >
            <Icon className={`h-6 w-6 ${color} group-hover:scale-110 transition-transform`} />
          </motion.div>

          {/* Content */}
          <div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-gradient-start transition-colors">
              {title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

const StatItem = ({ number, label }: { number: string; label: string }) => (
  <motion.div
    initial={{ scale: 0 }}
    whileInView={{ scale: 1 }}
    viewport={{ once: true }}
    transition={{ type: "spring", stiffness: 200 }}
    className="text-center"
  >
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="text-2xl md:text-3xl font-bold gradient-text mb-2"
    >
      {number}
    </motion.div>
    <div className="text-sm text-muted-foreground">{label}</div>
  </motion.div>
);