export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
    variant: string;
    additionalClasses?: string;
}

export default function Button(props: ButtonProps) {
    const { variant, additionalClasses, children, ...rest } = props;

    const classList = ["btn", `btn-${variant}`];

    if (additionalClasses) {
        for (const className of additionalClasses.split(" ")) {
            classList.push(className);
        }
    }
    return (
        <button className={classList.join(" ")} {...rest}>
            {children}
        </button>
    );
}
