'use client';

import LinkButton from '@components/link-button';
import Tooltip from '@components/tooltip';
import { Urls } from '@constants';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { openUrl } from '@utils/functions';

export default function GitHubButton() {
  return (
    <Tooltip text="GitHub">
      <LinkButton icon={faGithub} onClick={() => openUrl(Urls.GitHub)} />
    </Tooltip>
  );
}
