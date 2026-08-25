import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Home from "@/pages/home";
import About from "@/pages/about";
import Services from "@/pages/services";
import Industries from "@/pages/industries";
import Process from "@/pages/process";
import Portfolio from "@/pages/portfolio";
import CaseStudies from "@/pages/case-studies";
import Pricing from "@/pages/pricing";
import Blog from "@/pages/blog";
import Careers from "@/pages/careers";
import Faq from "@/pages/faq";
import Contact from "@/pages/contact";
import Privacy from "@/pages/privacy";
import Terms from "@/pages/terms";
import ProductsCatalog from "@/pages/products/index";
import ProductDetail from "@/pages/products/detail";
import ProductSupport from "@/pages/products/support";
import ProductPrivacy from "@/pages/products/privacy";
import ProductTerms from "@/pages/products/terms";
import CompanySupport from "@/pages/support";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/industries" component={Industries} />
      <Route path="/process" component={Process} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/case-studies" component={CaseStudies} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/blog" component={Blog} />
      <Route path="/careers" component={Careers} />
      <Route path="/faq" component={Faq} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route path="/privacy-policy" component={Privacy} />
      <Route path="/terms-and-conditions" component={Terms} />
      
      <Route path="/support" component={CompanySupport} />
      <Route path="/products" component={ProductsCatalog} />
      <Route path="/products/:slug/support" component={ProductSupport} />
      <Route path="/products/:slug/privacy" component={ProductPrivacy} />
      <Route path="/products/:slug/terms" component={ProductTerms} />
      <Route path="/products/:slug" component={ProductDetail} />
      
      <Route component={NotFound} />
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
