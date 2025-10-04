import {
  Shield,
  Code,
  Network,
  Smartphone,
  Palette,
  TrendingUp,
  Users,
  Settings,
  GraduationCap,
  ExternalLink
} from "lucide-react";
import { Button } from "./ui/button";

const Services = () => {
  const services = [
    {
      id: "suporte-tecnico",
      icon: Settings,
      title: "Suporte Técnico",
      description: "Assistência técnica especializada para resolução de problemas informáticos e manutenção de sistemas.",
      features: ["Suporte Remoto", "Manutenção Preventiva", "Resolução 24/7"]
    },
    {
      id: "desenvolvimento",
      icon: Code,
      title: "Desenvolvimento Web & Apps",
      description: "Criação de websites modernos e aplicações móveis personalizadas para o seu negócio.",
      features: ["React & Next.js", "Apps Nativas", "E-commerce"]
    },
    {
      id: "redes",
      icon: Network,
      title: "Redes de Computadores",
      description: "Implementação e gestão de infraestruturas de rede seguras e eficientes.",
      features: ["Configuração", "Monitorização", "Otimização"]
    },
    {
      id: "marketing-digital",
      icon: TrendingUp,
      title: "Marketing Digital",
      description: "Estratégias digitais para aumentar a visibilidade e crescimento do seu negócio online.",
      features: ["SEO/SEM", "Social Media", "Analytics"]
    },
    {
      id: "design-grafico",
      icon: Palette,
      title: "Design Gráfico",
      description: "Criação de identidades visuais marcantes e materiais gráficos profissionais.",
      features: ["Branding", "UI/UX Design", "Material Publicitário"]
    },
    {
      id: "ciberseguranca",
      icon: Shield,
      title: "Cibersegurança (SOC)",
      description: "Proteção avançada contra ameaças cibernéticas com monitorização 24/7.",
      features: ["SOC", "Análise de Ameaças", "Resposta a Incidentes"]
    },
    {
      icon: Users,
      title: "Consultoria",
      description: "Aconselhamento especializado para otimização de processos e tecnologias.",
      features: ["Análise de Sistemas", "Planeamento", "Estratégia TI"]
    },
    {
      icon: GraduationCap,
      title: "Formação",
      description: "Programas de formação personalizados em tecnologias e ferramentas digitais.",
      features: ["Cursos Personalizados", "Certificações", "Workshops"]
    }
  ];

  return (
    <section id="servicos" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-secondary/50 rounded-full px-4 py-2 border border-border/50 mb-6">
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-sm text-foreground/80">Os Nossos Serviços</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Soluções Completas</span>
            <br />
            <span className="text-foreground">em Tecnologia</span>
          </h2>

          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços tecnológicos para impulsionar
            o seu negócio no mundo digital.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                onClick={() => window.location.href = `/servicos/${service.id}`}
                className="service-card rounded-2xl p-6 group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between relative">
                  {/* Icon with Hover Effect */}
                  <div className="w-12 h-12 bg-accent-gradient rounded-full flex items-center justify-center shadow-accent mb-4 group-hover:shadow-glow transition-all duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <ExternalLink className="w-5 h-5 z-10 cursor-pointer text-foreground/70 hover:text-primary-foreground absolute right-4 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gradient-accent group-hover:text-gradient-primary transition-all duration-300">
                    {service.title}
                  </h3>

                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                        <span className="text-xs text-foreground/60">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-accent-gradient opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glass rounded-2xl p-8 shadow-glass max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gradient-primary mb-4">
              Precisa de um Serviço Personalizado?
            </h3>
            <p className="text-foreground/70 mb-6">
              Contacte-nos para uma consulta gratuita e descubra como podemos
              ajudar a transformar a sua visão em realidade.
            </p>
            <Button
              onClick={() => window.location.href = '/contato'}
              className="bg-primary-gradient hover-glow px-8 py-3 rounded-full text-white font-medium shadow-primary transition-all duration-300 hover:shadow-glow">
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;