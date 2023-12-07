import { HtmlForm } from './html-form';

const paths: Record<string, JSX.Element> = {
  '/html-form': <HtmlForm />,
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
