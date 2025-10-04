import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Clock, Users, Star, BookOpen } from "lucide-react";
import { formatPrice } from '@/utils/formatPrice';

interface Course {
  id: string;
  title: string;
  description: string;
  level: string;
  duration: string;
  students: number;
  rating: number;
  price: number | string;
  category: string;
  instructor: string;
  topics: string[];
  overview: string;
}

const coursesData: Course[] = [
  {
    id: "powerpoint",
    title: "PowerPoint - Slides Profissionais",
    description: "Domine a arte de criar apresentações impactantes com PowerPoint",
    level: "Avançado",
    duration: "20 horas",
    students: 150,
    rating: 4.5,
    price: "R$ 65,00",
    category: "Design",
    instructor: "Julio Mutuque",
    topics: ["Slides", "Templates", "Animações", "Gráficos", "Dicas de Apresentação"],
    overview: "Aprenda a criar apresentações profissionais e envolventes utilizando todas as funcionalidades do PowerPoint."
  },
  {
    id: "powerpoint-basico",
    title: "PowerPoint Básico",
    description: "Introdução ao PowerPoint para criar apresentações simples e eficazes",
    level: "Iniciante",
    duration: "10 horas",
    students: 100,
    rating: 4.2,
    price: "R$ 35,00",
    category: "Design",
    instructor: "Carlos Silva",
    topics: ["Introdução", "Criação de Slides", "Formatação", "Inserção de Imagens", "Dicas Básicas"],
    overview: "Curso básico para iniciantes que desejam aprender a criar apresentações simples e eficazes com PowerPoint."
  },
  // {
  //   id: "excel",
  //   title: "Excel",
  //   description: "Aprenda a usar o Excel para análise de dados e automação de tarefas",
  //   level: "Intermédio",
  //   duration: "30 horas",
  //   students: 200,
  //   rating: 4.7,
  //   price: "€49",
  //   category: "Produtividade",
  //   instructor: "Ana Oliveira",
  //   topics: ["Fórmulas", "Tabelas Dinâmicas", "Macros", "Gráficos", "Análise de Dados"],
  //   overview: "Domine o Excel desde o básico até técnicas avançadas para melhorar sua produtividade e análise de dados."
  // },
  {
    id: "publisher",
    title: "Publisher",
    description: "Crie publicações profissionais com Microsoft Publisher",
    level: "Avançado",
    duration: "25 horas",
    students: 120,
    rating: 4.4,
    price: 65.00,  // Note: Changed to number
    category: "Design",
    instructor: "Enoque Peter",
    topics: ["Layouts", "Templates", "Impressão", "Marketing Materials", "Dicas de Design"],
    overview: "Aprenda a criar brochuras, newsletters e outros materiais de marketing com o Microsoft Publisher."
  },
  {
    id: "onenote",
    title: "OneNote",
    description: "Organize suas notas e ideias com Microsoft OneNote",
    level: "Intermédio",
    duration: "15 horas",
    students: 180,
    rating: 4.6,
    price: 47.00,  // Note: Changed to number
    category: "Produtividade",
    instructor: "Julio Mutuque",
    topics: ["Cadernos", "Etiquetas", "Sincronização", "Colaboração", "Dicas de Organização"],
    overview: "Descubra como usar o OneNote para capturar, organizar e compartilhar suas notas de forma eficiente."
  },
  // {
  //   id: "desenvolvimento-web",
  //   title: "Desenvolvimento Web Completo",
  //   description: "Aprenda a criar websites modernos do zero ao deploy",
  //   level: "Iniciante",
  //   duration: "40 horas",
  //   students: 450,
  //   rating: 4.8,
  //   price: "€299",
  //   category: "Programação",
  //   instructor: "João Silva",
  //   topics: ["HTML5", "CSS3", "JavaScript", "React", "Node.js"],
  //   overview: "Curso completo de desenvolvimento web que abrange desde os fundamentos até tecnologias avançadas como React e Node.js."
  // },
  // {
  //   id: "ciberseguranca-fundamentals",
  //   title: "Fundamentos de Cibersegurança",
  //   description: "Proteja-se contra ameaças digitais e aprenda segurança informática",
  //   level: "Iniciante",
  //   duration: "30 horas",
  //   students: 320,
  //   rating: 4.9,
  //   price: "€249",
  //   category: "Segurança",
  //   instructor: "Maria Santos",
  //   topics: ["Ethical Hacking", "Firewall", "Criptografia", "SOC", "Incident Response"],
  //   overview: "Aprenda os fundamentos essenciais da cibersegurança e como proteger sistemas e dados contra ameaças digitais."
  // },
  // {
  //   id: "redes-computadores",
  //   title: "Administração de Redes",
  //   description: "Configure e mantenha redes empresariais",
  //   level: "Intermédio",
  //   duration: "35 horas",
  //   students: 280,
  //   rating: 4.7,
  //   price: "€349",
  //   category: "Redes",
  //   instructor: "Pedro Costa",
  //   topics: ["TCP/IP", "Switching", "Routing", "VPN", "Network Security"],
  //   overview: "Curso abrangente sobre administração de redes, desde conceitos básicos até configurações empresariais avançadas."
  // },
  // {
  //   id: "marketing-digital-avancado",
  //   title: "Marketing Digital Avançado",
  //   description: "Estratégias modernas para crescimento online",
  //   level: "Intermédio",
  //   duration: "25 horas",
  //   students: 520,
  //   rating: 4.6,
  //   price: "€199",
  //   category: "Marketing",
  //   instructor: "Ana Ferreira",
  //   topics: ["SEO", "Google Ads", "Social Media", "Email Marketing", "Analytics"],
  //   overview: "Domine as estratégias de marketing digital mais eficazes para aumentar a presença online e conversões."
  // },
  // {
  //   id: "design-ui-ux",
  //   title: "Design UI/UX Profissional",
  //   description: "Crie interfaces bonitas e funcionais",
  //   level: "Iniciante",
  //   duration: "45 horas",
  //   students: 390,
  //   rating: 4.8,
  //   price: "€279",
  //   category: "Design",
  //   instructor: "Carlos Mendes",
  //   topics: ["Figma", "Adobe XD", "Prototyping", "User Research", "Design Systems"],
  //   overview: "Aprenda a criar experiências de utilizador excepcionais através de design thinking e ferramentas profissionais."
  // },
  // {
  //   id: "python-data-science",
  //   title: "Python para Data Science",
  //   description: "Análise de dados e machine learning com Python",
  //   level: "Intermédio",
  //   duration: "50 horas",
  //   students: 210,
  //   rating: 4.9,
  //   price: "€399",
  //   category: "Data Science",
  //   instructor: "Luís Rodrigues",
  //   topics: ["Python", "Pandas", "NumPy", "Machine Learning", "Visualization"],
  //   overview: "Mergulhe no mundo da ciência de dados usando Python, desde análise básica até algoritmos de machine learning."
  // }
];

