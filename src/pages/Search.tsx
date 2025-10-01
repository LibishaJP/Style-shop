import { motion } from "framer-motion";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { Search as SearchIcon, Filter, Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-background"
    >
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Search <span className="gradient-text">Products</span>
            </h1>
            
            {/* Search Bar */}
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1 max-w-2xl">
                <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for t-shirts, hoodies, bags..."
                  className="w-full pl-12 pr-4 py-4 bg-card rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all text-lg"
                  autoFocus
                />
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Filter className="h-5 w-5" />
                </Button>
                <div className="border rounded-lg p-1 bg-card">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Search Results */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {searchQuery ? (
              <div>
                <div className="mb-6">
                  <p className="text-muted-foreground">
                    Showing results for "<span className="font-semibold text-foreground">{searchQuery}</span>"
                  </p>
                </div>
                
                <div className="bg-card rounded-xl border p-8 text-center">
                  <SearchIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Search functionality coming soon!</h3>
                  <p className="text-muted-foreground">
                    We're working on implementing comprehensive search. For now, 
                    check out our <a href="/catalog" className="text-primary hover:underline">catalog page</a>.
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center py-16">
                <SearchIcon className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
                <h2 className="text-2xl font-heading font-semibold mb-4">Start Your Search</h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Enter a product name or keyword to find exactly what you're looking for.
                </p>
              </div>
            )}
          </motion.div>

          {/* Popular Searches */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12"
          >
            <h3 className="font-semibold text-lg mb-4">Popular Searches</h3>
            <div className="flex flex-wrap gap-2">
              {["T-shirts", "Hoodies", "Tank Tops", "Tote Bags", "Custom Design", "Vintage", "Minimalist"].map((term, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => setSearchQuery(term)}
                  className="hover:bg-primary hover:text-primary-foreground"
                >
                  {term}
                </Button>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </motion.div>
  );
};

export default Search;