import * as yup from 'yup';

// SEMINAR DETAILS VALIDATION SCHEEMA
export const seminarDetialsScheema = yup.object().shape({
    seminarType: yup.string().required("Please select any one seminar type"),
    seminarDay: yup.string().required("Please select any one seminar day"),
    seminarTime: yup.string().required("Please select any one seminar time"),

})

// SEMINAR CONTACT DETAILS VALIDATION SCHEEMA
export const seminarContactDetailsScheema = yup.object().shape({
    firstName: yup.string().required("Please enter your first name"),
    lastName: yup.string().required("Please enter your last name"),
    email: yup.string().email().required("Please enter your email address"),
    seminarTime: yup.string().required("Please enter your seminar time"),
})