const CourseCard = ({ course }: { course: Course }) => {
  const [formattedPrice, setFormattedPrice] = useState('...');

  useEffect(() => {
    const updatePrice = async () => {
      const basePrice = typeof course.price === 'number' 
        ? course.price 
        : parseFloat(course.price.replace(/[^0-9.]/g, ''));
      
      const formatted = await formatPrice(basePrice);
      setFormattedPrice(formatted);
    };

    updatePrice();
  }, [course.price]);

  return (
    <span className="text-2xl font-bold text-gradient-primary">
      {formattedPrice}
    </span>
  );
};

const CoursesPage = () => {
  const [selectedLevel, setSelectedLevel] = useState("Todos");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const levels = ["Todos", "Iniciante", "Intermédio", "Avançado"];
  const categories = ["Todos", ...Array.from(new Set(coursesData.map(c => c.category)))];

  useEffect(() => {
    // Teste inicial para verificar a API
    const testFormatPrice = async () => {
      try {
        const testPrice = 100; // Preço base em BRL
        const formatted = await formatPrice(testPrice);
        console.log('💰 Teste de formatação:', {
          original: testPrice,
          formatted: formatted
        });
      } catch (error) {
        console.error('Erro no teste:', error);
      }
    };

    testFormatPrice();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gradient-primary mb-6">
              Nossos Cursos
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Desenvolva suas competências em tecnologia com cursos práticos e atualizados
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {levels.map((level) => (
              <Badge
                key={level}
                variant={selectedLevel === level ? "default" : "outline"}
                className="cursor-pointer hover:bg-accent/20 transition-colors"
                onClick={() => setSelectedLevel(level)}
              >
                {level}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "secondary"}
                className="cursor-pointer hover:bg-primary/20 transition-colors"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coursesData
              .filter(course =>
                (selectedLevel === "Todos" || course.level === selectedLevel) &&
                (selectedCategory === "Todos" || course.category === selectedCategory)
              )
              .map((course) => (
                <Card key={course.id} className="glass hover-glow group transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge className="bg-accent-gradient">{course.level}</Badge>
                      <CourseCard course={course} />
                    </div>
                    <CardTitle className="text-gradient-primary mb-2">{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                    <Badge variant="secondary">{course.category}</Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-foreground/70">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-accent" />
                        {course.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2 text-accent" />
                        {course.students} alunos
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-2 text-accent" />
                        {course.rating}/5
                      </div>
                      <div className="flex items-center">
                        <BookOpen className="w-4 h-4 mr-2 text-accent" />
                        {course.instructor}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {course.topics.slice(0, 3).map((topic) => (
                        <Badge key={topic} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                      {course.topics.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{course.topics.length - 3}
                        </Badge>
                      )}
                    </div>

                    <Button
                      className="w-full bg-accent-gradient hover-glow"
                      onClick={() => course.id === "powerpoint" ? window.location.href = "/curso-powerpoint" : window.location.href = `/cursos/${course.id}`}
                    >
                      Ver Curso
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </main >
      <Footer />
    </div >
  );
};

export default CoursesPage;