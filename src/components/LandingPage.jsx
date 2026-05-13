import React from 'react';
import Header from './Header';
import Hero from './Hero';
import TrustStrip from './TrustStrip';
import FeatureStrip from './FeatureStrip';
import Problem from './Problem';
import Solution from './Solution';
import Protocol from './Protocol';
import CoreOffer from './CoreOffer';
import Pricing from './Pricing';
import Day14Deliverables from './Day14Deliverables';
import SecondaryOffers from './SecondaryOffers';
import RiskReversal from './RiskReversal';
import Outcomes from './Outcomes';
import Urgency from './Urgency';
import FinalCTA from './FinalCTA';
import Footer from './Footer';
import SprintTimeline from './SprintTimeline';
import FAQ from './FAQ';
import ScrollToTop from './ScrollToTop';
import Benchmark from './Benchmark';

export default function
  LandingPage() {
  return (
    <div className="font-sans min-h-screen bg-dark-900 text-gray-300 selection:bg-brand-500/30">
      <Header />
      <Hero />
      <FeatureStrip />
      {/* <TrustStrip /> */}
      <Problem />
      <Benchmark />
      <Protocol />
      <CoreOffer />
      <Pricing />
      <RiskReversal />
      <Day14Deliverables />
      <SprintTimeline />
      <SecondaryOffers />
      {/* <Outcomes /> */}
      {/* <Solution /> */}
      <FAQ />
      {/* <Urgency /> */}
      <FinalCTA />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
