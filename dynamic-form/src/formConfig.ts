import { FormField } from "./types";

export const formConfig: FormField[] = [
    {
        type: "text",
        label: "Full Name",
        name: "fullName",
        required: true,
    },
    {
        type: "email",
        label: "Email Address",
        name: "email",
        required: true,
    },
    {
        type: "select",
        label: "Country",
        name: "country",
        required: true,
        options: ["USA", "Canada", "India"],
    },
    {
        type: "select",
        label: "State",
        name: "state",
        required: true,
        dependsOn: {
            field: "country",
            values: {
                USA: ["New York", "California", "Texas"],
                Canada: ["Ontario", "Quebec", "British Columbia"],
                India: ["Delhi", "Mumbai", "Bangalore"],
            },
        },
    },
];
