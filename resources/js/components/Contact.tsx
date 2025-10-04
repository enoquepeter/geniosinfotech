import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { useState, FormEvent } from "react";
import { useForm } from 'react-hook-form';

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  empresa: string;
  servico: string;
  mensagem: string;
}

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  
  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      // Make sure this URL matches your Laravel API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || ''
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (!response.ok) {
        // Handle validation errors
        if (response.status === 422 && result.errors) {
          const errorMessages = Object.values(result.errors).flat();
          throw new Error(errorMessages.join(', '));
        }
        throw new Error(result.message || 'Erro ao enviar mensagem');
      }

      setSuccess(true);
      reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      details: ["+258 87 809 5184", "+258 86 366 0084"],
      subtitle: "Ligue-nos a qualquer hora"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["geniosinfotech@gmail.com",],
      subtitle: "Resposta em 24h"
    },
    {
      icon: MapPin,
      title: "Localização",
      details: ["Chongoene, Xai-Xai, Moçambique"],
      subtitle: "Visite o nosso escritório"
    },
    {
      icon: Clock,
      title: "Horários",
      details: ["Seg - Sex: 9:00 - 18:00", "Sáb: 9:00 - 13:00"],
      subtitle: "Suporte 24/7 disponível"
    }
  ];

  return (
    <section id="contato" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-secondary/50 rounded-full px-4 py-2 border border-border/50 mb-6">
            <Send className="w-4 h-4 text-accent" />
            <span className="text-sm text-foreground/80">Contacto</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Vamos Conversar</span>
            <br />
            <span className="text-foreground">sobre o Seu Projeto</span>
          </h2>
          
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Estamos prontos para transformar as suas ideias em realidade. 
            Entre em contacto connosco e descubra como podemos ajudar.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gradient-accent">
                Informações de Contacto
              </h3>
              <p className="text-foreground/70">
                Entre em contacto através de qualquer um dos nossos canais. 
                A nossa equipa está sempre disponível para o ajudar.
              </p>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div 
                    key={info.title}
                    className="glass rounded-xl p-6 hover-glow animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent-gradient rounded-full flex items-center justify-center shadow-accent flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gradient-accent mb-1">
                          {info.title}
                        </h4>
                        <p className="text-xs text-foreground/60 mb-2">
                          {info.subtitle}
                        </p>
                        <div className="space-y-1">
                          {info.details.map((detail, detailIndex) => (
                            <p
                              key={detailIndex}
                              onClick={() => {
                                if (info.title === "Email") {
                                  window.location.href = `mailto:${detail}`;
                                } else if (info.title === "Telefone") {
                                  window.location.href = `tel:${detail}`;
                                }
                              }}
                              className={`text-sm text-foreground/80 ${info.title === 'Email' || info.title === 'Telefone' ? 'cursor-pointer hover:text-gradient-accent' : ''}`}>
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              <Button
                onClick={() => window.location.href = 'tel:+258878095184'}
                className="bg-primary-gradient hover-glow shadow-primary border-0 h-12">
                <Phone className="w-4 h-4 mr-2" />
                Ligar Agora
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.location.href = `mailto:${contactInfo[1].details[0]}`}
                className="glass border-accent/30 hover:border-accent/60 hover:bg-accent/10 h-12"
              >
                <Mail className="w-4 h-4 mr-2" />
                Enviar Email
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <div className="glass rounded-2xl p-8 shadow-glass">
              <h3 className="text-2xl font-bold text-gradient-primary mb-6">
                Envie-nos uma Mensagem
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground/70 mb-2">
                      Nome
                    </label>
                    <input 
                      type="text" 
                      {...register("nome", { required: true })}
                      className="w-full px-4 py-3 bg-secondary/50 border border-accent/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all duration-300"
                      placeholder="O seu nome"
                    />
                    {errors.nome && <p className="text-red-500 text-xs mt-1">Este campo é obrigatório</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground/70 mb-2">
                      Email
                    </label>
                    <input 
                      type="email" 
                      {...register("email", { required: true })}
                      className="w-full px-4 py-3 bg-secondary/50 border border-accent/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all duration-300"
                      placeholder="seu.email@exemplo.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">Este campo é obrigatório</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-2">
                    Telefone
                  </label>
                  <input 
                    type="tel" 
                    {...register("telefone", { required: true })}
                    className="w-full px-4 py-3 bg-secondary/50 border border-accent/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all duration-300"
                    placeholder="Seu número de telefone"
                  />
                  {errors.telefone && <p className="text-red-500 text-xs mt-1">Este campo é obrigatório</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-2">
                    Empresa (opcional)
                  </label>
                  <input 
                    type="text" 
                    {...register("empresa")}
                    className="w-full px-4 py-3 bg-secondary/50 border border-accent/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all duration-300"
                    placeholder="Nome da sua empresa"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-2">
                    Serviço de Interesse
                  </label>
                  <select
                    {...register("servico", { required: true })}
                    className="w-full px-4 py-3 bg-secondary/50 border border-accent/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all duration-300">
                    <option value="">Selecione um serviço</option>
                    <option value="Suporte Técnico">Suporte Técnico</option>
                    <option value="Desenvolvimento Web/Apps">Desenvolvimento Web/Apps</option>
                    <option value="Redes de Computadores">Redes de Computadores</option>
                    <option value="Marketing Digital">Marketing Digital</option>
                    <option value="Design Gráfico">Design Gráfico</option>
                    <option value="Cibersegurança">Cibersegurança</option>
                    <option value="Consultoria">Consultoria</option>
                    <option value="Formação">Formação</option>
                  </select>
                  {errors.servico && <p className="text-red-500 text-xs mt-1">Este campo é obrigatório</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-2">
                    Mensagem
                  </label>
                  <textarea 
                    rows={4}
                    {...register("mensagem", { required: true })}
                    className="w-full px-4 py-3 bg-secondary/50 border border-accent/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all duration-300 resize-none"
                    placeholder="Conte-nos sobre o seu projeto ou necessidades..."
                  ></textarea>
                  {errors.mensagem && <p className="text-red-500 text-xs mt-1">Este campo é obrigatório</p>}
                </div>

                <p className="text-xs text-center text-foreground/60">
                  Ao continuar voce concorda com nossos <a href="#" className="text-gradient-accent">termos de serviço</a> e <a href="#" className="text-gradient-accent">política de privacidade</a>.</p>

                <Button 
                  type="submit"
                  disabled={loading}
                  className="w-full bg-accent-gradient hover-glow shadow-accent border-0 h-12 group"
                >
                  {loading ? 'Enviando...' : 'Enviar Mensagem'}
                  {!loading && <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />}
                </Button>

                {error && (
                  <p className="text-red-500 text-sm text-center">{error}</p>
                )}

                {success && (
                  <p className="text-green-500 text-sm text-center">
                    Mensagem enviada com sucesso! Entraremos em contato em breve.
                  </p>
                )}
              </form>

              {/* Trust indicators */}
              <div className="mt-6 pt-6 border-t border-border/30">
                <div className="flex items-center justify-center space-x-6 text-xs text-foreground/60">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Resposta em 24h</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Orçamento gratuito</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Dados protegidos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;