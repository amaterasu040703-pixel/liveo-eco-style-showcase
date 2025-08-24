import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, Eye, Leaf, ArrowRight, Filter } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const allProducts = [
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
    category: "Trail",
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
    category: "Urbano",
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
    category: "Deportivo",
    isNew: true,
  },
  // Add more products to simulate a fuller catalog
  {
    id: 4,
    name: "LYVEO Aqua-Pro",
    price: "€179",
    originalPrice: null,
    image: product1,
    rating: 4.7,
    reviews: 92,
    sustainability: "88% Reciclado",
    features: ["Flotantes", "Protección marina", "Correa ajustable"],
    category: "Acuático",
    isNew: false,
  },
  {
    id: 5,
    name: "LYVEO Mountain-X",
    price: "€249",
    originalPrice: "€299",
    image: product2,
    rating: 4.9,
    reviews: 201,
    sustainability: "97% Reciclado",
    features: ["Lentes intercambiables", "Marco ultra resistente", "Ventilación extrema"],
    category: "Montaña",
    isNew: true,
  },
  {
    id: 6,
    name: "LYVEO Road-Runner",
    price: "€139",
    originalPrice: null,
    image: product3,
    rating: 4.6,
    reviews: 76,
    sustainability: "85% Reciclado",
    features: ["Aerodinámicas", "Peso pluma", "Visión panorámica"],
    category: "Ciclismo",
    isNew: false,
  },
];

const Catalog = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header Section */}
      <section className="pt-24 pb-12 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
              <Leaf className="h-4 w-4 mr-2" />
              Colección Completa
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Encuentra tu
              <span className="block text-primary">Modelo Perfecto</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Explora nuestra colección completa de eyewear deportivo sostenible. 
              Cada modelo está diseñado para un propósito específico.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Categoría" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas las categorías</SelectItem>
                  <SelectItem value="trail">Trail</SelectItem>
                  <SelectItem value="urbano">Urbano</SelectItem>
                  <SelectItem value="deportivo">Deportivo</SelectItem>
                  <SelectItem value="acuatico">Acuático</SelectItem>
                  <SelectItem value="montana">Montaña</SelectItem>
                  <SelectItem value="ciclismo">Ciclismo</SelectItem>
                </SelectContent>
              </Select>
              
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Más populares</SelectItem>
                  <SelectItem value="price-low">Precio: menor a mayor</SelectItem>
                  <SelectItem value="price-high">Precio: mayor a menor</SelectItem>
                  <SelectItem value="rating">Mejor valorados</SelectItem>
                  <SelectItem value="new">Más recientes</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="text-sm text-muted-foreground">
              {allProducts.length} productos encontrados
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProducts.map((product) => (
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
                    {/* Category and Sustainability */}
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary" className="text-xs">
                        {product.category}
                      </Badge>
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
                        {product.rating} ({product.reviews})
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Catalog;