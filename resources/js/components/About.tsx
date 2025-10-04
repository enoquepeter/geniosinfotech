import { CheckCircle, Users, Award, Clock } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Clientes Satisfeitos" },
    { icon: Award, value: "98%", label: "Taxa de Sucesso" },
    { icon: Clock, value: "24/7", label: "Suporte Disponível" },
    { icon: CheckCircle, value: "1000+", label: "Projetos Concluídos" }
  ];

  const values = [
    {
      title: "Inovação",
      description: "Utilizamos as tecnologias mais avançadas para criar soluções inovadoras."
    },
    {
      title: "Qualidade",
      description: "Compromisso com a excelência em todos os nossos projetos e serviços."
    },
    {
      title: "Confiança",
      description: "Construímos relações duradouras baseadas na transparência e confiança."
    },
    {
      title: "Suporte",
      description: "Acompanhamos os nossos clientes em todas as fases dos projetos."
    }
  ];

  return (
    <section id="sobre" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-secondary/50 rounded-full px-4 py-2 border border-border/50">
                <Users className="w-4 h-4 text-accent" />
                <span className="text-sm text-foreground/80">Sobre Nós</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-gradient-primary">Especialistas</span>
                <br />
                <span className="text-foreground">em Tecnologia</span>
              </h2>

              <div className="space-y-4 text-foreground/70 leading-relaxed">
                <p>
                  A <strong className="text-gradient-accent">Gênios da Informática</strong> é uma
                  empresa especializada em soluções tecnológicas inovadoras, dedicada a transformar
                  a forma como empresas e particulares interagem com a tecnologia.
                </p>

                <p>
                  Com anos de experiência no mercado, oferecemos uma gama completa de serviços
                  que abrange desde o desenvolvimento de software até à implementação de sistemas
                  de cibersegurança avançados.
                </p>

                <p>
                  A nossa missão é democratizar o acesso às tecnologias mais avançadas,
                  fornecendo soluções personalizadas que impulsionam o crescimento e
                  a eficiência dos nossos clientes.
                </p>
              </div>
            </div>

            {/* Values */}
            {/* <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="glass rounded-xl p-4 hover-glow animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h4 className="font-semibold text-gradient-accent mb-2">{value.title}</h4>
                  <p className="text-sm text-foreground/60">{value.description}</p>
                </div>
              ))}
            </div> */}
          </div>

          {/* Stats & Visual */}
          <div className="space-y-8 animate-slide-in-right">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="glass rounded-2xl p-6 text-center hover-glow animate-scale-in"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="w-12 h-12 bg-accent-gradient rounded-xl flex items-center justify-center shadow-accent mx-auto mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gradient-primary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-foreground/60">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Achievement Card */}
            {/* <div className="glass rounded-2xl p-8 shadow-glass">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-primary-gradient rounded-2xl flex items-center justify-center shadow-primary mx-auto">
                  <Award className="w-8 h-8 text-white" />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gradient-primary mb-2">
                    Certificações e Parcerias
                  </h3>
                  <p className="text-foreground/70 text-sm">
                    Certificados pelas principais tecnologias e em parceria 
                    com líderes de mercado para garantir as melhores soluções.
                  </p>
                </div>

                <div className="flex justify-center space-x-4">
                  <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                    <span className="text-xs font-bold text-accent">MS</span>
                  </div>
                  <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                    <span className="text-xs font-bold text-accent">AWS</span>
                  </div>
                  <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                    <span className="text-xs font-bold text-accent">ISO</span>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        {/* Values */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 md:mt-10">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="glass rounded-xl p-4 hover-glow animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h4 className="font-semibold text-gradient-accent mb-2">{value.title}</h4>
              <p className="text-sm text-foreground/60">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;