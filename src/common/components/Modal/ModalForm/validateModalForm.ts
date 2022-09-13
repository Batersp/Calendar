import * as Yup from 'yup';


export const validateModalForm = Yup.object().shape({
    nameEvent: Yup.string().required('Please enter name event').min(3, 'minimum 5 characters MAAAAN'),
    guest: Yup.string().required('Please enter quest')
    /*dataEvent: Yup.string().required('Please enter date')*/
});