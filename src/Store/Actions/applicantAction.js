export const applicantRegisteration = "APPLICANT_REGISTERATION";
export const applicantSeminarDetails = "APPLICANT_SEMINAR_DETAILS";
export const seminarAvailableTimings = "SEMINAR_AVAILABLE_TIMINGS0";
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

export const SeminarTimings = (data) => {
    return{
        type: seminarAvailableTimings,
        data: data
    }
}