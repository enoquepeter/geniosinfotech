import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-tech.jpg";
import { CheckCircle, Star, Clock, Users, Award, Play, Zap, Target, BookOpen, Download, TrendingUp } from "lucide-react";

interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const ExcelLanding = () => {
  const [countdown, setCountdown] = useState<CountdownState>({
    days: 7,
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
            {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Technology Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-background/60"></div>
      </div>
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/30 to-slate-900/80"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold px-6 py-2 text-lg">
              ⚡ OFERTA ESPECIAL - ÚLTIMAS VAGAS ⚡
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent leading-tight animate-fadeInUp">
              EXCEL: DO ZERO AO DASHBOARD
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto animate-fadeInUp">
              Domine o Excel Profissional em <strong className="text-yellow-400">30 Dias</strong> e
              Transforme sua Carreira com Dashboards Incríveis que Impressionam Qualquer Chefe
            </p>

            {/* Countdown Timer */}
            <div className="bg-red-600/20 border-2 border-red-500 rounded-lg p-6 mb-8 max-w-2xl mx-auto animate-fadeInUp">
              <h3 className="text-2xl font-bold text-red-400 mb-4">⏰ OFERTA TERMINA EM:</h3>
              <div className="grid grid-cols-4 gap-4 text-center">
                {[
                  { value: countdown.days, label: 'Dias' },
                  { value: countdown.hours, label: 'Horas' },
                  { value: countdown.minutes, label: 'Min' },
                  { value: countdown.seconds, label: 'Seg' }
                ].map((item, index) => (
                  <div key={index} className="bg-red-600 rounded-lg p-3">
                    <div className="text-3xl font-bold text-white">{item.value.toString().padStart(2, '0')}</div>
                    <div className="text-red-200 text-sm">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Section */}
            <div className="mb-8 animate-fadeInUp">
              <div className="text-center">
                <div className="text-gray-400 text-xl line-through mb-2">De R$ 497,00</div>
                <div className="text-5xl font-bold text-green-400 mb-2">R$ 147,00</div>
                <div className="text-yellow-400 text-lg">ou 12x de R$ 14,25</div>
                <div className="text-red-400 font-bold text-lg mt-2">🔥 70% DE DESCONTO 🔥</div>
              </div>
            </div>

            <div
              className="space-y-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-6 px-12 rounded-full text-xl shadow-2xl transform transition hover:scale-105 animate-pulse"
                onClick={() => window.open('https://hotmart.com/pt-br/marketplace/produtos/excel-do-zero-ao-dashboard', '_blank')}
              >
                🚀 QUERO DOMINAR O EXCEL AGORA! 🚀
              </Button>
              <p className="text-sm text-gray-400">✅ Acesso imediato • ✅ Certificado incluso • ✅ 30 dias de garantia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-yellow-400">15.000+</div>
              <div className="text-gray-300">Alunos Formados</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-yellow-400">4.9★</div>
              <div className="text-gray-300">Avaliação Média</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-yellow-400">30h</div>
              <div className="text-gray-300">de Conteúdo</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-yellow-400">100%</div>
              <div className="text-gray-300">Online</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problema" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-red-400">
            ❌ VOCÊ ESTÁ PERDENDO OPORTUNIDADES POR NÃO SABER EXCEL?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-red-900/20 border-red-500/50 p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-red-400 mb-4">😤 FRUSTRAÇÃO NO TRABALHO:</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Perder horas fazendo tarefas que poderiam ser automatizadas</li>
                  <li>• Ser sempre dependente do "cara do Excel" da empresa</li>
                  <li>• Não conseguir criar relatórios profissionais</li>
                  <li>• Ficar para trás nas promoções por não ter essa habilidade</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-red-900/20 border-red-500/50 p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-red-400 mb-4">💸 PREJUÍZO FINANCEIRO:</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Salários 30-50% menores por falta dessa skill</li>
                  <li>• Não conseguir freelances lucrativos</li>
                  <li>• Perder tempo = perder dinheiro</li>
                  <li>• Não se destacar em processos seletivos</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-2xl font-bold text-yellow-400 mb-4">
              📊 MAS E SE EU TE DISSESSE QUE ISSO PODE MUDAR EM 30 DIAS?
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-full"
              onClick={() => scrollToSection('solucao')}
            >
              QUERO VER A SOLUÇÃO! 👇
            </Button>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solucao" className="py-20 px-4 bg-gradient-to-br from-green-900/30 to-blue-900/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-green-400">
            ✅ A SOLUÇÃO DEFINITIVA PARA DOMINAR O EXCEL
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-yellow-400">
                🎯 MÉTODO COMPROVADO EM 4 ETAPAS:
              </h3>

              <div className="space-y-6">
                {[
                  {
                    icon: <BookOpen className="w-8 h-8 text-blue-400" />,
                    title: "1. FUNDAMENTOS SÓLIDOS",
                    desc: "Domine desde o básico até funções avançadas com metodologia passo-a-passo"
                  },
                  {
                    icon: <Zap className="w-8 h-8 text-yellow-400" />,
                    title: "2. AUTOMAÇÃO INTELIGENTE",
                    desc: "Aprenda a automatizar tarefas repetitivas e ganhe produtividade"
                  },
                  {
                    icon: <TrendingUp className="w-8 h-8 text-green-400" />,
                    title: "3. DASHBOARDS PROFISSIONAIS",
                    desc: "Crie visualizações impactantes que impressionam qualquer gestor"
                  },
                  {
                    icon: <Target className="w-8 h-8 text-purple-400" />,
                    title: "4. APLICAÇÃO PRÁTICA",
                    desc: "Projetos reais do mercado de trabalho para seu portfólio"
                  }
                ].map((step, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700"
                  >
                    {step.icon}
                    <div>
                      <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                      <p className="text-gray-300">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 p-8 rounded-2xl border-2 border-yellow-500/50">
                <h4 className="text-2xl font-bold text-yellow-400 mb-4">🏆 RESULTADO GARANTIDO:</h4>
                <div className="text-6xl mb-4">📊</div>
                <p className="text-xl mb-6 text-gray-300">
                  Em 30 dias você será capaz de criar dashboards profissionais que impressionam e
                  <strong className="text-green-400"> aumentam seu valor no mercado em até 50%!</strong>
                </p>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-full"
                  onClick={() => window.open('https://hotmart.com/pt-br/marketplace/produtos/excel-do-zero-ao-dashboard', '_blank')}
                >
                  QUERO ESSES RESULTADOS! 🚀
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section id="conteudo" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">
            📚 O QUE VOCÊ VAI APRENDER NO CURSO
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                module: "MÓDULO 1",
                title: "Fundamentos do Excel",
                lessons: [
                  "Interface e navegação",
                  "Formatação profissional",
                  "Fórmulas essenciais",
                  "Validação de dados"
                ],
                duration: "4h",
                icon: <BookOpen className="w-8 h-8" />
              },
              {
                module: "MÓDULO 2",
                title: "Funções Avançadas",
                lessons: [
                  "PROCV, PROCH e ÍNDICE",
                  "SE, SOMASE e CONT.SE",
                  "Funções de data e texto",
                  "Tabelas dinâmicas"
                ],
                duration: "6h",
                icon: <Zap className="w-8 h-8" />
              },
              {
                module: "MÓDULO 3",
                title: "Automatização",
                lessons: [
                  "Macros básicas",
                  "Botões de ação",
                  "Formulários interativos",
                  "Controles avançados"
                ],
                duration: "5h",
                icon: <Play className="w-8 h-8" />
              },
              {
                module: "MÓDULO 4",
                title: "Dashboards Profissionais",
                lessons: [
                  "Gráficos impactantes",
                  "KPIs e indicadores",
                  "Design e usabilidade",
                  "Interatividade avançada"
                ],
                duration: "8h",
                icon: <TrendingUp className="w-8 h-8" />
              },
              {
                module: "MÓDULO 5",
                title: "Projetos Reais",
                lessons: [
                  "Dashboard Financeiro",
                  "Controle de Vendas",
                  "Gestão de Estoque",
                  "Relatório Gerencial"
                ],
                duration: "5h",
                icon: <Target className="w-8 h-8" />
              },
              {
                module: "BÔNUS",
                title: "Extras Exclusivos",
                lessons: [
                  "Templates prontos",
                  "Planilhas de exercício",
                  "Certificado digital",
                  "Suporte por 6 meses"
                ],
                duration: "2h",
                icon: <Award className="w-8 h-8" />
              }
            ].map((module, index) => (
              <div
                key={index}
              >
                <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-blue-600 text-white">{module.module}</Badge>
                      <div className="flex items-center space-x-2 text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span>{module.duration}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 mb-4">
                      <div className="text-yellow-400">{module.icon}</div>
                      <h3 className="font-bold text-lg text-yellow-400">{module.title}</h3>
                    </div>

                    <ul className="space-y-2">
                      {module.lessons.map((lesson, lessonIndex) => (
                        <li key={lessonIndex} className="flex items-center space-x-2 text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-sm">{lesson}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 p-8 rounded-xl border-2 border-purple-500/50 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">🎁 BÔNUS ESPECIAIS INCLUSOS:</h3>
              <ul className="text-left space-y-2 text-gray-300 mb-6">
                <li>✅ 50+ Templates Profissionais Prontos (Valor: R$ 197)</li>
                <li>✅ E-book "100 Fórmulas Essenciais" (Valor: R$ 97)</li>
                <li>✅ Acesso ao Grupo VIP no Telegram (Valor: R$ 147)</li>
                <li>✅ 6 Meses de Suporte Direto (Valor: R$ 297)</li>
                <li>✅ Certificado de Conclusão (Valor: R$ 97)</li>
              </ul>
              <p className="font-bold text-xl text-yellow-400">Total em Bônus: R$ 835,00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-900/30 to-blue-900/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">
            💬 O QUE NOSSOS ALUNOS ESTÃO DIZENDO
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Silva",
                role: "Analista Financeira",
                rating: 5,
                text: "Consegui uma promoção 3 meses após terminar o curso! Os dashboards que aprendi a criar impressionaram minha chefe. Valeu cada centavo!",
                result: "Aumento de 40% no salário"
              },
              {
                name: "João Santos",
                role: "Gerente de Vendas",
                rating: 5,
                text: "Transformou completamente minha produtividade. Agora faço em 30 minutos o que antes levava 4 horas. Curso espetacular!",
                result: "90% mais produtivo"
              },
              {
                name: "Ana Costa",
                role: "Consultora Freelancer",
                rating: 5,
                text: "Comecei a oferecer serviços de dashboards e já faturei R$ 15.000 no primeiro mês. O curso se pagou 100 vezes!",
                result: "R$ 15k no 1º mês"
              }
            ].map((testimonial, index) => (
              <div
                key={index}
              >
                <Card className="bg-slate-800 border-slate-700 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>

                    <div className="border-t border-slate-700 pt-4">
                      <div className="font-bold text-white">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}</div>
                      <Badge className="mt-2 bg-green-600 text-white">{testimonial.result}</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-yellow-500/10 border-2 border-yellow-500/50 rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-yellow-400 mb-2">📈 RESULTADOS COMPROVADOS:</h3>
              <p className="text-gray-300">
                Nossos alunos relatam aumento médio de <strong className="text-green-400">35% no salário</strong> e
                <strong className="text-green-400"> 70% na produtividade</strong> após concluir o curso!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div
            className="bg-gradient-to-br from-green-600/20 to-green-800/20 p-12 rounded-2xl border-2 border-green-500"
          >
            <div className="text-8xl mb-6">🛡️</div>
            <h2 className="text-4xl font-bold mb-6 text-green-400">GARANTIA INCONDICIONAL DE 30 DIAS</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Experimente o curso por <strong className="text-green-400">30 dias completos</strong>.
              Se por qualquer motivo você não ficar 100% satisfeito, devolvemos
              <strong className="text-yellow-400"> TODO seu dinheiro</strong>, sem perguntas, sem burocracia!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="space-y-2">
                <div className="text-3xl">💯</div>
                <div className="font-bold">Risco Zero</div>
                <div className="text-sm text-gray-400">Garantia total</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl">⚡</div>
                <div className="font-bold">Reembolso Rápido</div>
                <div className="text-sm text-gray-400">Até 7 dias úteis</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl">🤝</div>
                <div className="font-bold">Sem Perguntas</div>
                <div className="text-sm text-gray-400">Processo simples</div>
              </div>
            </div>

            <p className="font-bold text-lg text-yellow-400">
              Você tem TUDO para ganhar e NADA para perder!
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-red-900/30 to-orange-900/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8 text-red-400">
            ⚠️ ÚLTIMAS VAGAS DISPONÍVEIS!
          </h2>

          <div className="bg-red-600/20 border-2 border-red-500 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-red-400 mb-4">🔥 OFERTA ESPECIAL EXPIRA EM:</h3>
            <div className="grid grid-cols-4 gap-4 text-center mb-6">
              {[
                { value: countdown.days, label: 'Dias' },
                { value: countdown.hours, label: 'Horas' },
                { value: countdown.minutes, label: 'Min' },
                { value: countdown.seconds, label: 'Seg' }
              ].map((item, index) => (
                <div key={index} className="bg-red-600 rounded-lg p-4">
                  <div className="text-4xl font-bold text-white">{item.value.toString().padStart(2, '0')}</div>
                  <div className="text-red-200">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="text-center mb-6">
              <div className="text-gray-400 text-2xl line-through mb-2">R$ 497,00</div>
              <div className="text-6xl font-bold text-green-400 mb-2">R$ 147,00</div>
              <div className="text-yellow-400 text-xl">12x de R$ 14,25</div>
            </div>
          </div>

          <div
            className="space-y-6"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-8 px-16 rounded-full text-2xl shadow-2xl transform transition hover:scale-105 animate-pulse"
              onClick={() => window.open('https://hotmart.com/pt-br/marketplace/produtos/excel-do-zero-ao-dashboard', '_blank')}
            >
              🚀 SIM! QUERO DOMINAR O EXCEL AGORA! 🚀
            </Button>

            <div className="space-y-2 text-gray-300">
              <p>✅ Acesso imediato após o pagamento</p>
              <p>✅ Certificado digital incluso</p>
              <p>✅ 30 dias de garantia incondicional</p>
              <p>✅ Suporte por 6 meses</p>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/50 rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-yellow-400 font-bold text-lg">
                💡 LEMBRE-SE: O custo de NÃO saber Excel é muito maior que o investimento no curso!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">
            ❓ PERGUNTAS FREQUENTES
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Preciso ter conhecimento prévio em Excel?",
                a: "Não! O curso foi desenvolvido para iniciantes completos. Começamos do zero e te levamos até o nível avançado gradualmente."
              },
              {
                q: "Por quanto tempo tenho acesso ao curso?",
                a: "O acesso é vitalício! Você pode assistir quantas vezes quiser, no seu próprio ritmo, para sempre."
              },
              {
                q: "Recebo certificado ao final?",
                a: "Sim! Você recebe um certificado digital de conclusão que pode usar no seu currículo e LinkedIn."
              },
              {
                q: "E se eu não conseguir aprender?",
                a: "Oferecemos suporte por 6 meses e garantia de 30 dias. Se não ficar satisfeito, devolvemos 100% do seu dinheiro."
              },
              {
                q: "O curso funciona em qualquer versão do Excel?",
                a: "Sim! O curso abrange Excel 2016, 2019, 2021 e Microsoft 365. Mostramos as diferenças quando necessário."
              },
              {
                q: "Posso parcelar o pagamento?",
                a: "Sim! Você pode parcelar em até 12x sem juros no cartão de crédito."
              }
            ].map((faq, index) => (
              <div
                key={index}
              >
                <Card className="bg-slate-800 border-slate-700">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-yellow-400 mb-3">{faq.q}</h3>
                    <p className="text-gray-300 leading-relaxed">{faq.a}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="py-12 px-4 bg-gradient-to-br from-slate-900 to-black text-center">
        <div className="container mx-auto max-w-2xl">
          <h3 className="text-2xl font-bold text-yellow-400 mb-4">
            🎯 NÃO PERCA ESTA OPORTUNIDADE ÚNICA!
          </h3>
          <p className="text-gray-300 mb-6">
            Milhares de profissionais já transformaram suas carreiras com nosso curso.
            Chegou a sua vez!
          </p>

          <Button
            size="lg"
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-6 px-12 rounded-full text-xl shadow-2xl transform transition hover:scale-105 mb-6"
            onClick={() => window.open('https://hotmart.com/pt-br/marketplace/produtos/excel-do-zero-ao-dashboard', '_blank')}
          >
            🚀 GARANTIR MINHA VAGA AGORA! 🚀
          </Button>

          <div className="text-sm text-gray-500 space-y-1">
            <p>© 2024 Gênios da Informática - Todos os direitos reservados</p>
            <p>CNPJ: XX.XXX.XXX/0001-XX | Suporte: contato@geniosdainformatica.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ExcelLanding;