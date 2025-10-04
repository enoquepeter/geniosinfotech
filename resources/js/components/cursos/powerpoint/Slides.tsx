import slide1 from "@/assets/Slide 1.jpg";
import slide2 from "@/assets/Slide 2.jpg";
import slide3 from "@/assets/Slide 3.jpg";
import slide4 from "@/assets/Slide 4.jpg";
import slide5 from "@/assets/Slide 5.jpg";
import slide6 from "@/assets/Slide 6.jpg";
import slide7 from "@/assets/Slide 7.jpg";
import slide8 from "@/assets/Slide 8.jpg";

const Slides = () => {
    const slidesRow1 = [slide1, slide2, slide3, slide4];
    const slidesRow2 = [slide5, slide6, slide7, slide8];

    return (
        <>
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

                    <div className="mt-12 overflow-hidden">
                        <div className="space-y-8">
                            {/* Linha 1: deslizando para a esquerda */}
                            <div className="reveal slider-row">
                                <div className="flex gap-6 justify-center flex-no-wrap slider-track">
                                    {[...slidesRow1, ...slidesRow1].map((img, idx) => (
                                        <div key={`row1-${idx}`} className="h-auto min-w[200px] w-[200px] md:w-[280px] rounded-lg overflow-hidden shadow-lg bg-card opacity-100 transform-none">
                                            <img src={img} alt={`Slide example ${idx % slidesRow1.length + 1}`} className="w-full h-auto rounded-lg border-4 border-white shadow-xl" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Linha 2: deslizando para a direita */}
                            <div className="reveal slider-row">
                                <div className="flex gap-6 justify-center flex-no-wrap slider-reverse">
                                    {[...slidesRow2, ...slidesRow2].map((img, idx) => (
                                        <div key={`row2-${idx}`} className="h-auto min-w[200px] w-[200px] md:w-[280px] rounded-lg overflow-hidden shadow-lg bg-card opacity-100 transform-none">
                                            <img src={img} alt={`Slide example ${idx % slidesRow2.length + 5}`} className="w-full h-auto rounded-lg border-4 border-white shadow-xl" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Slides;