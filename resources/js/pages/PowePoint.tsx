import { Helmet } from "react-helmet";
import { useEffect } from "react";
import Header from "@/components/Header.tsx"
import Footer from "@/components/Footer.tsx"
import Hero from "@/components/cursos/powerpoint/Hero"
import Benefits from "@/components/cursos/powerpoint/Benefits";
import Slides from "@/components/cursos/powerpoint/Slides";
import Modules from "@/components/cursos/powerpoint/Modules";
import Pricing from "@/components/cursos/powerpoint/Pricing";
import FAQ from "@/components/cursos/powerpoint/FAQ";

const PowerPoint = () => {
    const meta = ({
        title: "PowerPoint - Slides Profissionais",
        description: "Transforme suas apresentações em obras de arte profissionais",
        image: "",
        url: "https://geniosdainformatica.wuaze.com",
    });

    // Adiciona a classe do tema PowerPoint ao elemento root
    useEffect(() => {
        document.documentElement.classList.add('powerpoint-theme');
        return () => {
            document.documentElement.classList.remove('powerpoint-theme');
        };
    }, []);

    // useEffect(() => {
    //     // Meta Pixel Code
    //     !(function (f, b, e, v, n, t, s) {
    //         if (f.fbq) return;
    //         n = f.fbq = function () {
    //             n.callMethod ?
    //                 n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    //         };
    //         if (!f._fbq) f._fbq = n;
    //         n.push = n;
    //         n.loaded = !0;
    //         n.version = '2.0';
    //         n.queue = [];
    //         t = b.createElement(e);
    //         t.async = !0;
    //         t.src = v;
    //         s = b.getElementsByTagName(e)[0];
    //         s.parentNode.insertBefore(t, s);
    //     })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    //     window.fbq && window.fbq('init', '1019629833660485');
    //     window.fbq && window.fbq('track', 'PageView');
    // }, []);

    return (
        <div className="min-h-screen flex flex-col mesh-gradient-bg text-foreground">
            <Helmet>
                <title>{meta.title}</title>
                <meta name="description" content={meta.description} />

                <meta property="og:title" content={meta.title} />
                <meta property="og:description" content={meta.description} />
                <meta property="og:image" content={meta.image} />
                <meta property="og:url" content={meta.url} />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="geniosdainformatica" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={meta.title} />
                <meta name="twitter:description" content={meta.description} />
                <meta name="twitter:image" content={meta.image} />
                <meta name="twitter:site" content="@geniosinfotech" />
                <meta name="twitter:creator" content="@geniosinfotech" />

                {/* Meta Pixel Code */}
                {/* <noscript>
                    <img height="1" width="1" style={{ display: 'none' }} alt=""
                        src="https://www.facebook.com/tr?id=1019629833660485&ev=PageView&noscript=1" />
                </noscript> */}
            </Helmet>

            <header>
                <Header />
            </header>

            <main className="">
                {/* <div className="flex-grow"> */}

                <Hero />
                <Benefits />
                <Slides />
                <Modules />
                <Pricing />
                <FAQ />

                {/* </div> */}
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default PowerPoint;