import germany from '@germany.svg';

import Image, { type StaticImageData } from 'next/image';

export default function AboutMeSection() {
  return (
    <div className="flex flex-col space-y-3">
      <p className="text-paragraph-sm font-semibold tracking-widest text-[#5c5a52] uppercase">
        About Me
      </p>
      <p className="text-paragraph-md text-[#1a1915]">
        Hi there! I&apos;m a 21-year-old software engineer from{' '}
        <Image
          className="mx-1 inline w-4 align-[-2px]"
          src={germany as StaticImageData}
          alt="germany flag"
        />{' '}
        Germany with 7 years of experience who is passionate about solving
        problems and building accessible tools for others.
        <br />
        <br />
        During my studies, I spent most of my time freelancing and working on
        SaaS projects where I designed and developed full-stack systems, from
        frontend interfaces to backend infrastructure.
        <br />
        <br />
        If you would like to work with me or need my services, be sure to drop
        me an email!
      </p>
    </div>
  );
}
