import { Container, Grid } from "@mui/material";
import '../../Style/GeneralizeStyle/style.css';
import '../../Style/Form/style.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {seminarDetialsScheema} from '../../Helper/Validator/validation';
import {ApplicantSeminarDetails} from '../../Store/Actions/applicantAction';
import { useHistory } from "react-router";
export default function SeminarDetailForm() {
    const history = useHistory()
    const dispatch = useDispatch()
    const [seminarType, setSeminarType] = useState('');
    const [seminarLocation, setSeminarLocation] = useState('');
    const [seminarDay, setSeminarDay] = useState('');
    const [seminarTime, setSeminarTime] = useState('');
    const [timings, setTiming] = useState('')
    useEffect(() => {
        gettingSeminarTimings()
    }, [])
    const seminarTimings = useSelector(state => state.seminar_available_timings)
    const gettingSeminarTimings = () => {
            setTiming(seminarTimings)
    }
    // console.log(timings)
    // console.log(timings.map(a => {console.log(a.seminarTime)}))

    const saveSeminarDetails =  async(e) => {
        e.preventDefault() 
        let data ={seminarType, seminarDay, seminarLocation, seminarTime}
        console.log(data)
        await seminarDetialsScheema.strict().validate(data)
            .then(res => {
                console.log(res)
                dispatch(ApplicantSeminarDetails(data))
                history.push('/duly-register')
            })
            .catch(err => {
                console.log(err.path)
                document.querySelectorAll(".error-msg").forEach((i) => { i.innerHTML = "" })
                document.querySelector(`#${err.path}`).innerHTML = err.message
            })

    }
    return <>
        <Grid container>
            <Grid xl={12} xs={12} item>
                <div>
                    <form className="seminar-details-form" onSubmit={saveSeminarDetails}>
                        <div className="seminar-type-wrapper">
                            <h1 className="font-blue font-weight-700">Select Your Seminar Type</h1>
                            <div id="seminarType" className="red-text error-msg"></div>
                            <Grid container>
                                <Grid xl={4} lg={4} md={5} sm={12} xs={12} item className="center">
                                    <label className="labl">
                                        <input type="radio" name="type" value="Online" onClick={(e) => {setSeminarType(e.target.value)}}/>
                                        <div>
                                            <p className="main-section-font-color radio-option-text">Online</p>
                                        </div>
                                    </label>
                                </Grid>
                                <Grid xl={4} lg={4} md={5} sm={12} xs={12} item className="center">
                                    <label className="labl">
                                        <input type="radio" name="type" value="In-Person Seminar" onClick={(e) => {setSeminarType(e.target.value)}}/>
                                        <div>
                                            <p className="main-section-font-color radio-option-text">In-Person Seminar</p>
                                        </div>
                                    </label>


                                </Grid>
                                <Grid xl={4} lg={4} md={2} sm={12} xs={12} item>

                                </Grid>

                            </Grid>
                        </div>
                        <div className="seminar-details-location-wrapper">
                            <h1 className="font-blue font-weight-700 ">Select Your Seminar Location</h1>
                            <div id="seminarLocation" className="red-text error-msg"></div>
                            <div className="seminar-locations-list">
                                <p className="font-green font-weight-700">Hoffman Estates</p>
                                <p className="font-green font-weight-700">Joliet</p>
                                <p className="font-green font-weight-700">Lisle</p>
                                <p className="font-green font-weight-700">Lombard</p>
                                <p className="font-green font-weight-700">Tinley Park</p>
                            </div>
                        </div>
                        <div className="seminar-type-wrapper seminar-day-wrapper">
                            <h1 className="font-blue font-weight-700">Select Your Seminar Day</h1>
                            <div id="seminarDay" className="red-text error-msg"></div>
                            <div className="seminar-type-btns">
                                <Grid container>
                                    {/* {timings.map(a => 
                                        console.log(a.seminarTime)
                                    )} */}
                                    <Grid xl={4} lg={4} md={5} sm={12} xs={12} item className="center">
                                        <label className="labl">
                                            <input type="radio" name="day" value="Tuesday" onClick={(e) => {setSeminarDay(e.target.value)}} />
                                            <div>
                                                <p className="main-section-font-color radio-option-text">Tuesday</p>
                                            </div>
                                        </label>
                                    </Grid>
                                    <Grid xl={4} lg={4} md={5} sm={12} xs={12} item className="center">
                                        <label className="labl">
                                            <input type="radio" name="day" value="Thursday" onChange={(e) => {setSeminarDay(e.target.value)}}/>
                                            <div>
                                                <p className="main-section-font-color radio-option-text">Thursday</p>
                                            </div>
                                        </label>
                                    </Grid>
                                    <Grid xl={4} lg={4} md={2} sm={12} xs={12} item>

                                    </Grid>
                                </Grid>
                            </div>
                        </div>

                        <div className="seminar-time-wrapper">
                            <h1 className="font-blue font-weight-700 ">Select Your Seminar Time</h1>
                            <div id="seminarTime" className="red-text error-msg"></div>
                            <div className="seminar-timing-btns-wrapper">
                                <Grid container>
                                    <Grid xl={4} lg={4} md={4} xs={12} className="center">

                                        <input type="button" label="fifteen" className="time-btn font-weight-700" value="October 5th @ 6:00 PM" onClick={(e) => {setSeminarTime(e.target.value)}}/>

                                    </Grid>
                                    <Grid xl={4} lg={4} md={4} xs={12} className="center">


                                        <input type="button" className="seats-btn font-weight-700" value="15 Open Seats" />
                                    </Grid>
                                    <Grid xl={4} lg={4} md={4} xs={12} className="center">


                                        <input type="button" className="register-btn font-weight-700" value="Register" onClick={saveSeminarDetails}/>
                                    </Grid>
                                </Grid>

                            </div>
                        </div>
                    </form>
                </div>
            </Grid>
        </Grid>
    </>
}