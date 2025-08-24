import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  Leaf, 
  Instagram, 
  Twitter, 
  Facebook, 
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-secondary-light/20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 border-secondary-foreground/30 text-secondary-foreground">
              <Leaf className="h-4 w-4 mr-2" />
              Newsletter LYVEO
            </Badge>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Mantente al día con las últimas innovaciones
            </h3>
            <p className="text-secondary-foreground/80 mb-8 text-lg">
              Recibe noticias exclusivas, lanzamientos de productos y contenido sobre sostenibilidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Tu email" 
                className="bg-background text-foreground border-border"
              />
              <Button variant="default" className="group">
                Suscribirse
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <p className="text-sm text-secondary-foreground/60 mt-4">
              Al suscribirte, aceptas recibir comunicaciones de LYVEO. Puedes darte de baja en cualquier momento.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-secondary-foreground mb-2">LYVEO</h3>
              <p className="text-secondary-foreground/80 leading-relaxed">
                Redefiniendo el rendimiento visual con eyewear deportivo sostenible y de alta calidad.
              </p>
            </div>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-secondary-foreground hover:text-accent">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-secondary-foreground hover:text-accent">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-secondary-foreground hover:text-accent">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-secondary-foreground hover:text-accent">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="font-semibold text-secondary-foreground mb-4">Productos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">Colección Completa</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">LYVEO Eco-Trail</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">LYVEO Urban-Pro</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">LYVEO Sport-Elite</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">Accesorios</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">Lentes de Repuesto</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold text-secondary-foreground mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">Nuestra Historia</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">Sostenibilidad</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">Programa de Reciclaje</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">Carreras</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">Prensa</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-semibold text-secondary-foreground mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-secondary-foreground/80">hola@lyveo.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-secondary-foreground/80">+34 900 123 456</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-secondary-foreground/80">Barcelona, España</span>
              </li>
            </ul>
            <div className="mt-6">
              <h5 className="font-medium text-secondary-foreground mb-2">Atención al Cliente</h5>
              <p className="text-sm text-secondary-foreground/80">
                Lunes a Viernes: 9:00 - 18:00 CET<br />
                Respuesta en menos de 24h
              </p>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-secondary-light/20" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-secondary-foreground/60">
            © 2024 LYVEO. Todos los derechos reservados.
          </div>
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="#" className="text-secondary-foreground/60 hover:text-accent transition-colors">
              Términos y Condiciones
            </a>
            <a href="#" className="text-secondary-foreground/60 hover:text-accent transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-secondary-foreground/60 hover:text-accent transition-colors">
              Política de Cookies
            </a>
            <a href="#" className="text-secondary-foreground/60 hover:text-accent transition-colors">
              Aviso Legal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};