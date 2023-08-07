import { Field, Form, Formik } from "formik";
import Category from "../../models/Category";
import Note from "../../models/Note";
import Button from "../Button";
import * as yup from "yup";
import { FormValidationErrorBadge } from "./FormValidationErrorBadge";

interface FormValues {
    name: string;
    content: string;
    category: Category;
}

interface NoteEditFormProps {
    oldNote?: Note;
    handleSubmit: (values: FormValues) => void;
}

const formValidationSchema = yup.object({
    name: yup.string().required(),
    category: yup.string().oneOf(Object.values(Category)).required(),
    content: yup.string().required(),
});

export default function NoteEditForm(props: NoteEditFormProps) {
    const { oldNote, handleSubmit } = props;

    const initialValues: FormValues = {
        name: "",
        content: "",
        category: Category.Task,
    };

    if (oldNote) {
        initialValues.name = oldNote.name;
        initialValues.content = oldNote.content;
        initialValues.category = oldNote.category;
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
                handleSubmit(values);
                actions.resetForm();
            }}
            validationSchema={formValidationSchema}
        >
            {({ errors, touched }) => (
                <Form>
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-6">
                        <div className="flex flex-col space-y-3 items-start md:col-span-3">
                            <label htmlFor="name">Name</label>
                            <Field name="name" id="name" />
                            <FormValidationErrorBadge
                                errors={errors}
                                touched={touched}
                                prop={"name"}
                            />
                        </div>
                        <div className="flex flex-col space-y-3 items-start md:col-span-3">
                            <label htmlFor="category">Category</label>
                            <Field as="select" name="category" id="category">
                                {Object.values(Category).map((category) => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </Field>
                            <FormValidationErrorBadge
                                errors={errors}
                                touched={touched}
                                prop={"category"}
                            />
                        </div>
                        <div className="flex flex-col space-y-3 items-start md:col-span-6">
                            <label htmlFor="category">Content</label>
                            <Field as="textarea" name="content" id="content" />
                            <FormValidationErrorBadge
                                errors={errors}
                                touched={touched}
                                prop={"content"}
                            />
                        </div>
                        <div>
                            <Button type="submit">Submit</Button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
}
