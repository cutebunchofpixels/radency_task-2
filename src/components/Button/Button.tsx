import { VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import NonNullableMapped from "../../utils/NonNullableMapped";

export const buttonVariants = cva(
    "focus:outline-none focus:ring inline-block rounded-md transition",
    {
        variants: {
            /** Affects general look of the button */
            appearance: {
                primary:
                    "bg-teal-600 hover:bg-teal-700 text-white focus:ring-teal-500",
                outline:
                    "border border-teal-600 border-opacity-40 text-teal-600 hover:bg-teal-700 hover:text-white focus:ring-teal-500",
            },
            /** Changes amount of padding around the button's label */
            size: {
                base: "px-5 py-2",
                sm: "px-3 py-2",
            },
        },

        defaultVariants: {
            appearance: "primary",
            size: "base",
        },
    }
);

export interface ButtonProps
    extends React.ComponentPropsWithoutRef<"button">,
        NonNullableMapped<VariantProps<typeof buttonVariants>> {}

export default function Button(props: ButtonProps) {
    const { className, size, appearance, ...rest } = props;

    return (
        <button
            className={twMerge(buttonVariants({ appearance, size }), className)}
            {...rest}
        />
    );
}
