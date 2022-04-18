import { useState, ChangeEvent } from 'react';

export const useForm = <T extends Object>(initState:T) => {

    const [values, setValues] = useState(initState);

    const reset= () => {
        setValues(initState);
    }

    const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = target;
        setValues({
            ...values,
            [name]: value
        });
    }
    return {
        ...values,
        values,
        handleChange,
        reset
    }
}
