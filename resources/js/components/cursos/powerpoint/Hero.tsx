import { useEffect, useRef } from "react";
import slide1 from "@/assets/Slide 1.jpg";
import slide2 from "@/assets/Slide 2.jpg";
import slide3 from "@/assets/Slide 3.jpg";
import slide4 from "@/assets/Slide 4.jpg";

const slides = [slide1, slide2, slide3, slide4, slide1, slide2, slide3, slide4];

const Hero = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let scrollPos = 0;
        const scrollSpeed = 0.3;

        const animate = () => {
            scrollPos += scrollSpeed;
            if (scrollPos >= scrollContainer.scrollWidth / 2) {
                scrollPos = 0;
            }
            scrollContainer.scrollLeft = scrollPos;
            requestAnimationFrame(animate);
        };

        const animationId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationId);
    }, []);


    // const scrollToBenefits = () => {
    //     document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' });
    // };

    // const scrollToCTA = () => {
    //     document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
    // };

    return (
        <section className=" px-4 md:px-6 min-h-screen hero-pattern flex flex-col items-center text-center space-y-4">
            <div
                ref={scrollRef}
                className="absolute flex overflow-x-hidden w-full h-full opacity-20 dark:opacity-10"
            >
                <div className="flex animate-slide">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 h-full w-auto"
                        >
                            <img
                                src={slide}
                                alt=""
                                className="w-full h-full object-cover opacity-20"
                            />

                        </div>
                    ))}
                </div>
            </div>

            <div className="mx-auto relative z-10 pt-20 md:pt-32">
                <div className="opacity-100 transform-none">
                    <h1 className="text-4xl md:text-6xl max-w-3xl font-bold tracking-tight bg-clip-text mb-4 hero-title">
                        Transforme suas apresentações em obras de arte profissionais
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                        Domine as técnicas avançadas do PowerPoint e destaque-se em apresentações profissionais, acadêmicas ou pessoais.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-8 opacity-100 transform-none justify-center">
                    <a
                        href="https://pay.hotmart.com/X100039750B"
                        target="_blank"
                        rel="noopener noreferrer"
                    // onClick={() => window.fbq && window.fbq('track', 'InitiateCheckout')}
                    >
                        <button
                            className="inline-flex items-center justify-center whitespace-nowrap font-medium text-lg ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-12 rounded-full px-8 btn-gradient shine-effect"
                        >
                            Comprar Agora
                        </button>
                    </a>
                    <a href="#content">
                        <button
                            className="inline-flex items-center justify-center whitespace-nowrap font-medium text-lg ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-12 rounded-full px-8"
                        >
                            Ver conteúdo do curso
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;