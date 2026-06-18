'use client';

import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import type { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  className?: string;
  icon: IconDefinition;
  size?: SizeProp;
}

export default function FaIcon({ className, icon, size }: Props) {
  return <FontAwesomeIcon className={className} icon={icon} size={size} />;
}
