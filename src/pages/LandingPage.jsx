import React from 'react';
import Header from '../components/layout/Header';
import Hero from '../components/sections/Hero';
import FeatureStrip from '../components/sections/FeatureStrip';
import Problem from '../components/sections/Problem';
import Protocol from '../components/sections/Protocol';
import CoreOffer from '../components/sections/CoreOffer';
import Pricing from '../components/sections/Pricing';
import Day14Deliverables from '../components/sections/Day14Deliverables';
import SecondaryOffers from '../components/sections/SecondaryOffers';
import RiskReversal from '../components/sections/RiskReversal';
import FinalCTA from '../components/sections/FinalCTA';
import Footer from '../components/layout/Footer';
import SprintTimeline from '../components/sections/SprintTimeline';
import FAQ from '../components/sections/FAQ';
import ScrollToTop from '../components/layout/ScrollToTop';
import Benchmark from '../components/sections/Benchmark';

export default function
  LandingPage() {
  return (
    <div className="font-sans min-h-screen bg-dark-900 text-gray-300 selection:bg-brand-500/30">
      <Header />
      <Hero />
      <FeatureStrip />
      <Problem />
      <Benchmark />
      <Protocol />
      <CoreOffer />
      <Pricing />
      <RiskReversal />
      <Day14Deliverables />
      <SprintTimeline />
      <SecondaryOffers />
      <FAQ />
      <FinalCTA />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
