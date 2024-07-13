import React, { type ComponentPropsWithRef } from "react";
import { type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";
import { cardStyles } from "./Card.helper";

type CardElementProps = ComponentPropsWithRef<"div">;

export interface CardProps
  extends CardElementProps,
    VariantProps<typeof cardStyles> {
  title?: string;
  footer?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  className,
  variant,
  size,
  shadow,
  title,
  footer,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(cardStyles({ variant, size, shadow }), className)}
      {...props}
    >
      {title && <div className="text-lg font-bold mb-2">{title}</div>}
      <div>{children}</div>
      {footer && <div className="mt-4">{footer}</div>}
    </div>
  );
};

export default Card;
