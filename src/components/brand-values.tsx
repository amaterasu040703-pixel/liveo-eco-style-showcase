import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Leaf, Recycle, Shield, Users, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Sostenibilidad Real",
    description: "Comprometidos con el medio ambiente desde el diseño hasta la entrega. Cada producto reduce nuestra huella de carbono.",
    stat: "95%",
    statLabel: "Materiales Reciclados"
  },
  {
    icon: Shield,
    title: "Protección Avanzada",
    description: "Tecnología de vanguardia en protección UV y resistencia. Diseñado para los deportistas más exigentes.",
    stat: "UV400",
    statLabel: "Protección Máxima"
  },
  {
    icon: Recycle,
    title: "Economía Circular",
    description: "Programa de reciclaje de gafas usadas. Damos nueva vida a los materiales para cerrar el ciclo.",
    stat: "100%",
    statLabel: "Programa de Reciclaje"
  },
  {
    icon: Users,
    title: "Comunidad Activa",
    description: "Una comunidad global de atletas conscientes que comparten nuestra visión de un futuro más sostenible.",
    stat: "50K+",
    statLabel: "Atletas LYVEO"
  }
];

export const BrandValues = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            <Leaf className="h-4 w-4 mr-2" />
            Nuestros Valores
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Más que
            <span className="block text-primary">Rendimiento</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            En LYVEO creemos que el deporte puede ser una fuerza transformadora para nuestro planeta. 
            Cada decisión está guiada por nuestros valores fundamentales.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="group p-8 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-1"
            >
              {/* Icon and Stat */}
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <value.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">{value.stat}</div>
                  <div className="text-sm text-muted-foreground">{value.statLabel}</div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-subtle rounded-2xl p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Únete al Movimiento
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Descubre cómo LYVEO está revolucionando la industria del eyewear deportivo 
            con innovación sostenible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" className="group">
              Nuestra Historia
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Programa de Sostenibilidad
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};