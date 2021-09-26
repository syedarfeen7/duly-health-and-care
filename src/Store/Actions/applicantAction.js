export const applicantRegisteration = "APPLICANT_REGISTERATION";
export const applicantSeminarDetails = "APPLICANT_SEMINAR_DETAILS";
export const ApplicantRegisteration = (data) => {
    return {
        type: applicantRegisteration,
        data: data
    }
}

export const ApplicantSeminarDetails = (data) => {
    return {
        type: applicantSeminarDetails,
        data: data
    }
}