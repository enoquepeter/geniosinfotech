import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ExternalLink, Github } from "lucide-react";

const projectsData = [
  {
    id: "ecommerce-fashion",
    title: "E-commerce Fashion Store",
    description: "Loja online completa para uma marca de moda com sistema de pagamentos integrado",
    image: "/api/placeholder/400/250",
    category: "E-commerce",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    status: "Concluído",
    year: "2024",
    client: "Fashion Brand Ltd.",
    overview: "Desenvolvimento de uma plataforma de e-commerce moderna e responsiva para uma marca de moda, incluindo catálogo de produtos, carrinho de compras, sistema de pagamentos e painel administrativo."
  },
  {
    id: "hospital-management",
    title: "Sistema de Gestão Hospitalar",
    description: "Aplicação web para gestão completa de pacientes, médicos e consultas",
    image: "/api/placeholder/400/250",
    category: "Saúde",
    technologies: ["Vue.js", "Laravel", "MySQL", "Docker"],
    status: "Em desenvolvimento",
    year: "2024",
    client: "Hospital Central",
    overview: "Sistema completo para gestão hospitalar incluindo agendamento de consultas, histórico médico, gestão de medicamentos e relatórios administrativos."
  },
  {
    id: "smart-home-app",
    title: "App Smart Home",
    description: "Aplicação móvel para controlo de dispositivos domóticos",
    image: "/api/placeholder/400/250",
    category: "IoT",
    technologies: ["React Native", "Firebase", "IoT", "Bluetooth"],
    status: "Concluído",
    year: "2023",
    client: "Tech Home Solutions",
    overview: "Aplicação móvel que permite controlar diversos dispositivos inteligentes da casa através de uma interface intuitiva e moderna."
  },
  {
    id: "school-platform",
    title: "Plataforma Educacional",
    description: "Portal educativo com gestão de alunos, professores e conteúdos",
    image: "/api/placeholder/400/250",
    category: "Educação",
    technologies: ["Angular", "Spring Boot", "MongoDB", "WebRTC"],
    status: "Concluído",
    year: "2023",
    client: "Escola Internacional",
    overview: "Plataforma completa para gestão escolar com funcionalidades de ensino à distância, gestão de notas e comunicação entre pais e professores."
  },
  {
    id: "fintech-dashboard",
    title: "Dashboard Fintech",
    description: "Painel administrativo para análise de dados financeiros",
    image: "/api/placeholder/400/250",
    category: "Fintech",
    technologies: ["Next.js", "Python", "PostgreSQL", "Chart.js"],
    status: "Em desenvolvimento",
    year: "2024",
    client: "Financial Analytics Corp",
    overview: "Dashboard avançado para análise de dados financeiros com visualizações interativas e relatórios automatizados."
  },
  {
    id: "logistics-tracker",
    title: "Sistema de Rastreamento Logístico",
    description: "Plataforma para rastreamento de entregas em tempo real",
    image: "/api/placeholder/400/250",
    category: "Logística",
    technologies: ["React", "Express.js", "Redis", "Google Maps API"],
    status: "Concluído",
    year: "2023",
    client: "FastDelivery Ltd",
    overview: "Sistema completo para rastreamento de entregas com integração GPS, notificações em tempo real e gestão de rotas otimizadas."
  }
];

const ProjectsPage = () => {
  const categories = ["Todos", ...Array.from(new Set(projectsData.map(p => p.category)))];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gradient-primary mb-6">
              Nossos Projetos
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Explore alguns dos projetos que desenvolvemos para nossos clientes
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Badge key={category} variant="outline" className="cursor-pointer hover:bg-accent/20 transition-colors">
                {category}
              </Badge>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <Card key={project.id} className="glass hover-glow group transition-all duration-300 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white/20">{project.title.charAt(0)}</span>
                  </div>
                  <Badge className="absolute top-3 right-3 bg-background/80">
                    {project.status}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-gradient-primary mb-2">{project.title}</CardTitle>
                      <Badge variant="secondary" className="mb-2">{project.category}</Badge>
                    </div>
                    <span className="text-sm text-foreground/50">{project.year}</span>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Link to={`/projetos/${project.id}`} className="flex-1">
                      <Button className="w-full bg-accent-gradient hover-glow">
                        Ver Detalhes
                      </Button>
                    </Link>
                    <Button variant="outline" size="icon">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;