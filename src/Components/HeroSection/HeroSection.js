import { Container, Grid } from "@mui/material";
import '../../Style/HeroSectionStyle/style.css'
export default function HeroSection() {
    return <>
        <Grid container>

            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                <div className="hero-banner-image-wrapper">
                    <img src="/images/peson.png" />
                </div>
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                <div className="seminar-location-wrapper">
                    <h3 className="background-color-blue font-weight-700">
                        Seminar Locations
                    </h3>
                </div>
            </Grid>
        </Grid>
    </>
}