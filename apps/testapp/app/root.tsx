import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import fontStyles from '@norges-domstoler/dds-components/dist/styles/fontStyles.css';


export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Elsa Testapp",
  viewport: "width=device-width,initial-scale=1",
});

export const links : LinksFunction = () => [{rel: 'stylesheet', href: fontStyles}]

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
