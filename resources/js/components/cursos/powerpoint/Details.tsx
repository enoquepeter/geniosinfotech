import { Helmet } from "react-helmet";
import { Check, Book, BookOpen, Calendar, Clock, GraduationCap, Monitor, Users, Heart, ChevronRight, CircleCheck, Sparkles } from "lucide-react";
import Header from "@/components/Header.tsx"
import Footer from "@/components/Footer.tsx"
import slide1 from "../assets/Slide 1.jpg";
import slide2 from "../assets/Slide 2.jpg";
import slide3 from "../assets/Slide 3.jpg";
import slide4 from "../assets/Slide 4.jpg";
import slide5 from "../assets/Slide 5.jpg";
import slide6 from "../assets/Slide 6.jpg";
import slide7 from "../assets/Slide 7.jpg";
import slide8 from "../assets/Slide 8.jpg";
import benefitsImg from "../assets/CCaKcj2Eyr4xPFF3yxAA4QDGery3gXQ4.png";
// import { useEffect } from "react";

const PowerPoint = () => {
    const meta = ({
        title: "PowerPoint - Slides Profissionais",
        description: "Transforme suas apresentações em obras de arte profissionais",
        image: "",
        url: "https://geniosdainformatica.wuaze.com",
    });

    // useEffect(() => {
    //     // Meta Pixel Code
    //     !(function (f, b, e, v, n, t, s) {
    //         if (f.fbq) return;
    //         n = f.fbq = function () {
    //             n.callMethod ?
    //                 n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    //         };
    //         if (!f._fbq) f._fbq = n;
    //         n.push = n;
    //         n.loaded = !0;
    //         n.version = '2.0';
    //         n.queue = [];
    //         t = b.createElement(e);
    //         t.async = !0;
    //         t.src = v;
    //         s = b.getElementsByTagName(e)[0];
    //         s.parentNode.insertBefore(t, s);
    //     })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    //     window.fbq && window.fbq('init', '1019629833660485');
    //     window.fbq && window.fbq('track', 'PageView');
    // }, []);

    const benefits = [
        "Crie slides profissionais em metade do tempo habitual",
        "Destaque-se em apresentações decisivas para sua carreira",
        "Transforme ideias complexas em mensagens claras e impactantes",
        "Domine técnicas exclusivas usadas por designers profissionais",
        "Aumente sua confiança e autoridade ao apresentar para qualquer público",
        "Economize centenas de horas com nossos templates e atalhos exclusivos",
        "Aplique o conhecimento imediatamente e veja resultados desde a primeira aula",
    ];

    const slidesRow1 = [slide1, slide2, slide3, slide4];
    const slidesRow2 = [slide5, slide6, slide7, slide8];

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

    // const courseDetails = [
    //     {
    //         icon: Monitor,
    //         title: "Acesso Vitalício",
    //         description: "Estude no seu ritmo, sem pressão"
    //     },
    //     {
    //         icon: Users,
    //         title: "Suporte Dedicado",
    //         description: "Tire suas dúvidas com nossos instrutores"
    //     },
    //     {
    //         icon: Calendar,
    //         title: "Atualizações Gratuitas",
    //         description: "Conteúdo sempre atualizado"
    //     }
    // ];

    const courseDetails = [
        {
            icon: CircleCheck,
            title: "Requisitos",
            items: [
                "Um Computador",
                "Microsoft PowerPoint instalado",
                "Conexão com internet para acessar as aulas",
                "Vontade de aprender e aplicar o conhecimento"
            ]
        },
        {
            icon: Users,
            title: "Publico Alvo",
            items: [
                "Iniciantes no PowerPoint que desejam dominar o programa",
                "Estudantes que querem destacar seus trabalhos acadêmicos",
                "Profissionais que desejam fazer apresentações mais atrativas",
                "Palestrantes e criadores de conteúdo"
            ],
            note: {
                icon: Sparkles,
                text: "Independente do seu nível atual, você vai evoluir!"
            }
        },
        {
            icon: Sparkles,
            title: "Por Que Este Curso é Diferente",
            items: [
                "Foco total em design visual profissional",
                "Aulas 100% práticas e passo a passo",
                "Projetos reais e reutilizáveis",
                "Ensina truques de design que vão além do que cursos básicos mostram"
            ]
        }
    ];

    const faqs = [
        {
            question: "Preciso ter experiência com PowerPoint para fazer o curso?",
            answer: "Não! O curso foi desenvolvido para iniciantes. Você aprenderá desde o básico até técnicas mais avançadas de forma prática e didática."
        },
        {
            question: "Vou aprender a criar slides para qualquer área ou tema?",
            answer: "Sim! As técnicas ensinadas são versáteis e podem ser aplicadas para trabalhos acadêmicos, apresentações empresariais, palestras, vídeos de conteúdo e muito mais."
        },
        {
            question: "Vou poder usar os slides criados no curso?",
            answer: "Claro! Todos os projetos feitos no curso podem ser usados em seus trabalhos, portfólio ou apresentações profissionais."
        },
        {
            question: "Por que aprender PowerPoint se existem modelos prontos online?",
            answer: "Modelos prontos não garantem originalidade nem domínio da ferramenta. Neste curso você aprende a criar do zero, personalizar, animar e se destacar de verdade."
        },
        {
            question: "Quanto tempo preciso para concluir o curso?",
            answer: "O curso é dividido em 16 aulas diretas e práticas. Você pode concluir em poucos dias ou no seu ritmo, de forma 100% flexível."
        }
    ];

    return (
        <div>
            <Helmet>
                <title>{meta.title}</title>
                <meta name="description" content={meta.description} />
                
                <meta property="og:title" content={meta.title} />
                <meta property="og:description" content={meta.description} />
                <meta property="og:image" content={meta.image} />
                <meta property="og:url" content={meta.url} />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="geniosdainformatica" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={meta.title} />
                <meta name="twitter:description" content={meta.description} />
                <meta name="twitter:image" content={meta.image} />
                <meta name="twitter:site" content="@geniosinfotech" />
                <meta name="twitter:creator" content="@geniosinfotech" />

                {/* Meta Pixel Code */}
                {/* <noscript>
                    <img height="1" width="1" style={{ display: 'none' }} alt=""
                        src="https://www.facebook.com/tr?id=1019629833660485&ev=PageView&noscript=1" />
                </noscript> */}
            </Helmet>

            <Header />

            <div className="min-h-screen flex flex-col mesh-gradient-bg text-foreground">
                <main className="flex-grow">
                    <div className="mesh-gradient-bg">
                        <section className="py-20 md:py-28 mt-10 hero-pattern">
                            <div className="container px-4 md:px-6">
                                <div className="flex flex-col items-center text-center space-y-4">
                                    <div className="opacity-100 transform-none">
                                        <h1 className="text-4xl md:text-6xl max-w-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-purple-600 text-transparent bg-clip-text mb-4">
                                            Transforme suas apresentações em obras de arte profissionais
                                        </h1>
                                        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                                            Domine as técnicas avançadas do PowerPoint e destaque-se em apresentações profissionais, acadêmicas ou pessoais.
                                        </p>
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-4 mt-8 opacity-100 transform-none">
                                        <a
                                            href="https://pay.hotmart.com/X100039750B"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={() => window.fbq && window.fbq('track', 'InitiateCheckout')}
                                        >
                                            <button
                                                className="inline-flex items-center justify-center whitespace-nowrap sm:rounded-lg font-medium text-lg ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 g-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 btn-gradient shine-effect"
                                            >
                                                Comprar Agora
                                            </button>
                                        </a>
                                        <a href="#content">
                                            <button
                                                className="inline-flex items-center justify-center whitespace-nowrap sm:rounded-lg font-medium text-lg ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8"
                                            >
                                                Ver conteúdo do curso
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="benefits" className="py-12">
                            <div className="container mx-auto">
                                <div className="reveal text-center mb-12">
                                    <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-100 transform-none">Por que fazer este curso?</h2>
                                    <p className="text-xl text-muted-foreground opacity-100 transform-none">Desenvolva habilidades que farão diferença na sua carreira</p>
                                </div>

                                <div className="flex flex-col md:flex-row items-center gap-8">
                                    <div className="md:w-1/2 opacity-100 transform-none">
                                        <img src={benefitsImg} alt="Benefícios do curso" className="rounded-lg shadow-lg w-full" />
                                    </div>
                                    <div className="md:w-1/2 space-y-6">
                                        <p className="mb-6 opacity-100 transform-none">
                                            Nosso curso foi desenvolvido para quem desejam se destacar através de apresentações impactantes. Você aprenderá técnicas avançadas de design, animação e estruturação de conteúdo.
                                        </p>
                                        <ul className="space-y-4">
                                            {benefits.map((benefit, idx) => (
                                                <li key={idx} className="flex items-start gap-3 opacity-100 transform-none">
                                                    <Check className="text-primary mt-1 flex-shrink-0" size={24} />
                                                    <span>{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <section id="examples" className="mesh-gradient-bg py-12">
                        <div className="mx-auto">
                            <div className="reveal container text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-100 transform-none">
                                    Exemplos de slides que você vai criar
                                </h2>
                                <p className="mt-4 max-w-2xl mx-auto text-muted-foreground opacity-100 transform-none">
                                    Nosso curso ensina como criar slides profissionais que comunicam suas ideias com clareza e impacto visual. Veja alguns exemplos do que você aprenderá a fazer com nossas técnicas exclusivas.
                                </p>
                            </div>

                            <div className="mt-12 mb-16 overflow-hidden">
                                <div className="space-y-8">
                                    {/* Linha 1: deslizando para a esquerda */}
                                    <div className="reveal slider-row">
                                        <div className="flex gap-6 justify-center flex-no-wrap slider-track">
                                            {[...slidesRow1, ...slidesRow1].map((img, idx) => (
                                                <div key={`row1-${idx}`} className="rounded-lg overflow-hidden shadow-lg bg-card opacity-100 transform-none">
                                                    <img src={img} alt={`Slide example ${idx % slidesRow1.length + 1}`} className="w-full h-auto rounded-lg border-4 border-white shadow-xl" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Linha 2: deslizando para a direita */}
                                    <div className="reveal slider-row">
                                        <div className="flex gap-6 justify-center flex-no-wrap slider-reverse">
                                            {[...slidesRow2, ...slidesRow2].map((img, idx) => (
                                                <div key={`row2-${idx}`} className="rounded-lg overflow-hidden shadow-lg bg-card opacity-100 transform-none">
                                                    <img src={img} alt={`Slide example ${idx % slidesRow2.length + 5}`} className="w-full h-auto rounded-lg border-4 border-white shadow-xl" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

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

                    <section id="course-details" className="mesh-gradient-bg py-12">
                        <div className="container mx-auto">
                            <div className="reveal text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-100 transform-none">
                                    Detalhes do Curso
                                </h2>
                                <p className="text-xl text-muted-foreground opacity-100 transform-none">
                                    Tudo o que você precisa saber antes de começar
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {courseDetails.map((detail, idx) => (
                                    <div key={idx} style={{ opacity: 1, transform: "none" }}>
                                        <div className="reveal rounded-lg border bg-card text-card-foreground shadow-sm h-full opacity-100 transform-none">
                                            <div className="flex flex-col space-y-1.5 p-6">
                                                <h3 className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2">
                                                    <detail.icon className="text-primary h-5 w-5" />
                                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                                                        {detail.title}
                                                    </span>
                                                </h3>
                                            </div>
                                            <div className="p-6">
                                                <ul className="space-y-3">
                                                    {detail.items.map((item, itemIdx) => (
                                                        <li key={itemIdx} className="flex items-start gap-2">
                                                            <Check className="text-primary mt-1 flex-shrink-0 h-4 w-4" />
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                                {detail.note && (
                                                    <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                                                        <p className="text-sm font-medium flex items-center gap-2">
                                                            <detail.note.icon className="text-primary h-4 w-4" />
                                                            {detail.note.text}
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-center mt-10">
                                <div tabIndex={0}>
                                    <a href="#price"
                                        className="inline-flex items-center justify-center whitespace-nowrap sm:rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 btn-gradient">
                                        Quero Garantir Minha Vaga
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="pricing" className="mesh-gradient-bg py-12">
                        <div id="price" className="container mx-auto">
                            <div className="reveal text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-100 transform-none">
                                    Invista no seu futuro profissional
                                </h2>
                                <p className="mt-4 max-w-2xl mx-auto text-muted-foreground opacity-100 transform-none">
                                    Ao adquirir o curso, você terá acesso a todas as atualizações futuras sem custo adicional.
                                </p>
                            </div>
                            <div style={{ opacity: 1, transform: "none" }}>
                                <div className="reveal rounded-lg border bg-card text-card-foreground shadow-sm max-w-2xl mx-auto pricing-card opacity-100 transform-none">
                                    {(() => {
                                        const pricingDetails = {
                                            title: "PowerPoint - Slides Profissionais",
                                            originalPrice: 197.00,
                                            discountPrice: 14.39,
                                            installments: 5,
                                            cashPrice: 65.00,
                                            features: [
                                                {
                                                    icon: BookOpen,
                                                    text: "5 módulos completos com mais de 15 aulas práticas e detalhadas"
                                                },
                                                {
                                                    icon: Calendar,
                                                    text: "Acesso vitalício ao conteúdo e todas as atualizações futuras"
                                                },
                                                {
                                                    icon: Heart,
                                                    text: "Suporte personalizado por 30 dias para esclarecer dúvidas"
                                                },
                                                {
                                                    icon: Users,
                                                    text: "Acesso à comunidade exclusiva de alunos para networking"
                                                }
                                            ]
                                        };

                                        const updateCountdown = () => {
                                            const now = new Date().getTime();
                                            const countdownKey = 'countdownEndTime';
                                            let endTime = localStorage.getItem(countdownKey);

                                            if (!endTime || now >= parseInt(endTime)) {
                                                // Set new end time 5 days from now
                                                endTime = (now + (5 * 24 * 60 * 60 * 1000)).toString();
                                                localStorage.setItem(countdownKey, endTime);
                                            }

                                            const timeLeft = parseInt(endTime) - now;
                                            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
                                            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                                            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

                                            document.getElementById('days')!.innerHTML = days.toString();
                                            document.getElementById('hours')!.innerHTML = hours.toString();
                                            document.getElementById('minutes')!.innerHTML = minutes.toString();
                                            document.getElementById('seconds')!.innerHTML = seconds.toString();
                                        };

                                        // Start countdown on component mount
                                        setInterval(updateCountdown, 1000);

                                        return (
                                            <>
                                                <div className="flex flex-col space-y-1.5 p-6">
                                                    <h3 className="font-semibold tracking-tight text-2xl text-center">{pricingDetails.title}</h3>
                                                    <div className="cta-badge">Oferta por tempo limitado!</div>
                                                </div>
                                                <div className="p-6 space-y-6">
                                                    <div className="text-center">
                                                        <div className="flex items-center justify-center gap-4">
                                                            <span className="text-xl text-muted-foreground price-tag-original">
                                                                R$ {pricingDetails.originalPrice.toFixed(2)}
                                                            </span>
                                                            <span className="text-4xl font-bold text-primary">
                                                                R$ {pricingDetails.discountPrice.toFixed(2)}
                                                            </span>
                                                        </div>
                                                        <p className="text-sm text-muted-foreground mt-2">
                                                            até {pricingDetails.installments}x no cartão
                                                        </p>
                                                        <div className="mt-4 p-4 border border-primary/20 rounded-lg bg-primary/5">
                                                            <p className="font-medium text-lg text-center">
                                                                ou R$ {pricingDetails.cashPrice.toFixed(2)}
                                                            </p>
                                                            <p className="text-sm text-muted-foreground text-center mt-1">
                                                                Pagamento à vista
                                                            </p>
                                                        </div>
                                                        <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
                                                            <p className="text-sm font-semibold mb-2">Esta oferta expira em:</p>
                                                            <div className="flex justify-center gap-3" id="countdown">
                                                                <div className="flex flex-col items-center">
                                                                    <span className="text-xl font-bold" id="days">0</span>
                                                                    <span className="text-xs">Dias</span>
                                                                </div>
                                                                <div className="flex flex-col items-center">
                                                                    <span className="text-xl font-bold" id="hours">0</span>
                                                                    <span className="text-xs">Horas</span>
                                                                </div>
                                                                <div className="flex flex-col items-center">
                                                                    <span className="text-xl font-bold" id="minutes">0</span>
                                                                    <span className="text-xs">Min</span>
                                                                </div>
                                                                <div className="flex flex-col items-center">
                                                                    <span className="text-xl font-bold" id="seconds">0</span>
                                                                    <span className="text-xs">Seg</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full"></div>
                                                    <div className="space-y-4">
                                                        <h3>
                                                            <span className="font-semibold text-lg bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                                                                O que está incluído:
                                                            </span>
                                                        </h3>
                                                        <ul className="space-y-3">
                                                            {pricingDetails.features.map((feature, index) => (
                                                                <li key={index} className="flex items-start gap-3 opacity-100 transform-none">
                                                                    <feature.icon className="text-primary mt-1 flex-shrink-0 h-5 w-5" />
                                                                    <span>{feature.text}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="items-center p-6 pt-0 flex justify-center pb-8">
                                                    <div className="w-full md:w-auto" tabIndex={0}>
                                                        <a href="https://pay.hotmart.com/X100039750B" 
                                                           target="_blank" 
                                                           rel="noopener noreferrer"
                                                           onClick={() => window.fbq && window.fbq('track', 'InitiateCheckout')}>
                                                            <button className="inline-flex items-center justify-center whitespace-nowrap sm:rounded-lg font-medium text-lg ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 g-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 btn-gradient shine-effect">
                                                                Quero Comprar
                                                            </button>
                                                        </a>
                                                    </div>
                                                </div>
                                            </>
                                        );
                                    })()}
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="faq" className="mesh-gradient-bg py-12">
                        <div className="container mx-auto">
                            <div className="reveal text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-100 transform-none">
                                    FAQ – Perguntas Frequentes
                                </h2>
                                <p className="text-xl text-muted-foreground opacity-100 transform-none">
                                    Tire suas dúvidas sobre o curso
                                </p>
                            </div>
                            <div className="reveal max-w-3xl mx-auto space-y-4 opacity-100 transform-none">
                                {faqs.map((faq, idx) => (
                                    <div key={idx} style={{ opacity: 1, transform: "none" }}>
                                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden opacity-100 transform-none">
                                            <div className="flex flex-col space-y-1.5 p-6 cursor-pointer hover:bg-muted/50 transition-colors faq-question opacity-100 transform-none">
                                                <h3 className="font-semibold tracking-tight flex items-center justify-between text-lg">
                                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">{faq.question}</span>
                                                    <ChevronRight className="faq-icon h-5 w-5 text-muted-foreground" />
                                                </h3>
                                            </div>
                                            <div className="p-6 border-t faq-answer hidden opacity-100 transform-none">
                                                <p className="text-muted-foreground">{faq.answer}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="items-center pt-6 pt-0 flex justify-center">
                                <div className="w-full md:w-auto" tabIndex={0}>
                                    <a href="https://pay.hotmart.com/X100039750B" target="_blank" rel="noopener noreferrer"
                                        onClick={() => window.fbq && window.fbq('track', 'InitiateCheckout')}>
                                        <button
                                            className="inline-flex items-center justify-center whitespace-nowrap sm:rounded-lg font-medium text-lg ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 g-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 btn-gradient shine-effect">
                                            Quero Comprar
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                <footer>
                    <Footer />
                </footer>

            </div>
        </div>
    );
};

export default PowerPoint;