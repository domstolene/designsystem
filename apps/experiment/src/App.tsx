import { HtmlForm } from './html-form';
import { ReactHookForm } from './react-hook-form';

const paths: Record<string, JSX.Element> = {
  '/html-form': <HtmlForm />,
  '/react-hook-form': <ReactHookForm />,
};

export function App() {
  const pathView = paths[window.location.pathname];

  if (pathView) {
    return pathView;
  }

  return (
    <div>
      <ul>
        {Object.keys(paths).map(el => (
          <li key={el}>
            <a href={el}>{el}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
