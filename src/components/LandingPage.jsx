import React from 'react';
import Header from './Header';
import Hero from './Hero';
import TrustStrip from './TrustStrip';
import Problem from './Problem';
import Solution from './Solution';
import CoreOffer from './CoreOffer';
import Pricing from './Pricing';
import SecondaryOffers from './SecondaryOffers';
import RiskReversal from './RiskReversal';
import Outcomes from './Outcomes';
import Urgency from './Urgency';
import FinalCTA from './FinalCTA';
import Footer from './Footer';

export default function LandingPage() {
  return (
    <div className="font-sans min-h-screen bg-dark-900 text-gray-300 selection:bg-brand-500/30">
      <Header />
      <Hero />
      <TrustStrip />
      <Problem />
      <Solution />
      <CoreOffer />
      <Pricing />
      <SecondaryOffers />
      <RiskReversal />
      <Outcomes />
      <Urgency />
      <FinalCTA />
      <Footer />
    </div>
  );
}
