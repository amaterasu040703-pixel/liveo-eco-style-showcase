import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Eye, Leaf, ArrowRight } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const featuredProducts = [
  {
    id: 1,
    name: "LYVEO Eco-Trail",
    price: "€189",
    originalPrice: "€229",
    image: product1,
    rating: 4.9,
    reviews: 127,
    sustainability: "95% Reciclado",
    features: ["UV400", "Anti-reflejo", "Resistente al agua"],
    isNew: true,
  },
  {
    id: 2,
    name: "LYVEO Urban-Pro",
    price: "€159",
    originalPrice: null,
    image: product2,
    rating: 4.8,
    reviews: 89,
    sustainability: "90% Reciclado",
    features: ["Polarizadas", "Marco ligero", "Lentes intercambiables"],
    isNew: false,
  },
  {
    id: 3,
    name: "LYVEO Sport-Elite",
    price: "€219",
    originalPrice: "€259",
    image: product3,
    rating: 5.0,
    reviews: 156,
    sustainability: "100% Reciclado",
    features: ["Ventilación activa", "Ajuste personalizable", "Lentes fotocromáticas"],
    isNew: true,
  },
];

export const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Leaf className="h-4 w-4 mr-2" />
            Productos Destacados
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Diseñados para el
            <span className="block text-primary">Rendimiento Sostenible</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Cada modelo combina la última tecnología en protección visual con nuestro compromiso 
            inquebrantable hacia la sostenibilidad.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-product transition-all duration-500 transform hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border/50">
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.isNew && (
                    <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                      Nuevo
                    </Badge>
                  )}
                  <div className="absolute top-4 right-4 bg-white/90 rounded-full p-2">
                    <Leaf className="h-4 w-4 text-primary" />
                  </div>
                  
                  {/* Quick View Overlay */}
                  <div className="absolute inset-0 bg-secondary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="hero" size="sm" className="transform scale-90 group-hover:scale-100 transition-transform">
                      <Eye className="h-4 w-4 mr-2" />
                      Vista Rápida
                    </Button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  {/* Sustainability Badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-xs text-primary border-primary/30">
                      {product.sustainability}
                    </Badge>
                  </div>

                  {/* Product Name */}
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? "text-accent fill-accent"
                              : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {product.rating} ({product.reviews} reseñas)
                    </span>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-primary">
                        {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                    <Button variant="accent" size="sm" className="group">
                      Añadir
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group">
            Ver Toda la Colección
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};