import { FormikErrors, FormikTouched } from "formik";

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

    return <div className="badge text-bg-danger">{String(errors[prop])}</div>;
}
