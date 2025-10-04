import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Code, Network, Smartphone, Palette, Users, ArrowLeft, CheckCircle } from "lucide-react";

const servicesData = {
  "suporte-tecnico": {
    icon: Shield,
    title: "Suporte Técnico Informático",
    description: "Assistência técnica especializada para resolver problemas informáticos",
    fullDescription: "Oferecemos suporte técnico completo para empresas e particulares, incluindo diagnóstico, reparação e manutenção de equipamentos informáticos. Nossa equipe especializada está disponível para resolver qualquer problema tecnológico.",
    features: ["Diagnóstico remoto e presencial", "Reparação de hardware", "Instalação e configuração de software", "Suporte técnico 24/7", "Manutenção preventiva", "Backup e recuperação de dados"],
    solutions: [
      {
        title: "Suporte Empresarial",
        description: "Contratos de manutenção para empresas com SLA garantido",
        benefits: ["Resposta rápida", "Técnicos certificados", "Relatórios detalhados"]
      },
      {
        title: "Suporte Residencial", 
        description: "Assistência técnica para particulares e pequenos escritórios",
        benefits: ["Atendimento domiciliário", "Preços acessíveis", "Garantia de serviço"]
      }
    ]
  },
  "desenvolvimento": {
    icon: Code,
    title: "Desenvolvimento Web & Apps",
    description: "Criação de websites e aplicações móveis personalizadas",
    fullDescription: "Desenvolvemos soluções digitais completas, desde websites responsivos até aplicações móveis nativas e progressivas. Utilizamos as tecnologias mais modernas para criar experiências digitais únicas.",
    features: ["Websites responsivos", "Aplicações móveis nativas", "E-commerce completo", "APIs personalizadas", "CMS customizado", "Integração com sistemas"],
    solutions: [
      {
        title: "Websites Corporativos",
        description: "Sites profissionais que representam a sua marca online",
        benefits: ["Design moderno", "SEO otimizado", "Gestão de conteúdo"]
      },
      {
        title: "Apps Móveis",
        description: "Aplicações para iOS e Android com performance nativa",
        benefits: ["Interface intuitiva", "Sincronização cloud", "Push notifications"]
      }
    ]
  },
  "redes": {
    icon: Network,
    title: "Redes de Computadores",
    description: "Instalação e configuração de infraestruturas de rede",
    fullDescription: "Projetamos e implementamos soluções de rede robustas e seguras para empresas de todos os tamanhos. Nossa experiência garante conectividade eficiente e segura.",
    features: ["Configuração de redes LAN/WAN", "Segurança de rede avançada", "Monitorização em tempo real", "Manutenção preventiva", "VPN empresarial", "Wi-Fi corporativo"],
    solutions: [
      {
        title: "Rede Empresarial",
        description: "Infraestrutura completa para empresas de médio e grande porte",
        benefits: ["Alta disponibilidade", "Escalabilidade", "Segurança avançada"]
      },
      {
        title: "Rede SOHO",
        description: "Soluções para pequenos escritórios e home office",
        benefits: ["Configuração simples", "Custo-benefício", "Suporte técnico"]
      }
    ]
  },
  "marketing-digital": {
    icon: Smartphone,
    title: "Marketing Digital",
    description: "Estratégias digitais para aumentar a presença online",
    fullDescription: "Desenvolvemos campanhas de marketing digital eficazes para aumentar a visibilidade e conversões da sua empresa. Nossa abordagem data-driven garante resultados mensuráveis.",
    features: ["SEO/SEM profissional", "Gestão de redes sociais", "Email marketing automatizado", "Analytics e relatórios", "Content marketing", "Publicidade online"],
    solutions: [
      {
        title: "Marketing 360°",
        description: "Estratégia completa de marketing digital integrado",
        benefits: ["Múltiplos canais", "ROI otimizado", "Relatórios detalhados"]
      },
      {
        title: "SEO Especializado",
        description: "Otimização para motores de busca com resultados garantidos",
        benefits: ["Ranking melhorado", "Tráfego qualificado", "Análise da concorrência"]
      }
    ]
  },
  "design-grafico": {
    icon: Palette,
    title: "Design Gráfico",
    description: "Criação de identidades visuais e materiais gráficos",
    fullDescription: "Criamos identidades visuais únicas e materiais gráficos profissionais que representam a essência da sua marca. Nossa equipe criativa transforma ideias em soluções visuais impactantes.",
    features: ["Criação de logotipos", "Branding completo", "Material publicitário", "Design digital", "Packaging", "Sinalética"],
    solutions: [
      {
        title: "Identidade Visual",
        description: "Desenvolvimento completo da identidade da sua marca",
        benefits: ["Logo exclusivo", "Manual de marca", "Aplicações práticas"]
      },
      {
        title: "Material Gráfico",
        description: "Criação de materiais impressos e digitais profissionais",
        benefits: ["Design criativo", "Alta qualidade", "Entrega rápida"]
      }
    ]
  },
  "ciberseguranca": {
    icon: Users,
    title: "Cibersegurança (SOC)",
    description: "Proteção avançada contra ameaças digitais",
    fullDescription: "Implementamos soluções de cibersegurança avançadas e operamos centros de operações de segurança (SOC) para proteger a sua empresa contra ameaças digitais modernas.",
    features: ["Monitorização 24/7", "Análise de ameaças em tempo real", "Resposta rápida a incidentes", "Auditoria de segurança", "Formação em segurança", "Compliance e certificações"],
    solutions: [
      {
        title: "SOC Completo",
        description: "Centro de operações de segurança dedicado à sua empresa",
        benefits: ["Monitorização 24/7", "Analistas especializados", "Resposta imediata"]
      },
      {
        title: "Segurança Básica",
        description: "Proteção essencial para pequenas e médias empresas",
        benefits: ["Antivírus empresarial", "Firewall configurado", "Backups seguros"]
      }
    ]
  }
};

const ServiceDetail = () => {
  const { id } = useParams();
  const service = servicesData[id as keyof typeof servicesData];

  if (!service) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gradient-primary mb-4">Serviço não encontrado</h1>
            <Link to="/servicos">
              <Button className="bg-accent-gradient hover-glow">
                Voltar aos Serviços
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-8">
            <Link to="/servicos" className="inline-flex items-center text-accent hover:text-accent/80 transition-colors mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar aos Serviços
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-start space-x-4 mb-8">
                <div className="w-16 h-16 bg-primary-gradient rounded-xl flex items-center justify-center shadow-glow">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-4">
                    {service.title}
                  </h1>
                  <p className="text-xl text-foreground/70">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-foreground/80 text-lg leading-relaxed">
                  {service.fullDescription}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {service.solutions.map((solution, index) => (
                  <Card key={index} className="glass">
                    <CardHeader>
                      <CardTitle className="text-gradient-primary">{solution.title}</CardTitle>
                      <CardDescription>{solution.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {solution.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-foreground/70">
                            <CheckCircle className="w-4 h-4 text-accent mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card className="glass sticky top-24">
                <CardHeader>
                  <CardTitle className="text-gradient-primary">Funcionalidades Incluídas</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-sm text-foreground/70">
                        <CheckCircle className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contato">
                    <Button className="w-full bg-accent-gradient hover-glow mb-3">
                      Solicitar Orçamento
                    </Button>
                  </Link>
                  <Link to="/servicos">
                    <Button variant="outline" className="w-full">
                      Ver Outros Serviços
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetail;