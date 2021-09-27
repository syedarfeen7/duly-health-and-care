import { applicantRegisteration, applicantSeminarDetails , seminarAvailableTimings} from '../Actions/applicantAction';
const initialState = {
    seminar_timings: [''],
    applicant_seminar_details: [''],
    applicant_registeration: [''],
    seminar_location: [''],
    seminar_available_timings: ['']
}

export default function ApplicantReducer(state = initialState, action) {
    switch (action.type) {
        case applicantRegisteration:
            return { ...state, applicant_registeration: action.data }
        case applicantSeminarDetails:
            return { ...state, applicant_seminar_details: action.data }
        case seminarAvailableTimings:
            return{...state, seminar_available_timings: action.data}
        default:
            return { ...state }
    }
}

