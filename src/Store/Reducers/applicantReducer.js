
const initialState = {
    seminar_timings: [''],
    applicant_registeration: [''],
    seminar_location: ['']
}

export default function ApplicantReducer(state = initialState, action) {
    switch (action.type) {
        case 'APPLICANT_REGISTERATION':
            return { ...state, applicant_registeration: action.data }
        default:
            return { ...state }
    }
}