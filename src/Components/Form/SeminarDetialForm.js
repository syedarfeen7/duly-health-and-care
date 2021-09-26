import { Container, Grid } from "@mui/material";
import '../../Style/GeneralizeStyle/style.css';
import '../../Style/Form/style.css';
import { Link } from "react-router-dom";
export default function SeminarDetailForm() {
    return <>
        <Grid container>
            <Grid xl={12} xs={12} item>
                <div>
                    <form className="seminar-details-form">
                        <div className="seminar-type-wrapper">
                            <h1 className="font-blue font-weight-700">Select Your Seminar Type</h1>
                            <input type="button" value="Online Seminar" />
                            <input type="button" className="btn-two" value="In-Person Seminar" />
                        </div>
                        <div className="seminar-details-location-wrapper">
                            <h1 className="font-blue font-weight-700 ">Select Your Seminar Location</h1>
                            <div className="seminar-locations-list">
                                <p className="font-green font-weight-700">Hoffman Estates</p>
                                <p className="font-green font-weight-700">Joliet</p>
                                <p className="font-green font-weight-700">Lisle</p>
                                <p className="font-green font-weight-700">Lombard</p>
                                <p className="font-green font-weight-700">Tinley Park</p>
                            </div>
                        </div>
                        <div className="seminar-type-wrapper seminar-day-wrappper">
                            <h1 className="font-blue font-weight-700">Select Your Seminar Day</h1>
                            <div className="seminar-type-btns">

                            <input type="button" value="Tuesday" />
                            <input type="button" className="btn-two" value="Thursdays" />
                            </div>
                        </div>

                        <div className="seminar-time-wrapper">
                            <h1 className="font-blue font-weight-700 ">Select Your Seminar Time</h1>
                            <div className="seminar-timing-btns-wrapper">
                                <input type="button" className="time-btn font-weight-700" value="October 5th @ 6:00 PM" />
                                <input type="button" className="seats-btn font-weight-700" value="15 Open Seats" />
                                <Link to={{pathname:'/duly-register'}}>
                                <input type="button" className="register-btn font-weight-700" value="Register" />
                                </Link>

                            </div>
                        </div>
                    </form>
                </div>
            </Grid>
        </Grid>
    </>
}