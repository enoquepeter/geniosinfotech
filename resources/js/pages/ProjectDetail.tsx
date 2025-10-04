import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, ExternalLink, Github, Calendar, User, CheckCircle } from "lucide-react";

const projectsData = {
  "ecommerce-fashion": {
    title: "E-commerce Fashion Store",
    description: "Loja online completa para uma marca de moda com sistema de pagamentos integrado",
    category: "E-commerce",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis", "Docker"],
    status: "Concluído",
    year: "2024",
    duration: "4 meses",
    client: "Fashion Brand Ltd.",
    overview: "Desenvolvimento de uma plataforma de e-commerce moderna e responsiva para uma marca de moda, incluindo catálogo de produtos, carrinho de compras, sistema de pagamentos e painel administrativo.",
    challenges: [
      "Integração com múltiplos gateways de pagamento",
      "Otimização para alta performance durante picos de tráfego",
      "Sistema de recomendações personalizado",
      "Gestão complexa de inventário em tempo real"
    ],
    solutions: [
      "Implementação de cache inteligente com Redis",
      "Arquitetura de microserviços escalável",
      "Algoritmo de ML para recomendações",
      "Dashboard administrativo em tempo real"
    ],
    results: [
      "Aumento de 300% nas vendas online",
      "Redução de 50% no tempo de carregamento",
      "95% de satisfação dos utilizadores",
      "ROI de 250% no primeiro ano"
    ],
    features: [
      "Catálogo de produtos com filtros avançados",
      "Carrinho de compras persistente",
      "Sistema de pagamentos multi-gateway",
      "Painel administrativo completo",
      "Sistema de reviews e ratings",
      "Notificações push",
      "Analytics avançados",
      "Gestão de inventário"
    ]
  },
  "hospital-management": {
    title: "Sistema de Gestão Hospitalar",
    description: "Aplicação web para gestão completa de pacientes, médicos e consultas",
    category: "Saúde",
    technologies: ["Vue.js", "Laravel", "MySQL", "Docker", "WebRTC", "FHIR"],
    status: "Em desenvolvimento",
    year: "2024",
    duration: "6 meses",
    client: "Hospital Central",
    overview: "Sistema completo para gestão hospitalar incluindo agendamento de consultas, histórico médico, gestão de medicamentos e relatórios administrativos com conformidade GDPR.",
    challenges: [
      "Conformidade com regulamentações de saúde",
      "Integração com sistemas legados",
      "Interface intuitiva para diferentes perfis de utilizador",
      "Segurança e privacidade de dados médicos"
    ],
    solutions: [
      "Implementação de protocolos FHIR",
      "APIs RESTful para integração",
      "Design UX personalizado por perfil",
      "Criptografia end-to-end"
    ],
    results: [
      "Redução de 40% no tempo de agendamento",
      "100% conformidade GDPR",
      "Melhoria de 60% na satisfação dos pacientes",
      "Digitalização completa dos processos"
    ],
    features: [
      "Agendamento online de consultas",
      "Histórico médico digitalizado",
      "Prescrição eletrónica",
      "Telemedicina integrada",
      "Gestão de medicamentos",
      "Relatórios administrativos",
      "Sistema de alertas",
      "Dashboard executivo"
    ]
  },
  "smart-home-app": {
    title: "App Smart Home",
    description: "Aplicação móvel para controlo de dispositivos domóticos",
    category: "IoT",
    technologies: ["React Native", "Firebase", "IoT", "Bluetooth", "MQTT", "TensorFlow"],
    status: "Concluído",
    year: "2023",
    duration: "5 meses",
    client: "Tech Home Solutions",
    overview: "Aplicação móvel que permite controlar diversos dispositivos inteligentes da casa através de uma interface intuitiva e moderna com automação baseada em IA.",
    challenges: [
      "Compatibilidade com múltiplos protocolos IoT",
      "Latência mínima na comunicação",
      "Interface intuitiva para todas as idades",
      "Automação inteligente baseada em padrões"
    ],
    solutions: [
      "Gateway universal IoT personalizado",
      "Comunicação em tempo real via MQTT",
      "Design UX acessível e intuitivo",
      "Machine Learning para automação"
    ],
    results: [
      "Controlo de 50+ tipos de dispositivos",
      "Latência inferior a 100ms",
      "98% de uptime da aplicação",
      "Redução de 30% no consumo energético"
    ],
    features: [
      "Controlo de iluminação inteligente",
      "Gestão de climatização",
      "Sistema de segurança integrado",
      "Monitorização energética",
      "Automação por geolocalização",
      "Controlo por voz",
      "Cenários personalizados",
      "Relatórios de consumo"
    ]
  },
  "school-platform": {
    title: "Plataforma Educacional",
    description: "Portal educativo com gestão de alunos, professores e conteúdos",
    category: "Educação",
    technologies: ["Angular", "Spring Boot", "MongoDB", "WebRTC", "Kubernetes", "Elasticsearch"],
    status: "Concluído",
    year: "2023",
    duration: "8 meses",
    client: "Escola Internacional",
    overview: "Plataforma completa para gestão escolar com funcionalidades de ensino à distância, gestão de notas e comunicação entre pais e professores.",
    challenges: [
      "Escalabilidade para milhares de utilizadores simultâneos",
      "Qualidade de vídeo adaptativa",
      "Gamificação do processo de aprendizagem",
      "Integração com sistemas académicos existentes"
    ],
    solutions: [
      "Arquitetura cloud-native com Kubernetes",
      "Streaming adaptativo com WebRTC",
      "Sistema de pontos e conquistas",
      "APIs padronizadas para integração"
    ],
    results: [
      "5000+ alunos ativos simultaneamente",
      "Melhoria de 45% no engagement",
      "Redução de 60% nos custos administrativos",
      "99.9% de disponibilidade da plataforma"
    ],
    features: [
      "Salas de aula virtuais",
      "Sistema de avaliações online",
      "Biblioteca digital",
      "Comunicação pais-professores",
      "Calendário académico",
      "Relatórios de progresso",
      "Gamificação",
      "Mobile learning"
    ]
  },
  "fintech-dashboard": {
    title: "Dashboard Fintech",
    description: "Painel administrativo para análise de dados financeiros",
    category: "Fintech",
    technologies: ["Next.js", "Python", "PostgreSQL", "Chart.js", "TensorFlow", "Kafka"],
    status: "Em desenvolvimento",
    year: "2024",
    duration: "7 meses",
    client: "Financial Analytics Corp",
    overview: "Dashboard avançado para análise de dados financeiros com visualizações interativas, relatórios automatizados e previsões baseadas em machine learning.",
    challenges: [
      "Processamento de grandes volumes de dados",
      "Análise em tempo real de transações",
      "Conformidade com regulamentações financeiras",
      "Previsões precisas com machine learning"
    ],
    solutions: [
      "Pipeline de dados com Apache Kafka",
      "Processamento stream com Python",
      "Implementação de SOX compliance",
      "Modelos de ML personalizados"
    ],
    results: [
      "Processamento de 1M+ transações/dia",
      "Análise em tempo real < 5 segundos",
      "95% precisão nas previsões",
      "Conformidade total com regulamentações"
    ],
    features: [
      "Visualizações interativas em tempo real",
      "Relatórios automatizados",
      "Análise preditiva",
      "Gestão de riscos",
      "Monitorização de compliance",
      "Alertas inteligentes",
      "API para terceiros",
      "Backup e recovery"
    ]
  },
  "logistics-tracker": {
    title: "Sistema de Rastreamento Logístico",
    description: "Plataforma para rastreamento de entregas em tempo real",
    category: "Logística",
    technologies: ["React", "Express.js", "Redis", "Google Maps API", "Socket.io", "MongoDB"],
    status: "Concluído",
    year: "2023",
    duration: "6 meses",
    client: "FastDelivery Ltd",
    overview: "Sistema completo para rastreamento de entregas com integração GPS, notificações em tempo real e gestão de rotas otimizadas.",
    challenges: [
      "Rastreamento preciso em tempo real",
      "Otimização de rotas complexas",
      "Integração com múltiplas transportadoras",
      "Notificações push escaláveis"
    ],
    solutions: [
      "GPS tracking com alta precisão",
      "Algoritmos de otimização de rotas",
      "APIs padronizadas para integração",
      "Sistema de notificações distribuído"
    ],
    results: [
      "Redução de 35% nos custos de entrega",
      "Melhoria de 50% na satisfação do cliente",
      "99.8% precisão no rastreamento",
      "Aumento de 40% na eficiência das rotas"
    ],
    features: [
      "Rastreamento GPS em tempo real",
      "Otimização inteligente de rotas",
      "Notificações push automáticas",
      "Dashboard para gestores",
      "API para e-commerce",
      "Relatórios de performance",
      "Gestão de frota",
      "App móvel para condutores"
    ]
  }
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData[id as keyof typeof projectsData];

  if (!project) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gradient-primary mb-4">Projeto não encontrado</h1>
            <Link to="/projetos">
              <Button className="bg-accent-gradient hover-glow">
                Voltar aos Projetos
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-8">
            <Link to="/projetos" className="inline-flex items-center text-accent hover:text-accent/80 transition-colors mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar aos Projetos
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <span className="text-6xl font-bold text-white/20">{project.title.charAt(0)}</span>
                  </div>
                </div>
                
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-2">
                      {project.title}
                    </h1>
                    <p className="text-xl text-foreground/70 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-accent-gradient">{project.category}</Badge>
                      <Badge variant="outline">{project.status}</Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gradient-primary mb-4">Visão Geral</h2>
                  <p className="text-foreground/80 leading-relaxed">{project.overview}</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gradient-primary mb-4">Desafios</h2>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start text-foreground/80">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gradient-primary mb-4">Soluções</h2>
                  <ul className="space-y-2">
                    {project.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start text-foreground/80">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gradient-primary mb-4">Resultados</h2>
                  <ul className="space-y-2">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex items-start text-foreground/80">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1 space-y-6">
              <Card className="glass">
                <CardHeader>
                  <CardTitle className="text-gradient-primary">Detalhes do Projeto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center text-sm">
                    <User className="w-4 h-4 text-accent mr-2" />
                    <span className="text-foreground/70">Cliente:</span>
                    <span className="ml-2 font-medium">{project.client}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Calendar className="w-4 h-4 text-accent mr-2" />
                    <span className="text-foreground/70">Duração:</span>
                    <span className="ml-2 font-medium">{project.duration}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Calendar className="w-4 h-4 text-accent mr-2" />
                    <span className="text-foreground/70">Ano:</span>
                    <span className="ml-2 font-medium">{project.year}</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass">
                <CardHeader>
                  <CardTitle className="text-gradient-primary">Tecnologias</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass">
                <CardHeader>
                  <CardTitle className="text-gradient-primary">Funcionalidades</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-sm text-foreground/70">
                        <CheckCircle className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <div className="space-y-3">
                <Link to="/contato">
                  <Button className="w-full bg-accent-gradient hover-glow">
                    Solicitar Projeto Similar
                  </Button>
                </Link>
                <Link to="/projetos">
                  <Button variant="outline" className="w-full">
                    Ver Outros Projetos
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;