import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Clock, Users, Star, BookOpen, PlayCircle, CheckCircle, Award, ExternalLink } from "lucide-react";

const coursesData = {
  "desenvolvimento-web": {
    title: "Desenvolvimento Web Completo",
    description: "Aprenda a criar websites modernos do zero ao deploy",
    level: "Iniciante",
    duration: "40 horas",
    students: 450,
    rating: 4.8,
    price: "€299",
    category: "Programação",
    instructor: "João Silva",
    instructorBio: "Desenvolvedor Full-Stack com mais de 8 anos de experiência em empresas tech. Especialista em React e Node.js.",
    topics: ["HTML5", "CSS3", "JavaScript", "React", "Node.js"],
    overview: "Curso completo de desenvolvimento web que abrange desde os fundamentos até tecnologias avançadas como React e Node.js. Ideal para quem quer entrar no mercado de desenvolvimento web.",
    whatYouLearn: [
      "Fundamentos sólidos de HTML5, CSS3 e JavaScript",
      "Desenvolvimento de interfaces modernas com React",
      "Criação de APIs REST com Node.js e Express",
      "Integração com bases de dados SQL e NoSQL",
      "Deploy de aplicações em plataformas cloud",
      "Boas práticas de desenvolvimento e versionamento"
    ],
    requirements: [
      "Conhecimentos básicos de informática",
      "Computador com acesso à internet",
      "Motivação para aprender programação"
    ],
    curriculum: [
      {
        module: "Módulo 1: Fundamentos Web",
        lessons: [
          "Introdução ao desenvolvimento web",
          "HTML5 - Estrutura e semântica",
          "CSS3 - Estilos e layouts",
          "JavaScript - Programação básica",
          "DOM e eventos"
        ]
      },
      {
        module: "Módulo 2: JavaScript Avançado",
        lessons: [
          "ES6+ e funcionalidades modernas",
          "Programação assíncrona",
          "APIs e fetch",
          "Local Storage e Session Storage",
          "Projeto prático - Lista de tarefas"
        ]
      },
      {
        module: "Módulo 3: React Fundamentals",
        lessons: [
          "Introdução ao React",
          "Componentes e JSX",
          "Props e State",
          "Hooks básicos",
          "Eventos e formulários"
        ]
      },
      {
        module: "Módulo 4: React Avançado",
        lessons: [
          "Hooks avançados",
          "Context API",
          "React Router",
          "Gestão de estado",
          "Projeto prático - E-commerce"
        ]
      },
      {
        module: "Módulo 5: Backend com Node.js",
        lessons: [
          "Introdução ao Node.js",
          "Express.js framework",
          "APIs REST",
          "Autenticação e autorização",
          "Base de dados com MongoDB"
        ]
      },
      {
        module: "Módulo 6: Projeto Final",
        lessons: [
          "Planeamento da aplicação",
          "Desenvolvimento Full-Stack",
          "Testes e debugging",
          "Deploy e hosting",
          "Apresentação do projeto"
        ]
      }
    ],
    benefits: [
      "Certificado de conclusão reconhecido",
      "Suporte direto com instrutor",
      "Projetos práticos para portfólio",
      "Acesso vitalício ao conteúdo",
      "Grupo exclusivo de networking",
      "Atualizações gratuitas do curso"
    ],
    externalLink: "https://pay.hotmart.com/X100039750B?bid=1686320730281"
  },
  "ciberseguranca-fundamentals": {
    title: "Fundamentos de Cibersegurança",
    description: "Proteja-se contra ameaças digitais e aprenda segurança informática",
    level: "Iniciante",
    duration: "30 horas",
    students: 320,
    rating: 4.9,
    price: "€249",
    category: "Segurança",
    instructor: "Maria Santos",
    instructorBio: "Especialista em Cibersegurança com certificações CISSP e CEH. 10+ anos de experiência em SOC e resposta a incidentes.",
    topics: ["Ethical Hacking", "Firewall", "Criptografia", "SOC", "Incident Response"],
    overview: "Aprenda os fundamentos essenciais da cibersegurança e como proteger sistemas e dados contra ameaças digitais modernas.",
    whatYouLearn: [
      "Identificação e análise de ameaças digitais",
      "Configuração de firewalls e sistemas de proteção",
      "Técnicas de ethical hacking e penetration testing",
      "Implementação de políticas de segurança",
      "Resposta a incidentes de segurança",
      "Compliance e regulamentações"
    ],
    requirements: [
      "Conhecimentos básicos de redes",
      "Experiência com sistemas operativos",
      "Interesse em segurança informática"
    ],
    curriculum: [
      {
        module: "Módulo 1: Introdução à Cibersegurança",
        lessons: [
          "Panorama atual das ameaças",
          "Tipos de ataques cibernéticos",
          "Princípios fundamentais da segurança",
          "Framework de segurança",
          "Risk assessment"
        ]
      },
      {
        module: "Módulo 2: Segurança de Redes",
        lessons: [
          "Protocolos de rede seguros",
          "Configuração de firewalls",
          "VPN e túneis seguros",
          "Monitorização de tráfego",
          "Deteção de intrusões"
        ]
      }
    ],
    benefits: [
      "Certificado reconhecido pela indústria",
      "Laboratórios práticos virtuais",
      "Simulações de ataques reais",
      "Mentoria especializada",
      "Preparação para certificações",
      "Kit de ferramentas profissionais"
    ],
    externalLink: "https://pay.hotmart.com/X100039750B?bid=1686320730281"
  },
  "publisher": {
    title: "Microsoft Publisher do Básico ao Avançado",
    description: "Domine o Microsoft Publisher para criar publicações profissionais",
    level: "Iniciante a Avançado",
    duration: "25 horas",
    students: 200,
    rating: 4.7,
    price: "€199",
    category: "Design",
    instructor: "Enoque Peter",
    instructorBio: "Designer Gráfico e Instrutora de Software com 7 anos de experiência. Especialista em ferramentas Microsoft Office.",
    topics: ["Microsoft Publisher", "Design Gráfico", "Publicações", "Marketing", "Branding"],
    overview: "Curso completo de Microsoft Publisher, desde o básico até técnicas avançadas de design para criar publicações profissionais.",
    whatYouLearn: [
      "Navegação e interface do Publisher",
      "Criação de documentos e templates",
      "Design de brochuras, flyers e newsletters",
      "Incorporação de imagens e gráficos",
      "Técnicas avançadas de layout",
      "Preparação para impressão e distribuição digital"
    ],
    requirements: [
      "Conhecimentos básicos de informática",
      "Microsoft Publisher instalado",
      "Interesse em design gráfico"
    ],
    curriculum: [
      {
        module: "Módulo 1: Introdução ao Microsoft Publisher",
        lessons: [
          "Visão geral do Publisher",
          "Navegação na interface",
          "Configuração de documentos",
          "Uso de templates",
          "Ferramentas básicas de design"
        ]
      },
      {
        module: "Módulo 2: Criação de Publicações",
        lessons: [
          "Design de brochuras",
          "Criação de flyers",
          "Desenvolvimento de newsletters",
          "Incorporação de imagens",
          "Uso de gráficos e tabelas"
        ]
      }
    ],
    benefits: [
      "Certificado de conclusão",
      "Acesso a templates exclusivos",
      "Projetos práticos de design",
      "Suporte do instrutor",
      "Acesso vitalício ao conteúdo",
      "Descontos em futuros cursos"
    ],
    externalLink: "https://pay.hotmart.com/A98206101D"
//     <script type="text/javascript">
// 	function importHotmart(){ 
//  		var imported = document.createElement('script'); 
//  		imported.src = 'https://static.hotmart.com/checkout/widget.min.js'; 
//  		document.head.appendChild(imported); 
// 		var link = document.createElement('link'); 
// 		link.rel = 'stylesheet'; 
// 		link.type = 'text/css'; 
// 		link.href = 'https://static.hotmart.com/css/hotmart-fb.min.css'; 
// 		document.head.appendChild(link);	} 
//  	importHotmart(); 
//  </script> 
//  <a onclick="return false;" href="https://pay.hotmart.com/A98206101D?checkoutMode=2" class="hotmart-fb hotmart__button-checkout"><img src='https://static.hotmart.com/img/btn-buy-green.png'></a> 
  },
  "onenote": {
    title: "Microsoft OneNote para Produtividade",
    description: "Aprenda a usar o OneNote para organizar suas notas e aumentar a produtividade",
    level: "Iniciante",
    duration: "15 horas",
    students: 150,
    rating: 4.6,
    price: "€99",
    category: "Produtividade",
    instructor: "Julio Mutuque",
    instructorBio: "Especialista em produtividade e organização com 5 anos de experiência em treinamento de ferramentas Microsoft Office.",
    topics: ["Microsoft OneNote", "Organização", "Produtividade", "Notas Digitais", "Colaboração"],
    overview: "Curso prático de Microsoft OneNote para ajudar você a organizar suas notas, ideias e projetos de forma eficiente.",
    whatYouLearn: [
      "Navegação e interface do OneNote",
      "Criação e organização de cadernos",
      "Uso de etiquetas e categorias",
      "Incorporação de multimídia",
      "Colaboração em tempo real",
      "Sincronização com outros dispositivos"
    ],
    requirements: [
      "Conhecimentos básicos de informática",
      "Microsoft OneNote instalado",
      "Desejo de melhorar a organização pessoal"
    ],
    curriculum: [
      {
        module: "Módulo 1: Introdução ao OneNote",
        lessons: [
          "Visão geral do OneNote",
          "Navegação na interface",
          "Criação de cadernos e seções",
          "Ferramentas básicas de anotação",
          "Uso de etiquetas"
        ]
      },
      {
        module: "Módulo 2: Técnicas Avançadas",
        lessons: [
          "Incorporação de imagens e arquivos",
          "Gravação de áudio e vídeo",
          "Colaboração e partilha",
          "Sincronização entre dispositivos",
          "Dicas de produtividade"
        ]
      }
    ],
    benefits: [
      "Certificado de conclusão",
      "Acesso a templates de organização",
      "Projetos práticos de organização",
      "Suporte do instrutor",
      "Acesso vitalício ao conteúdo",
      "Descontos em futuros cursos"
    ],
    externalLink: "https://pay.hotmart.com/M98054255Y"

      // winget de pagina de pagamento
//       < script type="text/javascript" >
//       function importHotmart() {
//         var imported = document.createElement('script');
//         imported.src = 'https://static.hotmart.com/checkout/widget.min.js';
//         document.head.appendChild(imported);
//         var link = document.createElement('link');
//         link.rel = 'stylesheet';
//         link.type = 'text/css';
//         link.href = 'https://static.hotmart.com/css/hotmart-fb.min.css';
//         document.head.appendChild(link);
//       } 
//  	importHotmart(); 
//  </ >
//   <a onclick="return false;" href="https://pay.hotmart.com/M98054255Y?checkoutMode=2" class="hotmart-fb hotmart__button-checkout"><img src='https://static.hotmart.com/img/btn-buy-green.png'></a> 
  },
  "powerpoint-basico": {
    title: "PowerPoint Basico",
    description: "Domine o Microsoft PowerPoint para criar apresentações impactantes",
    level: "Iniciante",
    duration: "20 horas",
    students: 180,
    rating: 4.5,
    price: "€149",
    category: "Design",
    instructor: "Ana Costa",
    instructorBio: "Designer Gráfico e Instrutora de Software com 6 anos de experiência. Especialista em apresentações corporativas.",
    topics: ["Microsoft PowerPoint", "Design de Apresentações", "Slides", "Marketing", "Branding"],
    overview: "Curso completo de Microsoft PowerPoint, desde o básico até técnicas avançadas de design para criar apresentações profissionais.",
    whatYouLearn: [
      "Navegação e interface do PowerPoint",
      "Criação de slides e templates",
      "Design de apresentações eficazes",
      "Incorporação de multimídia",
      "Técnicas avançadas de animação",
      "Preparação para apresentação"
    ],
    requirements: [
      "Conhecimentos básicos de informática",
      "Microsoft PowerPoint instalado",
      "Interesse em design gráfico"
    ],
    curriculum: [
      {
        module: "Módulo 1: Introdução ao Microsoft PowerPoint",
        lessons: [
          "Visão geral do PowerPoint",
          "Navegação na interface",
          "Configuração de apresentações",
          "Uso de templates",
          "Ferramentas básicas de design"
        ]
      },
      {
        module: "Módulo 2: Criação de Apresentações",
        lessons: [
          "Design de slides",
          "Incorporação de imagens e vídeos",
          "Uso de gráficos e tabelas",
          "Técnicas de animação",
          "Dicas para apresentações eficazes"
        ]
      }
    ],
    benefits: [
      "Certificado de conclusão",
      "Acesso a templates exclusivos",
      "Projetos práticos de design",
      "Suporte do instrutor",
      "Acesso vitalício ao conteúdo",
      "Descontos em futuros cursos"
    ],
    externalLink: "https://pay.hotmart.com/I99386983B"
  }

//   <script type="text/javascript">
// 	function importHotmart(){ 
//  		var imported = document.createElement('script'); 
//  		imported.src = 'https://static.hotmart.com/checkout/widget.min.js'; 
//  		document.head.appendChild(imported); 
// 		var link = document.createElement('link'); 
// 		link.rel = 'stylesheet'; 
// 		link.type = 'text/css'; 
// 		link.href = 'https://static.hotmart.com/css/hotmart-fb.min.css'; 
// 		document.head.appendChild(link);	} 
//  	importHotmart(); 
//  </script> 
//  <a onclick="return false;" href="https://pay.hotmart.com/I99386983B?checkoutMode=2" class="hotmart-fb hotmart__button-checkout"><img src='https://static.hotmart.com/img/btn-buy-green.png'></a> 

};

