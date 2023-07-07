import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  Link,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "@remix-run/react";
import fontStyles from "@norges-domstoler/dds-components/dist/styles/fontStyles.css";
import { AppShell } from "@norges-domstoler/dds-components";
import type { SvgIcon } from "@norges-domstoler/dds-icons";
import {
  MinusIcon,
  UnfoldMoreIcon,
  LockIcon,
  CalendarViewMonthIcon,
} from "@norges-domstoler/dds-icons";

import globalStyles from "./index.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Elsa Testapp",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: fontStyles },
  { rel: "stylesheet", href: globalStyles },
];

export default function App() {
  const location = useLocation();

  const internalLinks: { href: string; label: string; icon: SvgIcon }[] = [
    { href: "/banner/TEST", label: "Banner", icon: MinusIcon },
    { href: "/card/accordion", label: "Accordion", icon: UnfoldMoreIcon },
    { href: "/card/id-porten", label: "ID-porten", icon: LockIcon },
    { href: "/table", label: "Table", icon: CalendarViewMonthIcon },
  ];

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <AppShell
          version="1.0.0"
          navigation={{
            internal: internalLinks.map(({ href, label, icon }) => (
              <AppShell.NavItem
                as={Link}
                key={href}
                active={location.pathname.startsWith(href)}
                to={href}
                icon={icon}
              >
                {label}
              </AppShell.NavItem>
            )),
            external: [
              <AppShell.NavItem
                key="designsystem"
                href="https://design.domstol.no/"
                external
              >
                Designsystemet
              </AppShell.NavItem>,
            ],
          }}
        >
          <Outlet />
        </AppShell>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
