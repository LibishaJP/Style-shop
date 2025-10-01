import { motion } from "framer-motion";
import { useState } from "react";
import { 
  BarChart3, 
  Package, 
  ShoppingCart, 
  Users, 
  TrendingUp, 
  Plus,
  Filter,
  Download,
  RefreshCw
} from "lucide-react";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data for demo
const dashboardStats = [
  {
    title: "Total Revenue",
    value: "$12,345",
    change: "+12%",
    icon: TrendingUp,
    color: "text-success"
  },
  {
    title: "Total Orders", 
    value: "1,234",
    change: "+8%",
    icon: ShoppingCart,
    color: "text-primary"
  },
  {
    title: "Products",
    value: "89",
    change: "+3%", 
    icon: Package,
    color: "text-accent"
  },
  {
    title: "Customers",
    value: "2,567",
    change: "+15%",
    icon: Users,
    color: "text-success"
  }
];

const recentOrders = [
  {
    id: "#1234",
    customer: "John Doe",
    product: "Custom T-Shirt",
    amount: "$24.99",
    status: "processing",
    date: "2024-01-15"
  },
  {
    id: "#1235",
    customer: "Jane Smith", 
    product: "Premium Hoodie",
    amount: "$49.99",
    status: "shipped",
    date: "2024-01-14"
  },
  {
    id: "#1236",
    customer: "Mike Johnson",
    product: "Canvas Tote",
    amount: "$19.99", 
    status: "delivered",
    date: "2024-01-13"
  },
  {
    id: "#1237",
    customer: "Sarah Wilson",
    product: "Baseball Cap",
    amount: "$29.99",
    status: "pending",
    date: "2024-01-12"
  }
];

