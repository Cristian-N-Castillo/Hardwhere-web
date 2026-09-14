import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cx } from "@/lib/cx";

export type Tone = "cream" | "paper" | "ink" | "deep";

const toneClass: Record<Tone, string> = {
  cream: "bg-cream text-ink border-ink/15",
  paper: "bg-white text-ink border-ink/15",
  deep: "bg-cream-deep text-ink border-ink/15",
  ink: "bg-ink text-cream border-cream/15",
};

export function Container({ className, ...props }: ComponentProps<"div">) {
  return <div className={cx("mx-auto w-full max-w-[1280px] px-5 sm:px-10", className)} {...props} />;
}

export function Section({
  tone = "cream",
  index,
  label,
  className,
  innerClassName,
  children,
  ...props
}: Omit<ComponentProps<"section">, "children"> & {
  tone?: Tone;
  index?: string;
  label?: string;
  innerClassName?: string;
  children: ReactNode;
}) {
  const dark = tone === "ink";
  return (
    <section className={cx("border-b", toneClass[tone], className)} {...props}>
      <div className={cx("mx-auto w-full max-w-[1280px] lg:border-x", dark ? "lg:border-cream/15" : "lg:border-ink/15")}>
        {label && (
          <div
            className={cx(
              "flex items-center justify-between border-b px-5 py-3 sm:px-10",
              dark ? "border-cream/15 text-cream/60" : "border-ink/15 text-ink/55",
            )}
          >
            <span className="label-mono">{label}</span>
            {index && <span className="label-mono">({index})</span>}
          </div>
        )}
        <div className={cx("px-5 py-14 sm:px-10 sm:py-20", innerClassName)}>{children}</div>
      </div>
    </section>
  );
}

export function Label({ children, dark = false, className }: { children: ReactNode; dark?: boolean; className?: string }) {
  return <p className={cx("label-mono", dark ? "text-cream/60" : "text-ink/55", className)}>{children}</p>;
}

export function Title({
  as: Tag = "h2",
  children,
  className,
  size = "lg",
}: {
  as?: "h1" | "h2" | "h3";
  children: ReactNode;
  className?: string;
  size?: "xl" | "lg" | "md";
}) {
  const sizes = {
    xl: "text-display-xl",
    lg: "text-display-lg",
    md: "text-display-md",
  };
  return <Tag className={cx("font-display", sizes[size], className)}>{children}</Tag>;
}

export function SectionHeading({
  title,
  description,
  dark = false,
  className,
}: {
  title: ReactNode;
  description?: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={cx("max-w-3xl", className)}>
      <Title>{title}</Title>
      {description && (
        <p className={cx("mt-5 max-w-2xl text-base leading-relaxed sm:text-lg", dark ? "text-cream/70" : "text-ink/65")}>
          {description}
        </p>
      )}
    </div>
  );
}

const buttonVariants = {
  primary: "bg-ink text-cream hover:bg-ink-2 ring-1 ring-ink",
  secondary: "text-ink ring-1 ring-ink ring-inset hover:bg-ink hover:text-cream",
  light: "bg-cream text-ink hover:bg-white",
  outlineLight: "text-cream ring-1 ring-cream/40 ring-inset hover:bg-cream hover:text-ink",
} as const;

export type ButtonVariant = keyof typeof buttonVariants;

export function buttonClass(variant: ButtonVariant = "primary", className?: string) {
  return cx(
    "group/btn inline-flex items-center justify-center gap-3 px-6 py-3.5 text-sm font-medium whitespace-nowrap transition-colors disabled:cursor-not-allowed disabled:opacity-60",
    buttonVariants[variant],
    className,
  );
}

export function Arrow({ className }: { className?: string }) {
  return (
    <span aria-hidden className={cx("inline-block transition-transform group-hover/btn:translate-x-1 group-hover:translate-x-1", className)}>
      →
    </span>
  );
}

export function LinkButton({
  variant = "primary",
  className,
  children,
  arrow = true,
  ...props
}: ComponentProps<typeof Link> & { variant?: ButtonVariant; arrow?: boolean }) {
  return (
    <Link className={buttonClass(variant, className)} {...props}>
      {children}
      {arrow && <Arrow />}
    </Link>
  );
}

export function TextLink({ className, children, ...props }: ComponentProps<typeof Link>) {
  return (
    <Link
      className={cx("group inline-flex items-center gap-2 border-b border-current pb-0.5 text-sm font-medium", className)}
      {...props}
    >
      {children}
      <Arrow />
    </Link>
  );
}

export function Pending({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <span
      title="Dato por confirmar antes de publicar"
      className={cx(
        "border border-dashed px-1.5 py-0.5 font-mono text-[0.78em] tracking-wide",
        dark ? "border-cream/50 bg-hatch-light text-cream" : "border-ink/60 bg-hatch text-ink",
      )}
    >
      {children}
    </span>
  );
}

export function Badge({ children, dark = false, solid = false }: { children: ReactNode; dark?: boolean; solid?: boolean }) {
  return (
    <span
      className={cx(
        "label-mono inline-flex items-center px-2 py-1",
        solid ? (dark ? "bg-cream text-ink" : "bg-ink text-cream") : dark ? "ring-1 ring-cream/40" : "ring-1 ring-ink/40",
      )}
    >
      {children}
    </span>
  );
}
