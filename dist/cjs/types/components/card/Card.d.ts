import React, { type ComponentPropsWithRef } from "react";
import { type VariantProps } from "class-variance-authority";
import { cardStyles } from "./Card.helper";
type CardElementProps = ComponentPropsWithRef<"div">;
export interface CardProps extends CardElementProps, VariantProps<typeof cardStyles> {
    title?: string;
    footer?: React.ReactNode;
}
declare const Card: React.FC<CardProps>;
export default Card;
