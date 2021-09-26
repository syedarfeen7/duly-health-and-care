import { Container, Grid } from "@mui/material";
import '../../Style/HeaderStyling/style.css';
import '../../Style/GeneralizeStyle/style.css';
import { useLocation } from "react-router";
import { useState, useEffect } from "react";
export default function Header() {
    const location = useLocation();
    const [isRegisterPage, setIsRegisterPage] = useState(false)

    useEffect(() => {
        if (location.pathname === "/duly-register") {
            setIsRegisterPage(true)
        }
    }, [])
    return <>

        <Grid container>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <header>
                    <div className="header-wrapper">

                        <div className="brand-logo">
                            <img src="/images/brand-logo.png" alt="brand-logo" />
                        </div>
                        <div>
                            <h3 className="header-btn">Register By Phone: 1-855-433-4070</h3>

                        </div>
                    </div>
                    {isRegisterPage ?
                        <></>
                        :

                        <>

                            <div className="header-bottom-text background-color-blue">
                                <img src="/images/Vector.png" alt="bell-icon" />
                                <p className="font-weight-700 header-text">Medicare Annual Enrollment Period Starts October 1st</p>
                            </div>
                        </>
                    }

                </header>
            </Grid>
        </Grid>
    </>
}