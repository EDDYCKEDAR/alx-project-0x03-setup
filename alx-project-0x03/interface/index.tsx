// interface/index.ts

export interface PageRouteProps {
  pageRoute: string;
}

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export interface LayoutProps {
  children: React.ReactNode;
}
