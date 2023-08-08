import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import NonNullableMapped from "../utils/NonNullableMapped";

export const badgeVariants = cva("font-medium rounded", {
    variants: {
        state: {
            error: "bg-red-100 text-red-800",
            success: "bg-green-100 text-green-800",
        },
        size: {
            base: "text-xs px-2.5 py-0.5",
            lg: "text-sm px-4 py-2",
        },
    },
    defaultVariants: {
        state: "success",
        size: "base",
    },
});

interface BadgeProps
    extends React.ComponentPropsWithoutRef<"span">,
        NonNullableMapped<VariantProps<typeof badgeVariants>> {}

export default function Badge(props: BadgeProps) {
    const { className, state, size, ...rest } = props;

    return (
        <span
            className={twMerge(badgeVariants({ state, size }), className)}
            {...rest}
        />
    );
}
