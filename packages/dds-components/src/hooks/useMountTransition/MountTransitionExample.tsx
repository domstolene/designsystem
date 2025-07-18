import { type FC, useEffect, useState } from 'react';

import { useMountTransition } from './useMountTransition';
import { Paper } from '../../components/layout';

export interface MountTransitionProps {
  /**Om elementet er mounted. */
  isMounted: Parameters<typeof useMountTransition>[0];
  /**Hvor lenge transition skal vare før unmount. */
  unmountDelay: Parameters<typeof useMountTransition>[1];
}

export const MountTransitionExample = (props: MountTransitionProps) => {
  const { isMounted, unmountDelay } = props;
  const isMountedAndVisible = useMountTransition(isMounted, unmountDelay);
  return (
    <div>
      <p>
        Endre <code>isMounted</code> fra <code>true</code> til{' '}
        <code>false</code> for å se effekten før unmount.
      </p>
      <p>
        <code>useMountTransition(isMounted, unmountDelay)</code>
      </p>
      <p>
        <code>
          useMountTransition({(isMounted ?? false).toString()}, {unmountDelay})
        </code>
      </p>
      <p>Er mounted og synlig: {(isMountedAndVisible ?? false).toString()} </p>
      {isMounted || isMountedAndVisible ? (
        <Paper border="border-default">
          Denne er åpen.{' '}
          {!isMounted && isMountedAndVisible && <Countdown ms={unmountDelay} />}
        </Paper>
      ) : null}
    </div>
  );
};

interface CountdownProps {
  ms: number;
}

const Countdown: FC<CountdownProps> = ({ ms }) => {
  const [timeLeft, setTimeLeft] = useState<number>(ms);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft(prev => {
        const next = prev - 100;
        return next >= 0 ? next : 0;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const formatTime = (milliseconds: number): string => {
    const seconds = milliseconds / 1000;
    return `${seconds.toFixed(1)}s`;
  };

  return `Lukkes om ${formatTime(timeLeft)}`;
};
