import { VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

export const buttonVariants = cva(
    "focus:outline-none focus:ring inline-block rounded-md transition",
    {
        variants: {
            appearance: {
                default:
                    "bg-teal-600 hover:bg-teal-700 text-white focus:ring-teal-500",
                outline:
                    "border border-teal-600 border-opacity-40 text-teal-600 hover:bg-teal-700 hover:text-white focus:ring-teal-500",
            },
            size: {
                default: "px-5 py-2",
                sm: "px-3 py-2",
            },
        },
        defaultVariants: {
            appearance: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ComponentPropsWithoutRef<"button">,
        VariantProps<typeof buttonVariants> {}

export default function Button(props: ButtonProps) {
    const { className, size, appearance, ...rest } = props;

    return (
        <button
            className={twMerge(buttonVariants({ appearance, size }), className)}
            {...rest}
        />
    );
}
