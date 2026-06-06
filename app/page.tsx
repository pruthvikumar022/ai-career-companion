import { Navbar } from '@/components/landing/Navbar';
import { HeroSection } from '@/components/landing/Hero';
import { FeaturesSection } from '@/components/landing/Features';
import { HowItWorksSection } from '@/components/landing/HowItWorks';
import { TestimonialsSection } from '@/components/landing/Testimonials';
import { CTASection } from '@/components/landing/CTA';
import { Footer } from '@/components/landing/Footer';

export default function Page() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
