import React, { useState } from "react";
import { formConfig } from "../formConfig";
import { validateField } from "../utils/validation";
import FormFieldComponent from "./FormField";
import { FormField } from "../types"; // Ensure you have a type definition for form fields

const DynamicForm: React.FC = () => {
    const [formData, setFormData] = useState<Record<string, any>>({});
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [preview, setPreview] = useState(false);

    const handleChange = (name: string, value: any) => {
        setFormData((prev) => {
            const updatedData = { ...prev, [name]: value };

            // Reset state if country changes
            if (name === "country") {
                updatedData["state"] = "";
            }

            return updatedData;
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        let newErrors: Record<string, string> = {};
        formConfig.forEach((field) => {
            const error = validateField(field, formData[field.name]);
            if (error) newErrors[field.name] = error;
        });

        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            setPreview(true);
        }
    };

    const getUpdatedFields = (field: FormField) => {
        if (field.dependsOn) {
            const parentValue = formData[field.dependsOn.field];

            if (typeof parentValue === "string" && field.dependsOn.values[parentValue]) {
                return { ...field, options: field.dependsOn.values[parentValue] };
            }
        }
        return field;
    };

    return (
        <div>
            <h2>Dynamic Form</h2>
            <form onSubmit={handleSubmit}>
                {formConfig.map((field) => {
                    const updatedField = getUpdatedFields(field);

                    return (
                        <FormFieldComponent
                            key={updatedField.name}
                            field={updatedField}
                            value={formData[updatedField.name] || ""}
                            onChange={handleChange}
                            error={errors[updatedField.name]}
                        />
                    );
                })}
                <button type="submit">Submit</button>
            </form>

            {preview && (
                <div>
                    <h3>Form Preview</h3>
                    <pre>{JSON.stringify(formData, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default DynamicForm;
