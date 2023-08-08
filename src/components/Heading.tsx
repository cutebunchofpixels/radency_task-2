import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import NonNullableMapped from "../utils/NonNullableMapped";

export const headingVariants = cva("text-gray-900", {
    variants: {
        level: {
            h1: "font-extrabold text-4xl mb-8 md:text-5xl lg:text-6xl lg:mb-12 tracking-tight",
            h2: "font-bold text-3xl mb-6 lg:text-4xl lg:mb-8 tracking-tight",
            h3: "font-bold text-2xl mb-4 lg:text-3xl lg:mb-6 tracking-tight",
            h4: "font-bold text-xl mb-3 lg:text-2xl",
            h5: "font-semibold mb-2 text-lg lg:text-xl",
            h6: "font-semibold mb-2",
        },
    },
});

export interface HeadingProps
    extends HTMLAttributes<HTMLHeadingElement>,
        Required<NonNullableMapped<VariantProps<typeof headingVariants>>> {
    element: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export default function Heading(props: HeadingProps) {
    const { className, level, element, ...rest } = props;

    const HeadingTag = element;

    return (
        <HeadingTag
            className={twMerge(headingVariants({ level }), className)}
            {...rest}
        />
    );
}
