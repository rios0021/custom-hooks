# useForm TS Hook

Use example:
```
    interface FormData {
        email: string;
        name: string;
        age: number
    }

    const {email, name, age, handleChange, reset} = useForm<FormData>({
        email: '',
        name: '',
        age: 30
    });

    OR 


    const {values, handleChange, reset} = useForm<FormData>({
        email: '',
        name: '',
        age: 30
    });
    
```
