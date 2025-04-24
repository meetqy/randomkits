import { Hero } from "./_components/hero";
import { Features } from "./_components/features";
import { Tools } from "./_components/tools";
import { Footer } from "~/components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Tools />

      {/* Footer */}
      <Footer />
    </div>
  );
}
