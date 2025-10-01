import { motion } from "framer-motion";
import { useState } from "react";
import { Filter, Grid3X3, List, Search, SlidersHorizontal } from "lucide-react";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  colors: string[];
  rating: number;
  image: string;
  featured?: boolean;
}

const products: Product[] = [
  {
    id: "1",
    name: "Classic Cotton T-Shirt",
    price: 24.99,
    category: "T-Shirts",
    colors: ["#000000", "#FFFFFF", "#FF6B6B", "#4ECDC4"],
    rating: 4.8,
    image: "👕",
    featured: true
  },
  {
    id: "2",
    name: "Premium Hoodie",
    price: 49.99,
    category: "Hoodies",
    colors: ["#2C3E50", "#E74C3C", "#3498DB", "#95A5A6"],
    rating: 4.9,
    image: "🧥"
  },
  {
    id: "3",
    name: "Canvas Tote Bag",
    price: 19.99,
    category: "Bags",
    colors: ["#F8F9FA", "#343A40", "#FD7E14", "#20C997"],
    rating: 4.7,
    image: "👜"
  },
  {
    id: "4",
    name: "Baseball Cap",
    price: 29.99,
    category: "Accessories",
    colors: ["#000000", "#FFFFFF", "#DC3545", "#0D6EFD"],
    rating: 4.6,
    image: "🧢"
  },
  {
    id: "5",
    name: "Long Sleeve Tee",
    price: 32.99,
    category: "T-Shirts",
    colors: ["#6C757D", "#28A745", "#FFC107", "#6F42C1"],
    rating: 4.5,
    image: "👕"
  },
  {
    id: "6",
    name: "Zip Hoodie",
    price: 54.99,
    category: "Hoodies",
    colors: ["#000000", "#FFFFFF", "#FF6B6B", "#4ECDC4"],
    rating: 4.8,
    image: "🧥",
    featured: true
  }
];

const categories = ["All", "T-Shirts", "Hoodies", "Bags", "Accessories"];

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts = products
    .filter(product => 
      (selectedCategory === "All" || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low": return a.price - b.price;
        case "price-high": return b.price - a.price;
        case "rating": return b.rating - a.rating;
        case "name": return a.name.localeCompare(b.name);
        default: return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      }
    });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-background"
    >
      <Header />

      <main className="pt-8">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-accent/10 to-success/10 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-6">
                Product Catalog
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Discover our premium collection of customizable apparel and accessories
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-lg mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 py-3 text-lg rounded-lg border-2 focus:ring-2 focus:ring-primary"
                />
              </div>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Filters and Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 space-y-4 lg:space-y-0"
          >
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "gradient" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all duration-200"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* View Controls */}
            <div className="flex items-center space-x-4">
              {/* Sort Dropdown */}
              <div className="flex items-center space-x-2">
                <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-background border border-input rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="featured">Featured</option>
                  <option value="name">Name A-Z</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="flex border rounded-md overflow-hidden">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-none"
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6"
          >
            <p className="text-muted-foreground">
              Showing {filteredProducts.length} of {products.length} products
            </p>
          </motion.div>

          {/* Products Grid/List */}
          <motion.div
            layout
            className={`grid gap-6 ${
              viewMode === "grid" 
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
                : "grid-cols-1"
            }`}
          >
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                viewMode={viewMode}
              />
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-12 w-12 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No products found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </motion.div>
  );
};

interface ProductCardProps {
  product: Product;
  index: number;
  viewMode: "grid" | "list";
}

const ProductCard = ({ product, index, viewMode }: ProductCardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: viewMode === "grid" ? -4 : 0 }}
      className="group"
    >
      <Card className={`overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${
        viewMode === "list" ? "flex" : ""
      }`}>
        {/* Product Image */}
        <div className={`relative bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center ${
          viewMode === "list" ? "w-32 h-32 flex-shrink-0" : "aspect-square"
        }`}>
          <motion.div
            className={`${viewMode === "list" ? "text-4xl" : "text-6xl"} group-hover:scale-110 transition-transform duration-300`}
            whileHover={{ rotate: [0, -5, 5, 0] }}
            transition={{ duration: 0.5 }}
          >
            {product.image}
          </motion.div>

          {/* Featured Badge */}
          {product.featured && (
            <div className="absolute top-3 left-3">
              <Badge className="bg-accent text-white">Featured</Badge>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4 flex-1 space-y-3">
          <div>
            <h3 className="font-semibold text-base mb-1 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground">{product.category}</p>
          </div>

          {/* Colors */}
          <div className="flex items-center space-x-2">
            <span className="text-xs text-muted-foreground">Colors:</span>
            <div className="flex space-x-1">
              {product.colors.slice(0, 4).map((color, i) => (
                <div
                  key={i}
                  className="w-4 h-4 rounded-full border-2 border-border"
                  style={{ backgroundColor: color }}
                />
              ))}
              {product.colors.length > 4 && (
                <span className="text-xs text-muted-foreground">+{product.colors.length - 4}</span>
              )}
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center space-x-1">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`text-xs ${i < Math.floor(product.rating) ? '★' : '☆'}`}>
                  ★
                </span>
              ))}
            </div>
            <span className="text-xs text-muted-foreground">({product.rating})</span>
          </div>

          {/* Price and Actions */}
          <div className={`flex ${viewMode === "list" ? "flex-col space-y-2" : "items-center justify-between"}`}>
            <div className="text-xl font-bold gradient-text">
              ${product.price}
            </div>
            <Button size="sm" variant="outline" className="hover:bg-primary hover:text-white">
              Customize
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default Catalog;