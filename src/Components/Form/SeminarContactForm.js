import { Grid } from "@mui/material";
import { TextField, FormControl } from "@mui/material";
import '../../Style/Form/style.css';
import '../../Style/GeneralizeStyle/style.css';
export default function SeminarContactForm() {
    return <>
        <Grid container className="border-top">
            <Grid item xl={12} xs={12}>
                <form>
                    <div className="seminar-register-heading">
                        <h1 className="font-grey font-weight-700">Seminar Registration</h1>
                    </div>
                    <div className="contact-form">
                        <h3 className="font-grey font-weight-700 contact-info-head">Contact Information</h3>
                
                         <input type="text" placeholder="First Name"/>
                        <br />
                        <input type="text" placeholder="Last Name"/>
                        <br />
                        <input type="email" placeholder="Email Address"/>
                        <br />
                        <label className="font-grey font-weight-700 seminar-date">
                            Seminar Date
                            <br />
                            <input type="text" placeholder="Seminar Date"/>
                        </label> 
                        <br />

                        <input type="submit" value="Submit" className="submit-btn"/>
                    </div>
                </form>
            </Grid>
        </Grid>
    </>
}