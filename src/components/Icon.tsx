import { twJoin } from "tailwind-merge";

export interface IconProps extends React.ComponentPropsWithoutRef<"i"> {
    name: string;
}

export default function Icon(props: IconProps) {
    const { name, className, ...rest } = props;

    return <i className={twJoin(`bi-${name}`, className)} {...rest} />;
}
