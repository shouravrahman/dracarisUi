import { cva } from "class-variance-authority";

/**
 * Card styles for the Card component.
 */
export const cardStyles = cva(
  "p-4 rounded-md transition-transform duration-200 ease-in-out focus:outline-none",
  {
    variants: {
      variant: {
        default: "bg-white",
        primary: "bg-blue-100",
        secondary: "bg-gray-50",
        danger: "bg-red-50",
      },
      size: {
        small: "w-64",
        medium: "w-96",
        large: "w-128",
      },
      shadow: {
        none: "shadow-none",
        small: "shadow-sm",
        medium: "shadow-md",
        large: "shadow-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "medium",
      shadow: "medium",
    },
  }
);
