import typescript from '@icons/typescript.svg';
import bun from '@icons/bun.svg';
import react from '@icons/react.svg';
import nextjs from '@icons/nextjs.svg';
import tailwindcss from '@icons/tailwindcss.svg';
import postgres from '@icons/postgres.svg';
import docker from '@icons/docker.svg';
import claudecode from '@icons/claudecode.svg';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import Tooltip from '@components/tooltip';

export default function CoreTechnologiesSection() {
  return (
    <div className="flex flex-col space-y-4">
      <p className="text-paragraph-sm font-semibold tracking-widest text-[#5c5a52] uppercase">
        Core Technologies
      </p>
      <div className="flex flex-wrap items-center gap-6">
        <Tooltip text="TypeScript">
          <Image
            className="h-7 w-7"
            src={typescript as StaticImageData}
            alt="typescript icon"
          />
        </Tooltip>
        <Tooltip text="Bun">
          <Image
            className="h-7 w-7"
            src={bun as StaticImageData}
            alt="bun icon"
          />
        </Tooltip>
        <Tooltip text="React">
          <Image
            className="h-7 w-7"
            src={react as StaticImageData}
            alt="react icon"
          />
        </Tooltip>
        <Tooltip text="Next.js">
          <Image
            className="h-7 w-7"
            src={nextjs as StaticImageData}
            alt="nextjs icon"
          />
        </Tooltip>
        <Tooltip text="Tailwind CSS">
          <Image
            className="h-7 w-7"
            src={tailwindcss as StaticImageData}
            alt="tailwindcss icon"
          />
        </Tooltip>
        <Tooltip text="PostgreSQL">
          <Image
            className="h-7 w-7"
            src={postgres as StaticImageData}
            alt="postgres icon"
          />
        </Tooltip>
        <Tooltip text="Docker">
          <Image
            className="h-7 w-7"
            src={docker as StaticImageData}
            alt="docker icon"
          />
        </Tooltip>
        <Tooltip text="Claude Code">
          <Image
            className="h-7 w-7"
            src={claudecode as StaticImageData}
            alt="claudecode icon"
          />
        </Tooltip>
      </div>
    </div>
  );
}
