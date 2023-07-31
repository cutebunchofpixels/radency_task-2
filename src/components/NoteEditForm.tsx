import { Field, Form, Formik } from "formik";
import Category from "../models/Category";
import Note from "../models/Note";
import Button from "./Button";
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
                    <div className="w-50 m-auto row g-4 mb-5">
                        <div className="col-6 col-md-12">
                            <label htmlFor="name" className="form-label">
                                Name
                            </label>
                            <Field
                                name="name"
                                className="form-control"
                                id="name"
                            />
                            <FormValidationErrorBadge
                                errors={errors}
                                touched={touched}
                                prop={"name"}
                            />
                        </div>
                        <div className="col-6 col-md-12">
                            <label htmlFor="category" className="form-label">
                                Category
                            </label>
                            <Field
                                as="select"
                                name="category"
                                id="category"
                                className="form-select"
                            >
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
                        <div className="col-12">
                            <label htmlFor="category" className="form-label">
                                Content
                            </label>
                            <Field
                                as="textarea"
                                name="content"
                                className="form-control"
                                id="content"
                            />
                            <FormValidationErrorBadge
                                errors={errors}
                                touched={touched}
                                prop={"content"}
                            />
                        </div>
                        <div className="col-12">
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
}
