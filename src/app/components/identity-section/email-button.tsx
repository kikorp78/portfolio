'use client';

import LinkButton from '@components/link-button';
import Tooltip from '@components/tooltip';
import { Urls } from '@constants';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

type CopyState = 'default' | 'success' | 'error';

export default function EmailButton() {
  const [copyState, setCopyState] = useState<CopyState>('default');

  const copyText: Record<CopyState, string> = {
    default: 'Email',
    success: 'Copied to clipboard!',
    error: 'An error occurred while copying the email'
  };

  const handleClick = () => {
    navigator.clipboard
      .writeText(Urls.Email)
      .then(() => {
        setCopyState('success');

        setTimeout(() => {
          setCopyState('default');
        }, 1000);
      })
      .catch(() => setCopyState('error'));
  };

  return (
    <Tooltip text={copyText[copyState]}>
      <LinkButton icon={faEnvelope} onClick={handleClick} />
    </Tooltip>
  );
}