const CourseDetail = () => {
  const { id } = useParams();
  const course = coursesData[id as keyof typeof coursesData];

  if (!course) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gradient-primary mb-4">Curso não encontrado</h1>
            <Link to="/cursos">
              <Button className="bg-accent-gradient hover-glow">
                Voltar aos Cursos
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
            <Link to="/cursos" className="inline-flex items-center text-accent hover:text-accent/80 transition-colors mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar aos Cursos
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <Badge className="bg-accent-gradient mb-2">{course.level}</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-4">
                      {course.title}
                    </h1>
                    <p className="text-xl text-foreground/70 mb-4">
                      {course.description}
                    </p>
                    <div className="flex items-center space-x-6 text-sm text-foreground/70">
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
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gradient-primary mb-4">Sobre o Curso</h2>
                  <p className="text-foreground/80 leading-relaxed">{course.overview}</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gradient-primary mb-4">O que vai aprender</h2>
                  <ul className="space-y-2">
                    {course.whatYouLearn.map((item, index) => (
                      <li key={index} className="flex items-start text-foreground/80">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gradient-primary mb-4">Requisitos</h2>
                  <ul className="space-y-2">
                    {course.requirements.map((req, index) => (
                      <li key={index} className="flex items-start text-foreground/80">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gradient-primary mb-4">Currículo</h2>
                  <Accordion type="single" collapsible className="w-full">
                    {course.curriculum.map((module, index) => (
                      <AccordionItem key={index} value={`module-${index}`} className="border-border/50">
                        <AccordionTrigger className="text-left hover:text-accent transition-colors">
                          {module.module}
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2 pl-4">
                            {module.lessons.map((lesson, lessonIndex) => (
                              <li key={lessonIndex} className="flex items-center text-foreground/70">
                                <PlayCircle className="w-4 h-4 text-accent mr-2" />
                                {lesson}
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gradient-primary mb-4">Instrutor</h2>
                  <Card className="glass">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-xl">{course.instructor.charAt(0)}</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gradient-primary mb-2">{course.instructor}</h3>
                          <p className="text-foreground/70">{course.instructorBio}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card className="glass sticky top-24">
                <CardHeader className="text-center">
                  <div className="text-4xl font-bold text-gradient-primary mb-2">{course.price}</div>
                  <Badge className="bg-accent-gradient">{course.category}</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button
                    className="w-full bg-accent-gradient hover-glow text-lg py-6"
                    onClick={() => window.open(`${course.externalLink}`, '_blank')}
                  >
                    Inscrever-se Agora
                  </Button>

                  <div className="text-center text-sm text-foreground/70">
                    Garantia de 30 dias ou dinheiro de volta
                  </div>

                  <div className="space-y-3 pt-4 border-t border-border/50">
                    <h3 className="font-bold text-gradient-primary">Inclui:</h3>
                    {course.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start text-sm text-foreground/70">
                        <Award className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-border/50">
                    <h3 className="font-bold text-gradient-primary mb-3">Tópicos:</h3>
                    <div className="flex flex-wrap gap-2">
                      {course.topics.map((topic, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Link to="/contato">
                    <Button variant="outline" className="w-full mt-4">
                      Dúvidas? Contacte-nos
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

export default CourseDetail;