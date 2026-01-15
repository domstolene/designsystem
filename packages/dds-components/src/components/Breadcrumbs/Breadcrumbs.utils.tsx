import { type BreadcrumbProps } from './Breadcrumb';

interface LinkLikeProps {
  href?: string;
  to?: string | object;
}

export const isLinkLike = (props: BreadcrumbProps): props is LinkLikeProps => {
  const p = props as LinkLikeProps;
  return p.href !== undefined || p.to !== undefined;
};
