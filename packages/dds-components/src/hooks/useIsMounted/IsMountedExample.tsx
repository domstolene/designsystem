import { useEffect, useState } from 'react';

import { useIsMounted } from './useIsMounted';

export const IsMountedExample = () => {
  const [text, setText] = useState('');

  const isMounted = useIsMounted();

  useEffect(() => {
    if (isMounted()) setText('komponenten er mounted');
  }, [isMounted]);
  return (
    <div>
      <p>
        <code>useIsMounted()</code>
      </p>
      <p>{text}</p>
    </div>
  );
};
