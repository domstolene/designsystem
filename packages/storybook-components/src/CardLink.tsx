import { type ReactNode } from 'react';

import { type IconType } from './types';
import { iconMap } from './utils';

interface CardLinkProps {
  icon: IconType;
  title: string;
  body: string;
  href: string;
}

interface CardsContainterProps {
  children: ReactNode;
}
export const CardsContainter = ({ children }: CardsContainterProps) => (
  <div className="sb-card-container">{children}</div>
);

export const CardLink = ({ icon, title, body, href }: CardLinkProps) => {
  const Icon = iconMap[icon];

  return (
    <a target="_blank" rel="noopener noreferer" href={href} className="sb-card">
      <span className="sb-card-title">
        <Icon size="1.125rem" /> <span>{title}</span>
      </span>
      <span>{body}</span>
    </a>
  );
};
