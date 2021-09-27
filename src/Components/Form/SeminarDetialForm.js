import { Container, Grid } from "@mui/material";
import '../../Style/GeneralizeStyle/style.css';
import '../../Style/Form/style.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { seminarDetialsScheema, seminarLocationScheema } from '../../Helper/Validator/validation';
import { ApplicantSeminarDetails, SeminarTimings } from '../../Store/Actions/applicantAction';
import { useHistory } from "react-router";

export default function SeminarDetailForm() {
    const history = useHistory()
    const dispatch = useDispatch()
    const [seminarType, setSeminarType] = useState('');
    const [seminarLocation, setSeminarLocation] = useState('');
    const [seminarDay, setSeminarDay] = useState('');
    const [seminarTime, setSeminarTime] = useState('');
    const [timings, setTiming] = useState([])
    const [onlineSeminar, setOnlineSeminar] = useState([]);
    const [inPersonSeminar, setInPersonSeminar] = useState([])

    // HARD CODED SEMINAR TIMINGS
    let availableTimings = [
        {
            seminarTime: 'October 5th @ 6:00 PM',
            seminarSeats: '15 Open Seats',
            seminarType: 'Online'
        },
        {
            seminarTime: 'October 7th @ 6:00 PM',
            seminarSeats: '15 Open Seats',
            seminarType: 'Online'
        },
        {
            seminarTime: 'October 12th @ 6:00 PM',
            seminarSeats: '15 Open Seats',
            seminarType: 'Online'
        },
        {
            seminarTime: 'October 14th @ 6:00 PM',
            seminarSeats: '15 Open Seats',
            seminarType: 'In-Person Seminar'
        },
        {
            seminarTime: 'October 19th @ 6:00 PM',
            seminarSeats: '15 Open Seats',
            seminarType: 'Online'
        },
        {
            seminarTime: 'October 21st @ 6:00 PM',
            seminarSeats: '15 Open Seats',
            seminarType: 'In-Person Seminar'
        },
        {
            seminarTime: 'October 19th @ 6:00 PM',
            seminarSeats: '15 Open Seats',
            seminarType: 'In-Person Seminar'
        },
        {
            seminarTime: 'October 21st @ 6:00 PM',
            seminarSeats: '15 Open Seats',
            seminarType: 'Online'
        },
    ]

    // GETTING SEMINAR TIMINGS FROM STORE
    let seminarTimings = useSelector(state => state.seminar_available_timings)
    useEffect(() => {
        // GETTING SEMINAR TIMINGS
        gettingSeminarTimings()

        // DISPATCHING IT TO STORE TO GET THE TIMINGS
        dispatch(SeminarTimings(availableTimings))

        // FILTERED TIMINGS ON THE BASIS OF SEMINAR TYPE
        setInPersonSeminar(availableTimings.filter(ele => ele.seminarType === "In-Person Seminar"))
        setOnlineSeminar(availableTimings.filter(ele => ele.seminarType === "Online"))
    }, [])

    const gettingSeminarTimings = () => {
        setTiming(seminarTimings)
    }

    // SAVING THE SEMINAR DETAILS TO STORE
    const saveSeminarDetails = async (e) => {
        e.preventDefault()
        let data = { seminarType, seminarDay, seminarLocation, seminarTime }

        // VALIDATING THE SEMINAR DETAILS
        await seminarDetialsScheema.strict().validate(data)
            .then(res => {

                dispatch(ApplicantSeminarDetails(res))
                if (seminarType === "Online") {
                    history.push('/duly-register')
                }

            })
            .catch(err => {
                console.log(err.path)
                document.querySelectorAll(".error-msg").forEach((i) => { i.innerHTML = "" })
                document.querySelector(`#${err.path}`).innerHTML = err.message
            })

        //  IF SEMINAR TYPE NOT ONLINE THEN HERE SEMINAL LOCATION VALIDATION COMES
        if (seminarType === "In-Person Seminar") {
            await seminarLocationScheema.strict().validate({ seminarLocation })
                .then(res => {
                    history.push('/duly-register')
                })
                .catch(err => {
                    console.log(err.path)
                    document.querySelectorAll(".error-msg").forEach((i) => { i.innerHTML = "" })
                    document.querySelector(`#${err.path}`).innerHTML = err.message
                })
        }


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
                                        <input type="radio" name="type" value="Online" onClick={(e) => { setSeminarType(e.target.value) }} />
                                        <div>
                                            <p className="radio-option-text">Online</p>
                                        </div>
                                    </label>
                                </Grid>
                                <Grid xl={4} lg={4} md={5} sm={12} xs={12} item className="center">
                                    <label className="labl">
                                        <input type="radio" name="type" value="In-Person Seminar" onClick={(e) => { setSeminarType(e.target.value) }} />
                                        <div>
                                            <p className=" radio-option-text">In-Person Seminar</p>
                                        </div>
                                    </label>


                                </Grid>
                                <Grid xl={4} lg={4} md={2} sm={12} xs={12} item>

                                </Grid>

                            </Grid>
                        </div>
                        <Grid item xl={12} xs={12}>

                            {/* IF SEMINAR TYPE ONLINE THE HIDE THE SEMINAR LOCATIONS */}
                            {seminarType === "Online" ?

                                <></>
                                :
                                <>
                                    <div className="seminar-details-location-wrapper">
                                        <h1 className="font-blue font-weight-700 ">Select Your Seminar Location</h1>
                                        <div id="seminarLocation" className="red-text error-msg"></div>
                                        <div className="seminar-locations-list">
                                            <label className="label">
                                                <input type="radio" name="location" value="Glen Ellyn" onClick={(e) => { setSeminarLocation(e.target.value) }} />
                                                <div>
                                                    <p className="font-blue font-weight-700 radio-option-text">Glen Ellyn</p>
                                                </div>
                                            </label>
                                            <label className="label">
                                                <input type="radio" name="location" value="Hoffman Estates" onClick={(e) => { setSeminarLocation(e.target.value) }} />
                                                <div>
                                                    <p className="font-blue font-weight-700 radio-option-text">Hoffman Estates</p>
                                                </div>
                                            </label>
                                            <label className="label">
                                                <input type="radio" name="location" value="Joliets" onClick={(e) => { setSeminarLocation(e.target.value) }} />
                                                <div>
                                                    <p className="font-blue font-weight-700 radio-option-text">Joliet</p>
                                                </div>
                                            </label>
                                            <label className="label">
                                                <input type="radio" name="location" value="Lisle" onClick={(e) => { setSeminarLocation(e.target.value) }} />
                                                <div>
                                                    <p className="font-blue font-weight-700 radio-option-text">Lisle</p>
                                                </div>
                                            </label>
                                            <label className="label">
                                                <input type="radio" name="location" value="Hoffman Estates" onClick={(e) => { setSeminarLocation(e.target.value) }} />
                                                <div>
                                                    <p className="font-blue font-weight-700 radio-option-text">Lombard</p>
                                                </div>
                                            </label>
                                            <label className="label">
                                                <input type="radio" name="location" value="Hoffman Estates" onClick={(e) => { setSeminarLocation(e.target.value) }} />
                                                <div>
                                                    <p className="font-blue font-weight-700 radio-option-text">Tinley Park</p>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </>
                            }

                        </Grid>
                        <div className="seminar-type-wrapper seminar-day-wrapper">
                            <h1 className="font-blue font-weight-700">Select Your Seminar Day</h1>
                            <div id="seminarDay" className="red-text error-msg"></div>
                            <div className="seminar-type-btns">

                                <Grid container>

                                    {/* IF SEMINAR TYPE IS ONLINE THEN SHOW ONLY WEDNESDAY DAY */}
                                    {seminarType === "Online" ?
                                        <>
                                            <Grid xl={4} lg={4} md={5} sm={12} xs={12} item className="center">
                                                <label className="labl">
                                                    <input type="radio" name="day" value="Wednesday" onChange={(e) => { setSeminarDay(e.target.value) }} />
                                                    <div>
                                                        <p className="main-section-font-color radio-option-text">Wednesday</p>
                                                    </div>
                                                </label>
                                            </Grid>
                                            <Grid xl={4} lg={4} md={5} sm={12} xs={12} item className="center"></Grid>
                                            <Grid xl={4} lg={4} md={2} sm={12} xs={12} item></Grid>
                                        </>
                                        :
                                        <>

                                            <Grid xl={4} lg={4} md={5} sm={12} xs={12} item className="center">
                                                <label className="labl">
                                                    <input type="radio" name="day" value="Tuesday" onClick={(e) => { setSeminarDay(e.target.value) }} />
                                                    <div>
                                                        <p className="main-section-font-color radio-option-text">Tuesday</p>
                                                    </div>
                                                </label>
                                            </Grid>
                                            <Grid xl={4} lg={4} md={5} sm={12} xs={12} item className="center">
                                                <label className="labl">
                                                    <input type="radio" name="day" value="Thursday" onChange={(e) => { setSeminarDay(e.target.value) }} />
                                                    <div>
                                                        <p className="main-section-font-color radio-option-text">Thursday</p>
                                                    </div>
                                                </label>
                                            </Grid>
                                            <Grid xl={4} lg={4} md={2} sm={12} xs={12} item>

                                            </Grid>
                                        </>
                                    }
                                </Grid>
                            </div>
                        </div>

                        <div className="seminar-time-wrapper">
                            <h1 className="font-blue font-weight-700 ">Select Your Seminar Time</h1>
                            <div id="seminarTime" className="red-text error-msg"></div>
                            <div className="seminar-timing-btns-wrapper">

                                {/* IF SEMINAR TYPE ONLINE THEN SHOW THE AVAILABLE TIMINGS FOR ONLINE SEMINAR */}
                                {seminarType === "Online" ?
                                    <>
                                        {onlineSeminar.map(a =>

                                            <Grid container className="seminar-time-seat-register--wrapper">

                                                <Grid item xl={4} lg={4} md={4} xs={12} className="center">
                                                    <label className="labl">
                                                        <input type="radio" name="time" value={a.seminarTime} onClick={(e) => { setSeminarTime(e.target.value) }} />
                                                        <div className="time">
                                                            <p className="main-section-font-color radio-option-text">{a.seminarTime}</p>
                                                        </div>
                                                    </label>

                                                </Grid>
                                                <Grid item xl={4} lg={4} md={4} xs={12} className="center">


                                                    <input type="button" className="seats-btn font-weight-700" value={a.seminarSeats} />
                                                </Grid>
                                                <Grid item xl={4} lg={4} md={4} xs={12} className="center">
                                                    <input type="button" className="register-btn font-weight-700" value="Register" onClick={saveSeminarDetails} />
                                                </Grid>
                                            </Grid>
                                        )}
                                    </>
                                    :
                                    <>
                                        {/* IF SEMINAR TYPE IS NOT ONLINE THEN SHOW THE AVAILABLE TIMINGS FOR IN PERSON SEMINAR */}
                                        {seminarType === "In-Person Seminar" ?
                                            <>
                                                {inPersonSeminar.map(a =>

                                                    <Grid container className="seminar-time-seat-register--wrapper">

                                                        <Grid item xl={4} lg={4} md={4} xs={12} className="center">
                                                            <label className="labl">
                                                                <input type="radio" name="time" value={a.seminarTime} onClick={(e) => { setSeminarTime(e.target.value) }} />
                                                                <div className="time">
                                                                    <p className="main-section-font-color radio-option-text">{a.seminarTime}</p>
                                                                </div>
                                                            </label>

                                                        </Grid>
                                                        <Grid item xl={4} lg={4} md={4} xs={12} className="center">


                                                            <input type="button" className="seats-btn font-weight-700" value={a.seminarSeats} />
                                                        </Grid>
                                                        <Grid item xl={4} lg={4} md={4} xs={12} className="center">
                                                            <input type="button" className="register-btn font-weight-700" value="Register" onClick={saveSeminarDetails} />
                                                        </Grid>
                                                    </Grid>
                                                )}
                                            </>

                                            :

                                            // FOR IDEAL CASE ALL TIMINGS AVAILABLE
                                            <>
                                                {timings.map(a =>

                                                    <Grid container className="seminar-time-seat-register--wrapper">

                                                        <Grid item xl={4} lg={4} md={4} xs={12} className="center">
                                                            <label className="labl">
                                                                <input type="radio" name="time" value={a.seminarTime} onClick={(e) => { setSeminarTime(e.target.value) }} />
                                                                <div className="time">
                                                                    <p className="main-section-font-color radio-option-text">{a.seminarTime}</p>
                                                                </div>
                                                            </label>

                                                        </Grid>
                                                        <Grid item xl={4} lg={4} md={4} xs={12} className="center">


                                                            <input type="button" className="seats-btn font-weight-700" value={a.seminarSeats} />
                                                        </Grid>
                                                        <Grid item xl={4} lg={4} md={4} xs={12} className="center">
                                                            <input type="button" className="register-btn font-weight-700" value="Register" onClick={saveSeminarDetails} />
                                                        </Grid>
                                                    </Grid>
                                                )}
                                            </>

                                        }
                                    </>
                                }


                            </div>
                        </div>
                    </form>
                </div>
            </Grid>
        </Grid>
    </>
}