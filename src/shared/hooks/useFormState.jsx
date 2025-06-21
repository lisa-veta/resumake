import { useState } from 'react';

export const useFormState = (initialState = {}) => {
    const [form, setForm] = useState(initialState);

    const handleChange = key => e => {
        setForm(prev => ({
            ...prev,
            [key]: e.target.value,
        }));
    };

    return { form, setForm, handleChange };
};
