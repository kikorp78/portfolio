import IdentitySection from './components/identity-section/identity-section';
import AboutMeSection from './components/about-me-section';
import CoreTechnologiesSection from './components/core-technologies-section';

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center px-8 py-14 sm:py-28">
      <div className="flex w-full max-w-2xl flex-col space-y-12">
        <IdentitySection />
        <AboutMeSection />
        <CoreTechnologiesSection />
      </div>
    </div>
  );
}
