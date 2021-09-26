import { applicantRegisteration, applicantSeminarDetails } from '../Actions/applicantAction';
const initialState = {
    seminar_timings: [''],
    applicant_seminar_details: [''],
    applicant_registeration: [''],
    seminar_location: [''],
    seminar_available_timings: [
        {
        seminarTime: 'October 5th @ 6:00 PM',
        seminarSeats: '15 Open Seats',
        },
        {
        seminarTime: 'October 5th @ 6:00 PM',
        seminarSeats: '15 Open Seats',
        }
]
}

export default function ApplicantReducer(state = initialState, action) {
    switch (action.type) {
        case applicantRegisteration:
            return { ...state, applicant_registeration: action.data }
        case applicantSeminarDetails:
            return { ...state, applicant_seminar_details: action.data }
        default:
            return { ...state }
    }
}

