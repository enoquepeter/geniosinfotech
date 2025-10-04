import { ChevronRight } from "lucide-react";

const FAQ = () => {
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
        <>
            <section id="faq" className="py-12 faq-section">
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
                    <div className="items-center pt-6. flex justify-center">
                        <div className="w-full md:w-auto" tabIndex={0}>
                            <a href="https://pay.hotmart.com/X100039750B" target="_blank" rel="noopener noreferrer"
                            // onClick={() => window.fbq && window.fbq('track', 'InitiateCheckout')}
                            >
                                <button
                                    className="inline-flex items-center justify-center whitespace-nowrap sm:rounded-lg font-medium text-lg ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 g-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 btn-gradient shine-effect">
                                    Quero Comprar
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FAQ;