const products = [
  {
    id: "1",
    name: "Classic T-Shirt",
    category: "T-Shirts",
    stock: 145,
    sold: 89,
    revenue: "$2,136",
    status: "active"
  },
  {
    id: "2", 
    name: "Premium Hoodie",
    category: "Hoodies",
    stock: 67,
    sold: 134,
    revenue: "$6,699",
    status: "active"
  },
  {
    id: "3",
    name: "Canvas Tote",
    category: "Bags", 
    stock: 234,
    sold: 45,
    revenue: "$899",
    status: "low-stock"
  }
];

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-background"
    >
      <Header />

      <main className="pt-8">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-accent/10 to-success/10 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col lg:flex-row lg:items-center lg:justify-between"
            >
              <div>
                <h1 className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-2">
                  Admin Dashboard
                </h1>
                <p className="text-muted-foreground">
                  Manage your store, track orders, and view analytics
                </p>
              </div>
              <div className="flex items-center space-x-3 mt-4 lg:mt-0">
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
                <Button variant="gradient" size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Product
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="products">Products</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {dashboardStats.map((stat, index) => (
                  <StatsCard key={stat.title} stat={stat} index={index} />
                ))}
              </div>

              {/* Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Orders */}
                <Card className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold">Recent Orders</h3>
                    <Button variant="ghost" size="sm">
                      View All
                    </Button>
                  </div>
                  <div className="space-y-4">
                    {recentOrders.slice(0, 4).map((order, index) => (
                      <OrderItem key={order.id} order={order} index={index} />
                    ))}
                  </div>
                </Card>

                {/* Top Products */}
                <Card className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold">Top Products</h3>
                    <Button variant="ghost" size="sm">
                      <RefreshCw className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="space-y-4">
                    {products.map((product, index) => (
                      <ProductItem key={product.id} product={product} index={index} />
                    ))}
                  </div>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="orders" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Order Management</h2>
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </div>
              </div>
              
              <Card className="p-6">
                <div className="space-y-4">
                  {recentOrders.map((order, index) => (
                    <OrderItemDetailed key={order.id} order={order} index={index} />
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="products" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Product Management</h2>
                <Button variant="gradient">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Product
                </Button>
              </div>
              
              <Card className="p-6">
                <div className="space-y-4">
                  {products.map((product, index) => (
                    <ProductItemDetailed key={product.id} product={product} index={index} />
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <h2 className="text-2xl font-bold">Analytics & Reports</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Revenue Trends</h3>
                  <div className="h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                    <BarChart3 className="h-16 w-16 text-muted-foreground" />
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Order Volume</h3>
                  <div className="h-64 bg-gradient-to-br from-success/10 to-primary/10 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-16 w-16 text-muted-foreground" />
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </motion.div>
  );
};

const StatsCard = ({ stat, index }: { stat: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -4 }}
  >
    <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
          <p className="text-2xl font-bold">{stat.value}</p>
          <div className="flex items-center mt-2">
            <span className={`text-sm font-medium ${stat.color}`}>
              {stat.change}
            </span>
            <span className="text-xs text-muted-foreground ml-1">vs last month</span>
          </div>
        </div>
        <div className={`p-3 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10`}>
          <stat.icon className={`h-6 w-6 ${stat.color}`} />
        </div>
      </div>
    </Card>
  </motion.div>
);

const OrderItem = ({ order, index }: { order: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.05 }}
    className="flex items-center justify-between p-3 bg-muted/30 rounded-lg"
  >
    <div>
      <p className="font-medium">{order.id}</p>
      <p className="text-sm text-muted-foreground">{order.customer}</p>
    </div>
    <div className="text-right">
      <p className="font-medium">{order.amount}</p>
      <StatusBadge status={order.status} />
    </div>
  </motion.div>
);

const OrderItemDetailed = ({ order, index }: { order: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05 }}
    className="flex items-center justify-between p-4 border-b last:border-b-0"
  >
    <div className="flex items-center space-x-4">
      <div>
        <p className="font-medium">{order.id}</p>
        <p className="text-sm text-muted-foreground">{order.date}</p>
      </div>
      <div>
        <p className="font-medium">{order.customer}</p>
        <p className="text-sm text-muted-foreground">{order.product}</p>
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <p className="font-medium">{order.amount}</p>
      <StatusBadge status={order.status} />
      <Button variant="outline" size="sm">
        View
      </Button>
    </div>
  </motion.div>
);

const ProductItem = ({ product, index }: { product: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.05 }}
    className="flex items-center justify-between p-3 bg-muted/30 rounded-lg"
  >
    <div>
      <p className="font-medium">{product.name}</p>
      <p className="text-sm text-muted-foreground">{product.sold} sold</p>
    </div>
    <div className="text-right">
      <p className="font-medium">{product.revenue}</p>
      <p className="text-xs text-muted-foreground">Stock: {product.stock}</p>
    </div>
  </motion.div>
);

const ProductItemDetailed = ({ product, index }: { product: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05 }}
    className="flex items-center justify-between p-4 border-b last:border-b-0"
  >
    <div className="flex items-center space-x-4">
      <div>
        <p className="font-medium">{product.name}</p>
        <p className="text-sm text-muted-foreground">{product.category}</p>
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <div className="text-right">
        <p className="text-sm">Stock: {product.stock}</p>
        <p className="text-sm text-muted-foreground">Sold: {product.sold}</p>
      </div>
      <p className="font-medium">{product.revenue}</p>
      <StatusBadge status={product.status} />
      <Button variant="outline" size="sm">
        Edit
      </Button>
    </div>
  </motion.div>
);

const StatusBadge = ({ status }: { status: string }) => {
  const colors = {
    pending: "bg-yellow-100 text-yellow-800",
    processing: "bg-blue-100 text-blue-800", 
    shipped: "bg-purple-100 text-purple-800",
    delivered: "bg-green-100 text-green-800",
    active: "bg-green-100 text-green-800",
    "low-stock": "bg-orange-100 text-orange-800"
  };

  return (
    <Badge className={colors[status as keyof typeof colors] || "bg-gray-100 text-gray-800"}>
      {status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')}
    </Badge>
  );
};

export default AdminDashboard;