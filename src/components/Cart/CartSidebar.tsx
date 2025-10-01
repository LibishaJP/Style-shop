import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  size: string;
  color: string;
  image: string;
  customDesign?: string;
}

interface CartSidebarProps {
  open: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
}

export const CartSidebar = ({
  open,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
}: CartSidebarProps) => {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 50 ? 0 : 9.99;
  const total = subtotal + shipping;

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center space-x-2">
            <ShoppingBag className="h-5 w-5" />
            <span>Shopping Cart ({items.length})</span>
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full">
          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto py-6">
            <AnimatePresence mode="popLayout">
              {items.length === 0 ? (
                <EmptyCart />
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <CartItemCard
                      key={item.id}
                      item={item}
                      onUpdateQuantity={onUpdateQuantity}
                      onRemoveItem={onRemoveItem}
                    />
                  ))}
                </div>
              )}
            </AnimatePresence>
          </div>

          {/* Cart Footer */}
          {items.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="border-t pt-6 space-y-4"
            >
              {/* Order Summary */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</span>
                </div>
                <Separator />
                <div className="flex justify-between text-base font-semibold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Free Shipping Progress */}
              {subtotal < 50 && (
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">
                    Add ${(50 - subtotal).toFixed(2)} more for free shipping!
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <motion.div
                      className="bg-gradient-primary h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${(subtotal / 50) * 100}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>
              )}

              {/* Checkout Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  className="w-full bg-gradient-primary hover:opacity-90 text-white font-semibold"
                >
                  Checkout
                </Button>
              </motion.div>

              <Button variant="outline" className="w-full" onClick={onClose}>
                Continue Shopping
              </Button>
            </motion.div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

interface CartItemCardProps {
  item: CartItem;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
}

const CartItemCard = ({ item, onUpdateQuantity, onRemoveItem }: CartItemCardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      className="flex space-x-4 p-4 bg-card rounded-lg border"
    >
      {/* Product Image */}
      <div className="relative w-20 h-20 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
        <span className="text-2xl">{item.image}</span>
        {item.customDesign && (
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white text-xs">✨</span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="flex-1 min-w-0">
        <h4 className="font-medium truncate">{item.name}</h4>
        <div className="text-sm text-muted-foreground space-y-1">
          <div>Size: {item.size} • Color: {item.color}</div>
          {item.customDesign && <div>Custom Design Applied</div>}
        </div>
        
        {/* Quantity Controls */}
        <div className="flex items-center space-x-2 mt-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
          >
            <Minus className="h-3 w-3" />
          </Button>
          <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          >
            <Plus className="h-3 w-3" />
          </Button>
        </div>
      </div>

      {/* Price & Remove */}
      <div className="flex flex-col items-end justify-between">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onRemoveItem(item.id)}
          className="p-1 hover:text-destructive transition-colors"
        >
          <Trash2 className="h-4 w-4" />
        </motion.button>
        <div className="text-right">
          <div className="font-semibold">${(item.price * item.quantity).toFixed(2)}</div>
          <div className="text-sm text-muted-foreground">${item.price.toFixed(2)} each</div>
        </div>
      </div>
    </motion.div>
  );
};

const EmptyCart = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex flex-col items-center justify-center h-64 space-y-4"
  >
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="w-16 h-16 bg-muted rounded-full flex items-center justify-center"
    >
      <ShoppingBag className="h-8 w-8 text-muted-foreground" />
    </motion.div>
    <div className="text-center">
      <h3 className="font-semibold mb-2">Your cart is empty</h3>
      <p className="text-muted-foreground text-sm">Add some awesome products to get started!</p>
    </div>
  </motion.div>
);