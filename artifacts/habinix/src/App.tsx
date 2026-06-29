import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { MainLayout } from "@/components/layout/MainLayout";
import { MuftiyaanLayout } from "@/components/layout/MuftiyaanLayout";

import Home from "@/pages/home";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import SupportOurMission from "@/pages/support-our-mission";

import MuftiyaanHome from "@/pages/muftiyaan/index";
import MuftiyaanPrivacy from "@/pages/muftiyaan/privacy-policy";
import MuftiyaanTerms from "@/pages/muftiyaan/terms";
import MuftiyaanSupport from "@/pages/muftiyaan/support";
import MuftiyaanDataDeletion from "@/pages/muftiyaan/data-deletion";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      {/* Muftiyaan Routes with specific layout */}
      <Route path="/muftiyaan*">
        <MuftiyaanLayout>
          <Switch>
            <Route path="/muftiyaan" component={MuftiyaanHome} />
            <Route path="/muftiyaan/privacy-policy" component={MuftiyaanPrivacy} />
            <Route path="/muftiyaan/terms" component={MuftiyaanTerms} />
            <Route path="/muftiyaan/support" component={MuftiyaanSupport} />
            <Route path="/muftiyaan/data-deletion" component={MuftiyaanDataDeletion} />
            <Route component={NotFound} />
          </Switch>
        </MuftiyaanLayout>
      </Route>

      {/* Main Corporate Routes */}
      <Route>
        <MainLayout>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/support-our-mission" component={SupportOurMission} />
            <Route component={NotFound} />
          </Switch>
        </MainLayout>
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
