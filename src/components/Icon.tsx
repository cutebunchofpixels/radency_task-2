export interface IconProps extends React.ComponentPropsWithoutRef<"i"> {
    name: string;
    additionalClasses?: string;
}

export default function Icon(props: IconProps) {
    const { name, additionalClasses, ...rest } = props;
    const classList = ["bi", `bi-${name}`];

    if (additionalClasses) {
        for (const className of additionalClasses.split(" ")) {
            classList.push(className);
        }
    }

    return <i className={classList.join(" ")} {...rest} />;
}
