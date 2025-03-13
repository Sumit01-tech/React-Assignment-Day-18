import React from "react";
import { FormField } from "../types";

interface FormFieldProps {
    field: FormField;
    value: any;
    onChange: (name: string, value: any) => void;
    error?: string;
}
const FormFieldComponent: React.FC<FormFieldProps> = ({
    field,
    value,
    onChange,
    error,
}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, type } = field;
        let newValue: string | number | boolean = e.target.value;

        if (type === "number") newValue = Number(e.target.value) || "";
        if (type === "checkbox") newValue = (e.target as HTMLInputElement).checked;

        onChange(name, newValue);
    };
    return (
        <div>
            <label>{field.label}</label>
            {field.type === "select" ? (
                <select name={field.name} value={value} onChange={handleChange}>
                    <option value="">Select {field.label}</option>
                    {field.options?.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            ) : (
                <input
                    type={field.type}
                    name={field.name}
                    value={value}
                    onChange={handleChange}
                />
            )}
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
};
export default FormFieldComponent;
