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
                            <Grid container>
                                <Grid xl={4} lg={4} md={5} sm={12} xs={12} item className="center">
                                    <input type="button" value="Online Seminar" />

                                </Grid>
                                <Grid xl={4} lg={4} md={5} sm={12} xs={12} item className="center">

                                    <input type="button" className="btn-two" value="In-Person Seminar" />

                                </Grid>
                                <Grid xl={4} lg={4} md={2} sm={12} xs={12} item>

                                </Grid>

                            </Grid>
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
                                <Grid container>

                                    <Grid xl={4} lg={4} md={5} sm={12} xs={12} item className="center">

                                        <input type="button" value="Tuesday" />
                                    </Grid>
                                    <Grid xl={4} lg={4} md={5} sm={12} xs={12} item className="center">

                                        <input type="button" className="btn-two" value="Thursdays" />

                                    </Grid>
                                    <Grid xl={4} lg={4} md={2} sm={12} xs={12} item>

                                    </Grid>
                                </Grid>
                            </div>
                        </div>

                        <div className="seminar-time-wrapper">
                            <h1 className="font-blue font-weight-700 ">Select Your Seminar Time</h1>
                            <div className="seminar-timing-btns-wrapper">
                                <Grid container>
                                    <Grid xl={4} lg={4} md={4} xs={12} className="center">

                                        <input type="button" className="time-btn font-weight-700" value="October 5th @ 6:00 PM" />

                                    </Grid>
                                    <Grid xl={4} lg={4} md={4} xs={12} className="center">


                                        <input type="button" className="seats-btn font-weight-700" value="15 Open Seats" />
                                    </Grid>
                                    <Grid xl={4} lg={4} md={4} xs={12} className="center">


                                        <input type="button" className="register-btn font-weight-700" value="Register" />
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