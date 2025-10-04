import { BookOpen, Calendar, Users, Heart } from "lucide-react";

const Pricing = () => {
    return (
        <>
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
                        <div className="reveal rounded-lg border max-w-2xl mx-auto pricing-card opacity-100 transform-none">
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
                                                //    onClick={() => window.fbq && window.fbq('track', 'InitiateCheckout')}
                                                >
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
        </>
    );
};

export default Pricing;