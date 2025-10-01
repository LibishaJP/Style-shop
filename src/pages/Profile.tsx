import { motion } from "framer-motion";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { User, Package, Heart, Settings, Bell, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

const Profile = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-background"
    >
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Profile Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="bg-card rounded-xl border p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center">
                  <User className="h-12 w-12 text-white" />
                </div>
                <div className="text-center md:text-left">
                  <h1 className="text-3xl font-heading font-bold mb-2">Welcome Back!</h1>
                  <p className="text-muted-foreground mb-4">Manage your account and view your orders</p>
                  <Button className="bg-gradient-primary text-white">
                    Edit Profile
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Profile Sections */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Package,
                title: "My Orders",
                description: "Track and manage your orders",
                color: "from-blue-500 to-purple-500"
              },
              {
                icon: Heart,
                title: "Wishlist",
                description: "Your saved favorite items",
                color: "from-pink-500 to-red-500"
              },
              {
                icon: CreditCard,
                title: "Payment Methods",
                description: "Manage your payment options",
                color: "from-green-500 to-teal-500"
              },
              {
                icon: Bell,
                title: "Notifications",
                description: "Update your preferences",
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: Settings,
                title: "Account Settings",
                description: "Privacy and security options",
                color: "from-gray-500 to-slate-500"
              },
              {
                icon: User,
                title: "Design Studio",
                description: "Your saved designs and drafts",
                color: "from-indigo-500 to-cyan-500"
              }
            ].map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                className="bg-card rounded-xl border p-6 hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${section.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <section.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{section.title}</h3>
                <p className="text-muted-foreground text-sm">{section.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12 bg-card rounded-xl border p-8"
          >
            <h2 className="text-2xl font-heading font-bold mb-6">Quick Actions</h2>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline">
                Start New Design
              </Button>
              <Button variant="outline">
                Reorder Previous
              </Button>
              <Button variant="outline">
                Contact Support
              </Button>
              <Button variant="outline">
                Leave a Review
              </Button>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </motion.div>
  );
};

export default Profile;