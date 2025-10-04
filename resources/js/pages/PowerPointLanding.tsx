import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Clock, Users, Award, Play, Zap, Target, BookOpen, Download, TrendingUp, Presentation, Eye, Lightbulb } from "lucide-react";

{/* <script type="text/javascript">
	function importHotmart(){ 
 		var imported = document.createElement('script'); 
 		imported.src = 'https://static.hotmart.com/checkout/widget.min.js'; 
 		document.head.appendChild(imported); 
		var link = document.createElement('link'); 
		link.rel = 'stylesheet'; 
		link.type = 'text/css'; 
		link.href = 'https://static.hotmart.com/css/hotmart-fb.min.css'; 
		document.head.appendChild(link);	} 
 	importHotmart(); 
 </script> 
 <a onclick="return false;" href="https://pay.hotmart.com/X100039750B?checkoutMode=2" class="hotmart-fb hotmart__button-checkout"><img src='https://static.hotmart.com/img/btn-buy-green.png'></a>  */}

interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const hotmartLink = "https://pay.hotmart.com/X100039750B?bid=1686320730281";

const PowerPointLanding = () => {
  const [countdown, setCountdown] = useState<CountdownState>({
    days: 5,
    hours: 12,
    minutes: 47,
    seconds: 33
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-red-600/20"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold px-6 py-2 text-lg">
              ⚡ PROMOÇÃO IMPERDÍVEL - VAGAS LIMITADAS ⚡
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent leading-tight animate-fadeInUp">
              POWERPOINT: SLIDES PROFISSIONAIS
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto animate-fadeInUp">
              Domine a Arte de Criar <strong className="text-orange-400">Apresentações Impactantes</strong> que 
              Conquistam Audiências e Transformam sua Imagem Profissional
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
                <div className="text-gray-400 text-xl line-through mb-2">De R$ 127,00</div>
                <div className="text-5xl font-bold text-green-400 mb-2">R$ 65,00</div>
                <div className="text-yellow-400 text-lg">ou 12x de R$ 14,39</div>
                <div className="text-red-400 font-bold text-lg mt-2">🔥 68% DE DESCONTO 🔥</div>
              </div>
            </div>

            <div className="space-y-4 animate-fadeInUp">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-6 px-12 rounded-full text-xl shadow-2xl transform transition hover:scale-105 animate-pulse"
                onClick={() => window.open(`${hotmartLink}`, '_blank')}
              >
                🎯 QUERO CRIAR SLIDES INCRÍVEIS! 🎯
              </Button>
              <p className="text-sm text-gray-400">✅ Acesso imediato • ✅ Certificado incluso • ✅ 30 dias de garantia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-gradient-to-r from-orange-900/50 to-red-900/50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-orange-400">12.500+</div>
              <div className="text-gray-300">Profissionais Formados</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-orange-400">4.8★</div>
              <div className="text-gray-300">Avaliação dos Alunos</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-orange-400">25h</div>
              <div className="text-gray-300">de Conteúdo Prático</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-orange-400">150+</div>
              <div className="text-gray-300">Templates Inclusos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problema" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-red-400">
            ❌ SUAS APRESENTAÇÕES ESTÃO SABOTANDO SEU SUCESSO?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-red-900/20 border-red-500/50 p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-red-400 mb-4">😰 VERGONHA PROFISSIONAL:</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Slides amadores que fazem você parecer despreparado</li>
                  <li>• Apresentações que fazem a audiência dormir</li>
                  <li>• Perder credibilidade por design ruim</li>
                  <li>• Não conseguir transmitir suas ideias com clareza</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-red-900/20 border-red-500/50 p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-red-400 mb-4">💼 OPORTUNIDADES PERDIDAS:</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Perder vendas por apresentações fracas</li>
                  <li>• Não conseguir aprovar projetos importantes</li>
                  <li>• Ser ignorado em reuniões executivas</li>
                  <li>• Ficar para trás por não saber se comunicar</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-2xl font-bold text-orange-400 mb-4">
              🎯 E SE VOCÊ PUDESSE IMPRESSIONAR EM CADA APRESENTAÇÃO?
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-4 px-8 rounded-full"
              onClick={() => scrollToSection('solucao')}
            >
              QUERO VER COMO! 👇
            </Button>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solucao" className="py-20 px-4 bg-gradient-to-br from-orange-900/30 to-red-900/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-orange-400">
            ✅ O MÉTODO DEFINITIVO PARA SLIDES PROFISSIONAIS
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-orange-400">
                🎯 SISTEMA COMPROVADO EM 5 PASSOS:
              </h3>
              
              <div className="space-y-6">
                {[
                  {
                    icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
                    title: "1. DESIGN PROFISSIONAL",
                    desc: "Aprenda os princípios de design que fazem slides impactantes e memoráveis"
                  },
                  {
                    icon: <Presentation className="w-8 h-8 text-blue-400" />,
                    title: "2. ESTRUTURAÇÃO EFICAZ", 
                    desc: "Organize suas ideias de forma clara e persuasiva que engaja a audiência"
                  },
                  {
                    icon: <Eye className="w-8 h-8 text-green-400" />,
                    title: "3. ELEMENTOS VISUAIS",
                    desc: "Domine gráficos, imagens e animações que prendem a atenção"
                  },
                  {
                    icon: <Zap className="w-8 h-8 text-purple-400" />,
                    title: "4. APRESENTAÇÃO MAGISTRAL",
                    desc: "Técnicas de oratória e presença de palco que conquistam qualquer plateia"
                  },
                  {
                    icon: <Target className="w-8 h-8 text-red-400" />,
                    title: "5. TEMPLATES EXCLUSIVOS",
                    desc: "Acesso a 150+ modelos prontos para qualquer situação profissional"
                  }
                ].map((step, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700 animate-fadeInUp">
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
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 p-8 rounded-2xl border-2 border-orange-500/50">
                <h4 className="text-2xl font-bold text-orange-400 mb-4">🏆 TRANSFORMAÇÃO GARANTIDA:</h4>
                <div className="text-6xl mb-4">🎯</div>
                <p className="text-xl mb-6 text-gray-300">
                  Em apenas 21 dias você estará criando apresentações que impressionam e 
                  <strong className="text-green-400"> aumentam sua autoridade profissional em 200%!</strong>
                </p>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-4 px-8 rounded-full"
                  onClick={() => window.open(`${hotmartLink}`, '_blank')}
                >
                  QUERO ESSA TRANSFORMAÇÃO! 🚀
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section id="conteudo" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-orange-400">
            📚 CONTEÚDO COMPLETO DO CURSO
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                module: "MÓDULO 1",
                title: "Fundamentos do Design",
                lessons: [
                  "Princípios do design visual",
                  "Paleta de cores profissional", 
                  "Tipografia e hierarquia",
                  "Layout e composição"
                ],
                duration: "4h",
                icon: <BookOpen className="w-8 h-8" />
              },
              {
                module: "MÓDULO 2", 
                title: "Slides que Vendem",
                lessons: [
                  "Estrutura persuasiva",
                  "Storytelling visual",
                  "Call-to-action eficaz",
                  "Técnicas de persuasão"
                ],
                duration: "5h",
                icon: <TrendingUp className="w-8 h-8" />
              },
              {
                module: "MÓDULO 3",
                title: "Recursos Avançados",
                lessons: [
                  "Animações profissionais",
                  "Transições impactantes",
                  "Gráficos e infográficos",
                  "Vídeos e multimídia"
                ],
                duration: "6h", 
                icon: <Play className="w-8 h-8" />
              },
              {
                module: "MÓDULO 4",
                title: "Apresentação Magistral", 
                lessons: [
                  "Técnicas de oratória",
                  "Linguagem corporal",
                  "Controle do nervosismo",
                  "Interação com audiência"
                ],
                duration: "5h",
                icon: <Users className="w-8 h-8" />
              },
              {
                module: "MÓDULO 5",
                title: "Templates Exclusivos",
                lessons: [
                  "150+ modelos profissionais",
                  "Slides para vendas", 
                  "Apresentações corporativas",
                  "Pitches de negócios"
                ],
                duration: "3h",
                icon: <Download className="w-8 h-8" />
              },
              {
                module: "BÔNUS",
                title: "Extras Especiais",
                lessons: [
                  "Banco de imagens premium",
                  "Ícones profissionais",
                  "Certificado reconhecido",
                  "Grupo VIP de networking"
                ],
                duration: "2h",
                icon: <Award className="w-8 h-8" />
              }
            ].map((module, index) => (
              <div key={index} className="animate-fadeInUp">
                <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-orange-600 text-white">{module.module}</Badge>
                      <div className="flex items-center space-x-2 text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span>{module.duration}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="text-orange-400">{module.icon}</div>
                      <h3 className="font-bold text-lg text-orange-400">{module.title}</h3>
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
            <div className="bg-gradient-to-r from-purple-600/20 to-orange-600/20 p-8 rounded-xl border-2 border-purple-500/50 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">🎁 BÔNUS EXCLUSIVOS INCLUSOS:</h3>
              <ul className="text-left space-y-2 text-gray-300 mb-6">
                <li>✅ 150+ Templates Premium Prontos (Valor: R$ 247)</li>
                <li>✅ Banco de 5000+ Imagens Profissionais (Valor: R$ 197)</li>  
                <li>✅ Pack de Ícones Exclusivos (Valor: R$ 97)</li>
                <li>✅ Grupo VIP de Networking (Valor: R$ 197)</li>
                <li>✅ Suporte Direto por 6 Meses (Valor: R$ 397)</li>
              </ul>
              <p className="font-bold text-xl text-yellow-400">Total em Bônus: R$ 1.135,00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-900/30 to-orange-900/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-orange-400">
            💬 TRANSFORMAÇÕES REAIS DOS NOSSOS ALUNOS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Carlos Eduardo",
                role: "Diretor Comercial",
                rating: 5,
                text: "Minhas apresentações viraram o jogo! Fechei 3 grandes contratos no primeiro mês após o curso. O investimento se pagou 50 vezes!",
                result: "300% mais vendas"
              },
              {
                name: "Fernanda Lima", 
                role: "Consultora Empresarial",
                rating: 5,
                text: "Agora sou conhecida como a 'rainha das apresentações' na empresa. Consegui uma promoção para gerência em 2 meses!",
                result: "Promoção + 60% salário"
              },
              {
                name: "Roberto Silva",
                role: "Empreendedor",
                rating: 5, 
                text: "Captei R$ 500mil de investimento com uma apresentação incrível que criei com as técnicas do curso. Transformou meu negócio!",
                result: "R$ 500k captados"
              }
            ].map((testimonial, index) => (
              <div key={index} className="animate-fadeInUp">
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
            <div className="bg-orange-500/10 border-2 border-orange-500/50 rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-orange-400 mb-2">📈 RESULTADOS COMPROVADOS:</h3>
              <p className="text-gray-300">
                Nossos alunos relatam aumento médio de <strong className="text-green-400">150% na eficácia</strong> das apresentações e 
                <strong className="text-green-400"> 80% mais confiança</strong> ao apresentar!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 p-12 rounded-2xl border-2 border-green-500 animate-fadeInUp">
            <div className="text-8xl mb-6">🛡️</div>
            <h2 className="text-4xl font-bold mb-6 text-green-400">GARANTIA BLINDADA DE 30 DIAS</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Teste o curso por <strong className="text-green-400">30 dias completos</strong>. 
              Se não criar apresentações incríveis, devolvemos 
              <strong className="text-yellow-400"> 100% do seu investimento</strong>, sem perguntas!
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
                <div className="font-bold">Sem Burocracia</div>
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
            🔥 ÚLTIMAS HORAS DA PROMOÇÃO!
          </h2>
          
          <div className="bg-red-600/20 border-2 border-red-500 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-red-400 mb-4">⏰ OFERTA EXPIRA EM:</h3>
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
              <div className="text-gray-400 text-2xl line-through mb-2">R$ 127,00</div>
              <div className="text-6xl font-bold text-green-400 mb-2">R$ 65,00</div>
              <div className="text-yellow-400 text-xl">12x de R$ 14,39</div>
            </div>
          </div>

          <div className="space-y-6 animate-fadeInUp">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-8 px-16 rounded-full text-2xl shadow-2xl transform transition hover:scale-105 animate-pulse"
              onClick={() => window.open(`${hotmartLink}`, '_blank')}
            >
              🎯 SIM! QUERO SLIDES PROFISSIONAIS AGORA! 🎯
            </Button>
            
            <div className="space-y-2 text-gray-300">
              <p>✅ Acesso imediato após o pagamento</p>
              <p>✅ 150+ templates premium inclusos</p>
              <p>✅ 30 dias de garantia incondicional</p>
              <p>✅ Suporte especializado por 6 meses</p>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/50 rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-yellow-400 font-bold text-lg">
                💡 LEMBRE-SE: Suas apresentações são seu cartão de visitas profissional!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-orange-400">
            ❓ PERGUNTAS MAIS FREQUENTES
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Funciona para qualquer versão do PowerPoint?",
                a: "Sim! O curso funciona perfeitamente no PowerPoint 2016, 2019, 2021, Microsoft 365 e até no Google Slides. Adaptamos as técnicas para cada plataforma."
              },
              {
                q: "Preciso ter conhecimento avançado?",
                a: "Não! Começamos do básico e evoluímos gradualmente. Se você sabe fazer slides simples, já tem o suficiente para começar."
              },
              {
                q: "Os templates funcionam em Mac e PC?",
                a: "Sim! Todos os 150+ templates são compatíveis com Windows, Mac e versões online do PowerPoint."
              },
              {
                q: "Quanto tempo para ver resultados?",
                a: "A maioria dos alunos já cria apresentações impressionantes na primeira semana. Em 21 dias você dominará completamente."
              },
              {
                q: "Serve para qualquer área profissional?",
                a: "Absolutamente! As técnicas funcionam para vendas, educação, medicina, engenharia, consultoria - qualquer área que precise apresentar."
              },
              {
                q: "E se eu não conseguir aprender?",
                a: "Oferecemos suporte completo por 6 meses e garantia de 30 dias. Se não ficar satisfeito, devolvemos todo o dinheiro."
              }
            ].map((faq, index) => (
              <div key={index} className="animate-fadeInUp">
                <Card className="bg-slate-800 border-slate-700">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-orange-400 mb-3">{faq.q}</h3>
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
          <h3 className="text-2xl font-bold text-orange-400 mb-4">
            🎯 SUA PRÓXIMA APRESENTAÇÃO PODE MUDAR SUA CARREIRA!
          </h3>
          <p className="text-gray-300 mb-6">
            Junte-se a milhares de profissionais que já transformaram suas apresentações. 
            Não perca esta oportunidade única!
          </p>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-6 px-12 rounded-full text-xl shadow-2xl transform transition hover:scale-105 mb-6"
            onClick={() => window.open(`${hotmartLink}`, '_blank')}
          >
            🎯 GARANTIR MINHA TRANSFORMAÇÃO! 🎯
          </Button>

          <div className="text-sm text-gray-500 space-y-1">
            <p>&copy; {new Date().getFullYear()} Gênios da Informática - Todos os direitos reservados</p>
            <p>Suporte: geniosinfotech@gmail.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PowerPointLanding;