import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import ArtisanConnectMarketplace from './pages/artisan-connect-marketplace';
import Contact from './pages/contact';
import InteractiveMandalaAI from './pages/interactive-mandala-ai';
import VirtualTourExperience from './pages/virtual-tour-experience';
import AboutUs from './pages/about-us';
import Homepage from './pages/homepage';
import VR_360 from './pages/VR_360';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/artisan-connect-marketplace" element={<ArtisanConnectMarketplace />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/interactive-mandala-ai" element={<InteractiveMandalaAI />} />
        <Route path="/virtual-tour-experience" element={<VirtualTourExperience />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/vr-360" element={<VR_360 />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
