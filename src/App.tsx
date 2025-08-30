import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Layout from "@/components/layout/Layout";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import Team from "./pages/Team";
import Resources from "./pages/Resources";
import ResourceDetail from "./pages/ResourceDetail";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import DashboardProfile from "./pages/DashboardProfile";
import DashboardRegistrations from "./pages/DashboardRegistrations";
import DashboardCertificates from "./pages/DashboardCertificates";
import Admin from "./pages/Admin";
import AdminEvents from "./pages/AdminEvents";
import AdminUsers from "./pages/AdminUsers";
import AdminTeam from "./pages/AdminTeam";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                {/* Public Routes */}
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="programs" element={<Programs />} />
                <Route path="programs/:slug" element={<Programs />} />
                <Route path="events" element={<Events />} />
                <Route path="events/:id" element={<EventDetail />} />
                <Route path="team" element={<Team />} />
                <Route path="resources" element={<Resources />} />
                <Route path="resources/:slug" element={<ResourceDetail />} />
                <Route path="contact" element={<Contact />} />
                
                {/* Auth Routes */}
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
                
                {/* Dashboard Routes */}
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="dashboard/profile" element={<DashboardProfile />} />
                <Route path="dashboard/registrations" element={<DashboardRegistrations />} />
                <Route path="dashboard/certificates" element={<DashboardCertificates />} />
                
                {/* Admin Routes */}
                <Route path="admin" element={<Admin />} />
                <Route path="admin/events" element={<AdminEvents />} />
                <Route path="admin/users" element={<AdminUsers />} />
                <Route path="admin/team" element={<AdminTeam />} />
                
                {/* Catch-all */}
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
