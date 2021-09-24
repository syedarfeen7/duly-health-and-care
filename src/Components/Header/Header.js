import { Container, Grid } from "@mui/material";
import '../../Style/HeaderStyling/style.css';
import '../../Style/GeneralizeStyle/style.css';
export default function Header() {
    return <>

        <Grid container>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <header>
                    <div className="header-wrapper">

                        <div className="brand-logo">
                            <img src="/images/brand-logo.png" alt="brand-logo"/>
                        </div>
                        <div>
                            <input type="button" className="header-btn" value="Register By Phone: 1-855-433-4070" />
                        </div>
                    </div>
                    <div className="header-bottom-text background-color-blue">
                        <img src="/images/Vector.png" alt="bell-icon" />
                        <p className="font-weight-700">Medicare Annual Enrollment Period Starts October 1st</p>
                    </div>
                </header>
            </Grid>
        </Grid>
    </>
}