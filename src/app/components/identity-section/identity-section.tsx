import pfp from '@pfp.webp';
import Image from 'next/image';
import EmailButton from './email-button';
import GitHubButton from './github-button';
import Clock from './clock';

export default function IdentitySection() {
  return (
    <div className="flex flex-col items-start justify-between space-y-5 space-x-3 sm:flex-row sm:space-y-0">
      <div className="flex items-center space-x-5">
        <Image
          className="h-20 w-20 rounded-full"
          src={pfp}
          alt="profile picture"
        />
        <div className="flex flex-col space-y-2">
          <Clock />
          <h1 className="text-display-sm lg:text-display-lg font-fraunces font-semibold text-black">
            Vuk V.
          </h1>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <EmailButton />
        <GitHubButton />
      </div>
    </div>
  );
}
