export const validateField = (field: any, value: any): string | null => {
    if (field.required && !value) return `${field.label} is required.`;

    if (field.min !== undefined && value < field.min)
        return field.errorMessage || `${field.label} must be at least ${field.min}.`;

    if (field.max !== undefined && value > field.max)
        return field.errorMessage || `${field.label} cannot exceed ${field.max}.`;

    if (field.pattern && !new RegExp(field.pattern).test(value))
        return field.errorMessage || `${field.label} is invalid.`;

    return null;
};
