import { createFileRoute } from "@tanstack/react-router";

import { Audience } from "./-sections/audience";
import { CTA } from "./-sections/cta";
import { Footer } from "./-sections/footer";
import { Hero } from "./-sections/hero";
import { HowItWorks } from "./-sections/how-it-works";
import { Pricing } from "./-sections/pricing";
import { Templates } from "./-sections/templates";
import { WhyCVPro } from "./-sections/why-cvpro";

export const Route = createFileRoute("/_home/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main id="main-content" className="relative">
      <Hero />
      <HowItWorks />
      <WhyCVPro />
      <Templates />
      <Audience />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
