import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ThemeToggle from '@/components/ThemeToggle';
import { Menu, X } from "lucide-react";
import Logo from '@/assets/logo.png';

const Header = () => {
  const menuItems = [
    { name: "Início", href: "/" },
    { name: "Serviços", href: "/servicos" },
    { name: "Cursos", href: "/cursos" },
    // { name: "Projetos", href: "/projetos" },
    // { name: "Blog", href: "/blog" },
    { name: "Sobre", href: "/sobre" },
    { name: "Contato", href: "/contato" }
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 w-full z-50 transition-smooth ${isScrolled
        ? "glass backdrop-blur-xl border-r-0 border-l-0 border-t-0 border-b border-border/50"
        : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to={'/'} className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-transparent rounded-full flex items-center justify-center shadow-glow">
              <img src={Logo} alt="Gênios da Informática" />
            </div>
            <span className="text-xl font-bold text-gradient-primary">
              Gênios da Informática
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-foreground/80 hover:text-accent transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-gradient group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-1">
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              <Link to="/contato" className="hidden md:block">
                <Button className="px-6 bg-accent-gradient rounded-full hover-glow border-0 shadow-accent">
                  Contactar
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 bg-secondary rounded-sm border hover:bg-secondary/ transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-foreground/80 hover:text-accent transition-colors duration-300 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/contato">
                <Button className="bg-accent-gradient hover-glow border-0 shadow-accent mt-4">
                  Contactar
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;