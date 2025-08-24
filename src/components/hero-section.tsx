import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/hero-eyewear.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/60 via-secondary/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6">
            <Leaf className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium">Sostenible • Innovador • Estilo</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Redefiniendo el
            <span className="block bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              Rendimiento Visual
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Gafas deportivas de alta gama diseñadas para atletas conscientes del medio ambiente. 
            Estilo premium, sostenibilidad real.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-lg px-4 py-2">
              <Shield className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">Protección UV400</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-lg px-4 py-2">
              <Leaf className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">Materiales Reciclados</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-lg px-4 py-2">
              <Zap className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">Tecnología Avanzada</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="group">
              Explorar Colección
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-secondary">
              Nuestra Historia
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};