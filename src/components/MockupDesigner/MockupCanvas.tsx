import { useState, useRef } from "react";
import { motion, PanInfo } from "framer-motion";
import { RotateCw, Move, ZoomIn, ZoomOut, RotateCcw, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";

interface DesignTransform {
  x: number;
  y: number;
  scale: number;
  rotation: number;
}

interface MockupCanvasProps {
  productImage?: string;
  designImage?: string;
  onTransformChange?: (transform: DesignTransform) => void;
}

export const MockupCanvas = ({ 
  productImage = "👕", 
  designImage,
  onTransformChange 
}: MockupCanvasProps) => {
  const [transform, setTransform] = useState<DesignTransform>({
    x: 0,
    y: 0,
    scale: 1,
    rotation: 0,
  });
  
  const constraintsRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const updateTransform = (updates: Partial<DesignTransform>) => {
    const newTransform = { ...transform, ...updates };
    setTransform(newTransform);
    onTransformChange?.(newTransform);
  };

  const handleDrag = (_: any, info: PanInfo) => {
    updateTransform({
      x: transform.x + info.delta.x,
      y: transform.y + info.delta.y,
    });
  };

  const resetTransform = () => {
    updateTransform({ x: 0, y: 0, scale: 1, rotation: 0 });
  };

  return (
    <Card className="p-6 space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-2">Design Preview</h3>
        <p className="text-sm text-muted-foreground">
          Drag, scale, and rotate your design
        </p>
      </div>

      {/* Canvas Area */}
      <div className="relative bg-gradient-to-br from-muted/50 to-muted rounded-lg aspect-square overflow-hidden">
        <div
          ref={constraintsRef}
          className="absolute inset-0 flex items-center justify-center"
        >
          {/* Product Mockup */}
          <div className="relative w-64 h-64 flex items-center justify-center">
            {/* Product Base */}
            <motion.div
              className="absolute inset-0 text-8xl flex items-center justify-center"
              animate={{ rotate: [0, 1, -1, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              {productImage}
            </motion.div>

            {/* Design Overlay */}
            {designImage && (
              <motion.div
                drag
                dragConstraints={constraintsRef}
                dragElastic={0.1}
                onDrag={handleDrag}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={() => setIsDragging(false)}
                className={`absolute cursor-move ${isDragging ? 'z-20' : 'z-10'}`}
                style={{
                  x: transform.x,
                  y: transform.y,
                  scale: transform.scale,
                  rotate: transform.rotation,
                }}
                whileHover={{ scale: transform.scale * 1.05 }}
                whileDrag={{ 
                  scale: transform.scale * 1.1,
                  zIndex: 20,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
                }}
              >
                <div className="relative">
                  {/* Design Image Placeholder */}
                  <div className="w-20 h-20 bg-gradient-primary rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-white text-xs font-bold">DESIGN</span>
                  </div>
                  
                  {/* Drag Indicator */}
                  {isDragging && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute -inset-2 border-2 border-dashed border-primary rounded-lg"
                    />
                  )}
                </div>
              </motion.div>
            )}

            {/* Print Area Indicator */}
            <motion.div
              className="absolute inset-8 border-2 border-dashed border-accent/50 rounded-lg"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>

        {/* No Design State */}
        {!designImage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
                <Move className="h-8 w-8 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground">Upload a design to get started</p>
            </div>
          </motion.div>
        )}
      </div>

      {/* Controls */}
      {designImage && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          {/* Scale Control */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Size</label>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => updateTransform({ scale: Math.max(0.5, transform.scale - 0.1) })}
              >
                <ZoomOut className="h-4 w-4" />
              </Button>
              <Slider
                value={[transform.scale]}
                onValueChange={([value]) => updateTransform({ scale: value })}
                min={0.5}
                max={2}
                step={0.1}
                className="flex-1"
              />
              <Button
                variant="outline"
                size="icon"
                onClick={() => updateTransform({ scale: Math.min(2, transform.scale + 0.1) })}
              >
                <ZoomIn className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Rotation Control */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Rotation</label>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => updateTransform({ rotation: transform.rotation - 15 })}
              >
                <RotateCcw className="h-4 w-4" />
              </Button>
              <Slider
                value={[transform.rotation]}
                onValueChange={([value]) => updateTransform({ rotation: value })}
                min={-180}
                max={180}
                step={15}
                className="flex-1"
              />
              <Button
                variant="outline"
                size="icon"
                onClick={() => updateTransform({ rotation: transform.rotation + 15 })}
              >
                <RotateCw className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-2">
            <Button
              variant="outline"
              onClick={resetTransform}
              className="flex-1"
            >
              <Maximize2 className="h-4 w-4 mr-2" />
              Reset
            </Button>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1"
            >
              <Button className="w-full bg-gradient-primary hover:opacity-90 text-white">
                Generate Preview
              </Button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </Card>
  );
};