import IdentitySection from './components/identity-section/identity-section';
import AboutMeSection from './components/about-me-section';
import CoreTechnologiesSection from './components/core-technologies-section';
import ProfileShell from './components/profile-shell';

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center px-8 py-14 sm:py-28">
      <ProfileShell>
        <IdentitySection />
        <AboutMeSection />
        <CoreTechnologiesSection />
      </ProfileShell>
    </div>
  );
}
