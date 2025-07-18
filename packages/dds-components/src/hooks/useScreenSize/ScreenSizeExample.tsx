import { useScreenSize } from './useScreenSize';

export const ScreenSizeExample = () => {
  const size = useScreenSize();

  return (
    <div>
      <p>Juster på vindusstørrelse for å se endring.</p>
      <p>Skjermstørrelse: {size}</p>
      <p>
        <code>useScreenSize()</code>
      </p>
    </div>
  );
};
