import { Check, Book, BookOpen, Calendar, Clock, GraduationCap, Monitor, Users, Heart, ChevronRight, CircleCheck, Sparkles } from "lucide-react";

const Modules = () => {
    const courseModules = [
        {
            number: 1,
            title: "Módulo 1: Introdução ao Design de Slides",
            description: "Introdução aos Slides Profissionais no PowerPoint"
        },
        {
            number: 2,
            title: "Módulo 2: Elementos Gráficos e Layout Visual",
            description: "Construa slides visualmente impactantes com uso de formas, gradientes, alinhamentos e ícones."
        },
        {
            number: 3,
            title: "Módulo 3: Animações e Interatividade Profissional",
            description: "Domine o uso de animações e efeitos para destacar conteúdo e criar apresentações dinâmicas."
        },
        {
            number: 4,
            title: "Módulo 4: Projetos Criativos e Casos de Uso",
            description: "Crie slides completos com temáticas específicas, aplicando tudo que foi aprendido."
        },
        {
            number: 5,
            title: "Módulo 5: Apresentação e Encerramento Profissional",
            description: "Conclua com um projeto final e garantir domínio na apresentação e entrega dos slides."
        }
    ];

    const features = [
        {
            icon: Book,
            title: "5 Módulos",
            description: "Conteúdo estruturado e progressivo"
        },
        {
            icon: BookOpen,
            title: "20 Aulas",
            description: "Material didático completo"
        },
        {
            icon: Clock,
            title: "10 Horas",
            description: "De conteúdo em vídeo"
        },
        {
            icon: GraduationCap,
            title: "Certificado",
            description: "De conclusão incluso"
        }
    ];

    return (
        <>
            <section id="content" className="mesh-gradient-bg py-12">
                <div className="container mx-auto">
                    <div className="reveal text-center mb-12">
                        <h2 className="text-3xl md:text-3xl font-bold mb-4 opacity-100 transform-none">
                            Conteúdo Programático
                        </h2>
                        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground opacity-100 transform-none">
                            Um programa completo para dominar o PowerPoint. Nosso curso é estruturado em módulos progressivos que vão desde o básico até técnicas avançadas de apresentação.
                        </p>
                    </div>
                    <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 opacity-100 transform-none">
                        {features.map((feature, idx) => (
                            <div key={idx} className="reveal bg-primary/10 rounded-lg p-4 flex flex-col items-center justify-center text-center">
                                <feature.icon className="text-primary mb-2 h-8 w-8" />
                                <h3 className="text-lg font-bold">{feature.title}</h3>
                                <p className="text-sm text-muted-foreground">{feature.description}</p>
                            </div>
                        ))}
                    </div>


                    <div className="reveal max-w-3xl mx-auto">
                        {courseModules.map((mod, idx) => (
                            <div className="mb-6 opacity-100 transform-none" key={mod.number}>
                                <div className="rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-lg">
                                    <div className="space-y-1.5 p-6 flex flex-row items-center gap-4">
                                        <div className="bg-primary text-primary-foreground rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">
                                            {mod.number}
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-semibold leading-none tracking-tight">
                                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                                                    {mod.title}
                                                </span>
                                            </h3>
                                            <p className="text-sm text-muted-foreground mt-2">{mod.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-8">
                        <div tabIndex={0}>
                            <a href="#price"
                                className="inline-flex items-center justify-center whitespace-nowrap sm:rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 btn-gradient shine-effect">
                                Quero ver Preco
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Modules;