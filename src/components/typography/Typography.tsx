import { ReactNode, forwardRef, HTMLAttributes } from "react";

type ComponentProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLElement>;

export const H1 = forwardRef<HTMLHeadingElement, ComponentProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${className || ""}`}
        {...props}
      >
        {children}
      </h1>
    );
  }
);
H1.displayName = "H1";


export const H2 = forwardRef<HTMLHeadingElement, ComponentProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <h2
        ref={ref}
        className={`scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 ${className || ""}`}
        {...props}
      >
        {children}
      </h2>
    );
  }
);
H2.displayName = "H2";

export const H3 = forwardRef<HTMLHeadingElement, ComponentProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={`scroll-m-20 text-2xl font-semibold tracking-tight ${className || ""}`}
        {...props}
      >
        {children}
      </h3>
    );
  }
);
H3.displayName = "H3";

export const H4 = forwardRef<HTMLHeadingElement, ComponentProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <h4
        ref={ref}
        className={`scroll-m-20 text-xl font-semibold tracking-tight ${className || ""}`}
        {...props}
      >
        {children}
      </h4>
    );
  }
);
H4.displayName = "H4";

export const P = forwardRef<HTMLParagraphElement, ComponentProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={`leading-7 [&:not(:first-child)]:mt-6 ${className || ""}`}
        {...props}
      >
        {children}
      </p>
    );
  }
);
P.displayName = "P";

export const Blockquote = forwardRef<HTMLQuoteElement, ComponentProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <blockquote
        ref={ref}
        className={`mt-6 border-l-2 pl-6 italic ${className || ""}`}
        {...props}
      >
        {children}
      </blockquote>
    );
  }
);
Blockquote.displayName = "Blockquote";

export const Lead = forwardRef<HTMLParagraphElement, ComponentProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={`text-xl text-muted-foreground ${className || ""}`}
        {...props}
      >
        {children}
      </p>
    );
  }
);
Lead.displayName = "Lead";

export const Large = forwardRef<HTMLDivElement, ComponentProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`text-lg font-semibold ${className || ""}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Large.displayName = "Large";

export const Small = forwardRef<HTMLElement, ComponentProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <small
        ref={ref}
        className={`text-sm font-medium leading-none ${className || ""}`}
        {...props}
      >
        {children}
      </small>
    );
  }
);
Small.displayName = "Small";

export const Muted = forwardRef<HTMLParagraphElement, ComponentProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={`text-sm text-muted-foreground ${className || ""}`}
        {...props}
      >
        {children}
      </p>
    );
  }
);
Muted.displayName = "Muted";