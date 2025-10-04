import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ServicesPage from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import ProjectsPage from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import CoursesPage from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import BlogPage from "./pages/Blog";
import AboutPage from "./pages/About";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import ExcelLanding from "./pages/ExcelLanding";
import PowerPointLanding from "./pages/PowerPointLanding";
import PowerPoint from "./pages/PowePoint";
import LocationData from "./api/LocationData";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/servicos" element={<ServicesPage />} />
          <Route path="/servicos/:id" element={<ServiceDetail />} />
          <Route path="/projetos" element={<ProjectsPage />} />
          <Route path="/projetos/:id" element={<ProjectDetail />} />
          <Route path="/cursos" element={<CoursesPage />} />
          <Route path="/cursos/:id" element={<CourseDetail />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="/curso-excel" element={<ExcelLanding />} />
          <Route path="/curso-powerpoint" element={<PowerPointLanding />} />
          <Route path="/powerpoint" element={<PowerPoint />} />
          <Route path="/api/location" element={<LocationData />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
