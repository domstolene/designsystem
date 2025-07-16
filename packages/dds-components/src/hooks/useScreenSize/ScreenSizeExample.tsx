import { useScreenSize } from './useScreenSize';

export const ScreenSizeExample = () => {
  const size = useScreenSize();

  return (
    <div>
      <p>Juster på vindusstørrelse for å se endring.</p>
      <p>
        <code>useScreenSize()</code>
      </p>
      <code>@returns</code> <code>enum</code> skjermstørrelse basert på
      brekkpunkter i Elsa.
      <p>{size}</p>
    </div>
  );
};
