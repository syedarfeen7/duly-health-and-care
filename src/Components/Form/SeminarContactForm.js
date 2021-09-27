import { Grid } from "@mui/material";
import { TextField, FormControl } from "@mui/material";
import '../../Style/Form/style.css';
import '../../Style/GeneralizeStyle/style.css';
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {seminarContactDetailsScheema} from '../../Helper/Validator/validation';
import {ApplicantRegisteration} from '../../Store/Actions/applicantAction';
export default function SeminarContactForm() {
    const seminarDetails = useSelector(state => state.applicant_seminar_details)
    const dispatch = useDispatch()
    useEffect(() => {
        gettingSeminarDetailsFromStore()
    }, [])
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [seminarTime, setSeminarTime] = useState('');
    const [seminarType, setSeminarType] = useState('');
    const [seminarDay, setSeminarDay] = useState('');
    const [seminarLocation, setSeminarLocation] = useState('');

    const gettingSeminarDetailsFromStore = () => {
        setSeminarTime(seminarDetails.seminarTime)
        setSeminarType(seminarDetails.seminarType)
        setSeminarDay(seminarDetails.seminarDay)
        setSeminarLocation(seminarDetails.seminarLocation)
    }
    const saveSemainarContactDetials = async (e) => {
        e.preventDefault()
        let data = {firstName, lastName, email, seminarDay,seminarLocation, seminarTime, seminarType}
        console.log(data)
        await seminarContactDetailsScheema.strict().validate(data)
            .then(res => {
                console.log("success=======>", res)
                dispatch(ApplicantRegisteration(res))
            })
            .catch(err => {
                console.log(err.message)
                document.querySelectorAll(".error-msg").forEach((i) => { i.innerHTML = "" })
                document.querySelector(`#${err.path}`).innerHTML = err.message
            })

    }
    return <>
        <Grid container className="border-top">
            <Grid item xl={12} xs={12}>
                <form onSubmit={saveSemainarContactDetials}>
                    <div className="seminar-register-heading">
                        <h1 className="font-grey font-weight-700">Seminar Registration</h1>
                    </div>
                    
                    <div className="contact-form">
                        <h3 className="font-grey font-weight-700 contact-info-head">Contact Information</h3>
                        
                        <div id="firstName" className="red-text error-msg"></div>
                        <input type="text" placeholder="First Name" onChange={(e) => {setFirstName(e.target.value)}}/>
                        <br />

                        <div id="lastName" className="red-text error-msg"></div>
                        <input type="text" placeholder="Last Name" onChange={(e) => {setLastName(e.target.value)}}/>
                        <br />

                        <div id="email" className="red-text error-msg"></div>
                        <input type="email" placeholder="Email Address" onChange={(e) => {setEmail(e.target.value)}}/>
                        <br />
                        <label className="font-grey font-weight-700 seminar-date">
                            Seminar Date
                            <br />
                            <input type="text" placeholder="Seminar Date" value={seminarDetails.seminarTime}/>
                        </label> 
                        <br />

                        <input type="submit" value="Submit" className="submit-btn" onClick={saveSemainarContactDetials}/>
                    </div>
                </form>
            </Grid>
        </Grid>
    </>
}