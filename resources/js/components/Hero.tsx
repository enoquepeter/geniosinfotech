import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Globe } from "lucide-react";
import heroImage from "@/assets/hero-tech.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center relative overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Technology Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-background/60"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-accent rounded-full opacity-60 float" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-primary rounded-full opacity-40 float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/3 left-1/5 w-3 h-3 bg-accent rounded-full opacity-50 float" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in max-md:mt-20">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-secondary rounded-full px-4 py-2 border border-border">
                <Zap className="w-4 h-4 text-accent" />
                <span className="text-sm text-foreground/80">Soluções Tecnológicas Avançadas</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <strong className="font-bold">
                  <span className="text-gradient-animated">Gênios da</span>
                <br />
                <span className="text-foreground">Informática</span>
                </strong>
              </h1>
              
              <p className="text-xl text-foreground/70 max-w-2xl leading-relaxed">
                Transformamos ideias em soluções digitais inovadoras. 
                Oferecemos serviços completos de TI, desde desenvolvimento 
                até cibersegurança, para empresas e particulares.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={() => window.location.href = '/servicos'}
                className="bg-primary-gradient hover-glow shadow-primary border-0 group"
              >
                Conhecer Serviços
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.location.href = '/contato'} 
                className="glass border-accent/30 hover:border-accent/60 hover:bg-accent/10"
              >
                Falar Connosco
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/30">
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient-primary">500+</div>
                <div className="text-sm text-foreground/60">Projetos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient-primary">98%</div>
                <div className="text-sm text-foreground/60">Satisfação</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient-primary">24/7</div>
                <div className="text-sm text-foreground/60">Suporte</div>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative animate-slide-in-right max-md:pb-20">
            <div className="relative">
              {/* Main Tech Card */}
              <div className="glass rounded-2xl p-8 shadow-glass hover-glow">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent-gradient rounded-xl flex items-center justify-center shadow-accent">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gradient-accent">Cibersegurança</h3>
                      <p className="text-foreground/60">Proteção 24/7</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm text-foreground/70">Monitorização SOC</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-foreground/70">Análise de Vulnerabilidades</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm text-foreground/70">Resposta a Incidentes</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -right-8 glass rounded-xl p-4 shadow-glass float" style={{ animationDelay: '1s' }}>
                <Globe className="w-8 h-8 text-accent" />
              </div>
              
              <div className="absolute -bottom-10 -left-8 glass rounded-xl p-4 shadow-glass float" style={{ animationDelay: '3s' }}>
                <div className="w-8 h-8 bg-primary-gradient rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;