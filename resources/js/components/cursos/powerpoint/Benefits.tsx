import benefitsImg from "@/assets/CCaKcj2Eyr4xPFF3yxAA4QDGery3gXQ4.png";
import { Check } from "lucide-react";

const Benefits = () => {

    const benefits = [
        "Crie slides profissionais em metade do tempo habitual",
        "Destaque-se em apresentações decisivas para sua carreira",
        "Transforme ideias complexas em mensagens claras e impactantes",
        "Domine técnicas exclusivas usadas por designers profissionais",
        "Aumente sua confiança e autoridade ao apresentar para qualquer público",
        "Economize centenas de horas com nossos templates e atalhos exclusivos",
        "Aplique o conhecimento imediatamente e veja resultados desde a primeira aula",
    ];

    return (
        <>
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
                                        <Check className="mt-1 flex-shrink-0 benefit-check" size={24} />
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Benefits;