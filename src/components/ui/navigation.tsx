import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingBag } from "lucide-react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-bold text-2xl text-primary">
          LYVEO
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-foreground hover:text-primary transition-smooth">
            Inicio
          </Link>
          <Link to="/catalog" className="text-foreground hover:text-primary transition-smooth">
            Catálogo
          </Link>
          <Link to="/about" className="text-foreground hover:text-primary transition-smooth">
            Marca
          </Link>
          <Link to="/sustainability" className="text-foreground hover:text-primary transition-smooth">
            Sostenibilidad
          </Link>
          <Link to="/contact" className="text-foreground hover:text-primary transition-smooth">
            Contacto
          </Link>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -top-2 -right-2 h-5 w-5 bg-accent text-accent-foreground rounded-full text-xs flex items-center justify-center">
              0
            </span>
          </Button>
          
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              to="/"
              className="block text-foreground hover:text-primary transition-smooth"
              onClick={toggleMenu}
            >
              Inicio
            </Link>
            <Link
              to="/catalog"
              className="block text-foreground hover:text-primary transition-smooth"
              onClick={toggleMenu}
            >
              Catálogo
            </Link>
            <Link
              to="/about"
              className="block text-foreground hover:text-primary transition-smooth"
              onClick={toggleMenu}
            >
              Marca
            </Link>
            <Link
              to="/sustainability"
              className="block text-foreground hover:text-primary transition-smooth"
              onClick={toggleMenu}
            >
              Sostenibilidad
            </Link>
            <Link
              to="/contact"
              className="block text-foreground hover:text-primary transition-smooth"
              onClick={toggleMenu}
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};