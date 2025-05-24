import Link from "next/link";

export interface AProps {
  external?: boolean;
  href: string;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
}

export function A(props: AProps) {
  const { external, ...rest } = props;
  return external ? <a target="_blank" {...rest} /> : <Link {...rest} />;
}
