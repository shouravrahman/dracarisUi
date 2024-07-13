import React, { type ComponentPropsWithRef } from "react";
import { type VariantProps } from "class-variance-authority";
import { buttonStyles } from "./Button.helper.js";
type ButtonElementProps = ComponentPropsWithRef<"button">;
export interface ButtonProps extends ButtonElementProps, VariantProps<typeof buttonStyles> {
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    label?: string;
}
export default function Button({ className, buttonType, size, rounded, label, rightIcon, spacing, leftIcon, ...props }: ButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
