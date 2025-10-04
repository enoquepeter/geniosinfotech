import { Code, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, Github, Youtube } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  // Newsletter states
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterLoading, setNewsletterLoading] = useState(false);
  const [newsletterMessage, setNewsletterMessage] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  // Newsletter submit handler
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterLoading(true);
    setNewsletterMessage('');
    setNewsletterSuccess(false);

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || ''
        },
        body: JSON.stringify({ email: newsletterEmail })
      });

      const result = await response.json();

      if (!response.ok) {
        // Handle validation errors
        if (response.status === 422 && result.errors) {
          const errorMessages = Object.values(result.errors).flat();
          throw new Error(errorMessages.join(', '));
        }
        throw new Error(result.message || 'Erro ao subscrever newsletter');
      }

      setNewsletterSuccess(true);
      setNewsletterMessage(result.message);
      setNewsletterEmail('');
    } catch (err) {
      setNewsletterSuccess(false);
      setNewsletterMessage(err instanceof Error ? err.message : 'Ocorreu um erro ao subscrever. Tente novamente.');
    } finally {
      setNewsletterLoading(false);
    }
  };
  const services = [
    "Suporte Técnico",
    "Desenvolvimento Web",
    "Redes de Computadores", 
    "Marketing Digital",
    "Design Gráfico",
    "Cibersegurança",
    "Consultoria",
    "Formação"
  ];

  const quickLinks = [
    { name: "Sobre Nós", href: "#sobre" },
    { name: "Serviços", href: "#servicos" },
    { name: "Contacto", href: "#contato" },
    { name: "Política de Privacidade", href: "privacidade" },
    { name: "Termos de Serviço", href: "termos" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61556298930351", label: "Facebook" },
    { icon: Youtube, href: "https://www.youtube.com/@geniosdeinformatica", label: "YouTube" },
    { icon: Instagram, href: "https://www.instagram.com/geniosinfotech/", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/g%C3%AAnios-da-inform%C3%A1tica-641265360?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/geniosinfotech", label: "GitHub" },
    // { icon: Twitter, href: "https://twitter.com/geniosinformatica", label: "Twitter" }
  ];

  return (
    <footer className="relative pt-24 pb-8">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/80"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-transparent rounded-lg flex items-center justify-center shadow-glow">
              <img src="../../logo.png" alt="Gênios da Informática" />
            </div>
              <span className="text-xl font-bold text-gradient-primary">
                Gênios da Informática
              </span>
            </div>
            
            <p className="text-foreground/70 text-sm leading-relaxed">
              Especialistas em soluções tecnológicas inovadoras. 
              Transformamos ideias em realidade digital com qualidade 
              e excelência.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-sm text-foreground/70">+258 87 809 5184</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-sm text-foreground/70">geniosinfotech@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5" />
                <span className="text-sm text-foreground/70">
                  Muhetane, Chongoene<br />
                  Xai-Xai, Moçambique
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gradient-accent">
              Nossos Serviços
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a 
                    href="#servicos" 
                    className="text-sm text-foreground/70 hover:text-accent transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <div className="w-1 h-1 bg-accent rounded-full group-hover:w-2 transition-all duration-300"></div>
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gradient-accent">
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-sm text-foreground/70 hover:text-accent transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <div className="w-1 h-1 bg-accent rounded-full group-hover:w-2 transition-all duration-300"></div>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gradient-accent">
              Mantenha-se Atualizado
            </h3>
            
            <p className="text-sm text-foreground/70">
              Subscreva a nossa newsletter para receber as últimas 
              novidades em tecnologia.
            </p>

            {/* Newsletter Form */}
            <div className="space-y-3">
              <form onSubmit={handleNewsletterSubmit} className="flex">
                <input 
                  type="email" 
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Seu email"
                  required
                  className="flex-1 px-4 py-2 bg-secondary border border-border rounded-l-full focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all duration-300 text-sm"
                />
                <button 
                  type="submit"
                  disabled={newsletterLoading}
                  className="px-4 py-2 bg-accent-gradient rounded-r-full text-white text-sm hover:shadow-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {newsletterLoading ? 'A subscrever...' : 'Subscrever'}
                </button>
              </form>
              
              {newsletterMessage && (
                <p className={`text-xs ${newsletterSuccess ? 'text-green-500' : 'text-red-500'}`}>
                  {newsletterMessage}
                </p>
              )}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-medium text-foreground/80 mb-3">
                Siga-nos
              </h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      target="_blank" rel="noopener noreferrer"
                      className="w-9 h-9 bg-secondary rounded-full border border-border flex items-center justify-center hover:bg-accent-gradient hover:shadow-glow transition-all duration-300 group"
                    >
                      <Icon className="w-4 h-4 text-foreground/60 group-hover:text-white" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30">
          <div className="flex flex-col justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-foreground/60 text-center">
              &copy; {new Date().getFullYear()} Gênios da Informática. Todos os direitos reservados.
            </div>
            
            {/* <div className="flex items-center space-x-6 text-sm text-foreground/60">
              <span>Certificado ISO 27001</span>
              <div className="w-1 h-1 bg-foreground/30 rounded-full"></div>
              <span>GDPR Compliant</span>
              <div className="w-1 h-1 bg-foreground/30 rounded-full"></div>
              <span>Suporte 24/7</span>
            </div> */}
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
    </footer>
  );
};

export default Footer;