const Hero = () => {
    return (
        <>
            <section className="container py-20 md:py-28 mt-10  px-4 md:px-6 hero-pattern flex flex-col items-center text-center space-y-4">
                <div className="opacity-100 transform-none">
                    <h1 className="text-4xl md:text-6xl max-w-3xl font-bold tracking-tight text-transparent bg-clip-text mb-4 hero-title">
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
            </section>
        </>
    );
};

export default Hero;