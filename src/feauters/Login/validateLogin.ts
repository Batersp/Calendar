import * as Yup from 'yup';


export const validateLogin = Yup.object().shape({
    name: Yup.string().required('Please enter name').min(5, 'minimum 5 characters MAAAAN'),
    password: Yup.string().required('Please enter password').min(5, `Minimum 5 characters long`),
});