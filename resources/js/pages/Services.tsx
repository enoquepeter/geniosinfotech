import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Code, Network, Smartphone, Palette, Users } from "lucide-react";

const servicesData = [
  {
    id: "suporte-tecnico",
    icon: Shield,
    title: "Suporte Técnico",
    description: "Assistência técnica especializada para resolver problemas informáticos",
    fullDescription: "Oferecemos suporte técnico completo para empresas e particulares, incluindo diagnóstico, reparação e manutenção de equipamentos informáticos.",
    features: ["Diagnóstico remoto", "Reparação de hardware", "Instalação de software", "Suporte 24/7"]
  },
  {
    id: "desenvolvimento",
    icon: Code,
    title: "Desenvolvimento Web & Apps",
    description: "Criação de websites e aplicações móveis personalizadas",
    fullDescription: "Desenvolvemos soluções digitais completas, desde websites responsivos até aplicações móveis nativas e progressivas.",
    features: ["Websites responsivos", "Apps móveis", "E-commerce", "APIs personalizadas"]
  },
  {
    id: "redes",
    icon: Network,
    title: "Redes de Computadores",
    description: "Instalação e configuração de infraestruturas de rede",
    fullDescription: "Projetamos e implementamos soluções de rede robustas e seguras para empresas de todos os tamanhos.",
    features: ["Configuração de redes", "Segurança de rede", "Monitorização", "Manutenção"]
  },
  {
    id: "marketing-digital",
    icon: Smartphone,
    title: "Marketing Digital",
    description: "Estratégias digitais para aumentar a presença online",
    fullDescription: "Desenvolvemos campanhas de marketing digital eficazes para aumentar a visibilidade e conversões da sua empresa.",
    features: ["SEO/SEM", "Redes sociais", "Email marketing", "Analytics"]
  },
  {
    id: "design-grafico",
    icon: Palette,
    title: "Design Gráfico",
    description: "Criação de identidades visuais e materiais gráficos",
    fullDescription: "Criamos identidades visuais únicas e materiais gráficos profissionais que representam a essência da sua marca.",
    features: ["Logotipos", "Branding", "Material publicitário", "Design digital"]
  },
  {
    id: "ciberseguranca",
    icon: Users,
    title: "Cibersegurança (SOC)",
    description: "Proteção avançada contra ameaças digitais",
    fullDescription: "Implementamos soluções de cibersegurança avançadas e operamos centros de operações de segurança (SOC) para proteger a sua empresa.",
    features: ["Monitorização 24/7", "Análise de ameaças", "Resposta a incidentes", "Auditoria de segurança"]
  }
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gradient-primary mb-6">
              Nossos Serviços
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Soluções completas em tecnologia da informação para empresas e particulares
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.id} className="glass hover-glow group transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary-gradient rounded-lg flex items-center justify-center mb-4 shadow-glow">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-gradient-primary">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, index) => (
                        <li key={index} className="text-sm text-foreground/70 flex items-center">
                          <div className="w-1.5 h-1.5 bg-accent-gradient rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link to={`/servicos/${service.id}`}>
                      <Button className="w-full bg-accent-gradient hover-glow">
                        Ver Detalhes
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;