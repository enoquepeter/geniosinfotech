import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, User, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: "futuro-inteligencia-artificial",
    title: "O Futuro da Inteligência Artificial em 2024",
    excerpt: "Explore as tendências mais promissoras da IA e como elas vão transformar diversos setores.",
    content: "A inteligência artificial continua a revolucionar todos os aspetos da tecnologia...",
    author: "João Silva",
    date: "2024-01-15",
    readTime: "5 min",
    category: "IA",
    tags: ["Inteligência Artificial", "Machine Learning", "Tecnologia", "Futuro"],
    featured: true
  },
  {
    id: "ciberseguranca-2024",
    title: "Tendências de Cibersegurança para 2024",
    excerpt: "As principais ameaças digitais e como se proteger no novo ano.",
    content: "Com o aumento dos ataques cibernéticos, a segurança digital tornou-se mais crucial...",
    author: "Maria Santos",
    date: "2024-01-12",
    readTime: "7 min",
    category: "Segurança",
    tags: ["Cibersegurança", "Proteção", "Ameaças", "SOC"],
    featured: false
  },
  {
    id: "desenvolvimento-web-moderno",
    title: "Ferramentas Modernas de Desenvolvimento Web",
    excerpt: "Conheça as frameworks e bibliotecas que estão a definir o futuro do desenvolvimento web.",
    content: "O ecossistema de desenvolvimento web evolui constantemente...",
    author: "Pedro Costa",
    date: "2024-01-10",
    readTime: "6 min",
    category: "Desenvolvimento",
    tags: ["React", "Next.js", "JavaScript", "Frontend"],
    featured: false
  },
  {
    id: "marketing-digital-estrategias",
    title: "Estratégias de Marketing Digital que Funcionam",
    excerpt: "Táticas comprovadas para aumentar a presença online da sua empresa.",
    content: "No mundo digital atual, ter uma estratégia de marketing eficaz é essencial...",
    author: "Ana Ferreira",
    date: "2024-01-08",
    readTime: "8 min",
    category: "Marketing",
    tags: ["SEO", "Social Media", "Content Marketing", "ROI"],
    featured: false
  },
  {
    id: "redes-5g-impacto",
    title: "O Impacto das Redes 5G nas Empresas",
    excerpt: "Como a tecnologia 5G está a transformar a comunicação empresarial.",
    content: "A implementação das redes 5G representa uma revolução...",
    author: "Carlos Mendes",
    date: "2024-01-05",
    readTime: "4 min",
    category: "Redes",
    tags: ["5G", "IoT", "Conectividade", "Empresas"],
    featured: false
  },
  {
    id: "design-ui-tendencias",
    title: "Tendências de Design UI/UX em 2024",
    excerpt: "As tendências visuais e de experiência que vão dominar este ano.",
    content: "O design de interfaces continua a evoluir rapidamente...",
    author: "Luís Rodrigues",
    date: "2024-01-03",
    readTime: "5 min",
    category: "Design",
    tags: ["UI", "UX", "Design System", "Tendências"],
    featured: false
  }
];

const BlogPage = () => {
  const categories = ["Todos", ...Array.from(new Set(blogPosts.map(p => p.category)))];
  const featuredPost = blogPosts.find(post => post.featured);
  const otherPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gradient-primary mb-6">
              Blog Técnico
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Artigos, tutoriais e insights sobre tecnologia e inovação
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Badge key={category} variant="outline" className="cursor-pointer hover:bg-accent/20 transition-colors">
                {category}
              </Badge>
            ))}
          </div>

          {featuredPost && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gradient-primary mb-8">Artigo em Destaque</h2>
              <Card className="glass hover-glow transition-all duration-300 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-primary/20 to-accent/20 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <span className="text-6xl font-bold text-white/20">{featuredPost.title.charAt(0)}</span>
                    </div>
                    <Badge className="absolute top-4 left-4 bg-accent-gradient">
                      Destaque
                    </Badge>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-4 text-sm text-foreground/70">
                      <Badge variant="secondary">{featuredPost.category}</Badge>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(featuredPost.date).toLocaleDateString('pt-PT')}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-gradient-primary text-2xl mb-4">
                      {featuredPost.title}
                    </CardTitle>
                    <CardDescription className="text-base mb-6">
                      {featuredPost.excerpt}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-foreground/70">
                        <User className="w-4 h-4 mr-2" />
                        {featuredPost.author}
                      </div>
                      <Link to={`/blog/${featuredPost.id}`}>
                        <Button className="bg-accent-gradient hover-glow">
                          Ler Artigo
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gradient-primary mb-8">Últimos Artigos</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <Card key={post.id} className="glass hover-glow group transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white/20">{post.title.charAt(0)}</span>
                  </div>
                  <Badge className="absolute top-3 right-3 bg-background/80">
                    {post.category}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-2 text-sm text-foreground/70">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString('pt-PT')}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-gradient-primary group-hover:text-accent transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {post.tags.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{post.tags.length - 2}
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-foreground/70">
                      <User className="w-4 h-4 mr-2" />
                      {post.author}
                    </div>
                    <Link to={`/blog/${post.id}`}>
                      <Button variant="outline" size="sm">
                        Ler mais
                      </Button>
                    </Link>
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

export default BlogPage;