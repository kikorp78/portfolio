'use client';

import { useEffect, useState } from 'react';

export default function Clock() {
  const [time, setTime] = useState(new Date());

  const scheduleNextUpdate = () => {
    const now = new Date();

    const delay = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();

    return setTimeout(() => {
      setTime(new Date());

      scheduleNextUpdate();
    }, delay);
  };

  useEffect(() => {
    const timeout = scheduleNextUpdate();

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div>
      <p className="text-paragraph-sm font-geist-mono text-[#5c5a52]">
        {time.toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit'
        })}{' '}
        · UTC+2
      </p>
    </div>
  );
}
