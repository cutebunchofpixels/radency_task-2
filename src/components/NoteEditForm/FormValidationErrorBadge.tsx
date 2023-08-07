import { FormikErrors, FormikTouched } from "formik";
import Badge from "../Badge";

export function FormValidationErrorBadge<T>({
    errors,
    touched,
    prop,
}: {
    errors: FormikErrors<T>;
    touched: FormikTouched<T>;
    prop: keyof T;
}) {
    if (!(errors[prop] && touched[prop])) {
        return null;
    }

    return <Badge state="error">{String(errors[prop])}</Badge>;
}
