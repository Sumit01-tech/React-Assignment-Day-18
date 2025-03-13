export type FormFieldType = "text" | "number" | "email" | "password" | "checkbox" | "select";

export interface FormField {
    type: FormFieldType; // Ensures only allowed values are used
    label: string;
    name: string;
    required?: boolean;
    pattern?: string;
    errorMessage?: string;
    min?: number;
    max?: number;
    options?: string[];
    dependsOn?: {
        field: string;
        values: Record<string, string[]>;
    };
}
