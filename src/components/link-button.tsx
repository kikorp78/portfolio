'use client';

import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import FaIcon from './fa-icon';
import type { MouseEvent } from 'react';

interface Props {
  icon: IconDefinition;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export default function LinkButton({ icon, onClick }: Props) {
  return (
    <button
      className="group h-10 w-10 cursor-pointer rounded-full bg-[#efede4]"
      onClick={onClick}
    >
      <FaIcon
        className="text-[#5c5a52] transition group-hover:text-[#1a1915]"
        icon={icon}
        size="lg"
      />
    </button>
  );
}
