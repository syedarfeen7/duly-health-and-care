import { Container, Grid } from "@mui/material";
import '../../Style/HeroSectionStyle/style.css';
import '../../Style/GeneralizeStyle/style.css';
export default function HeroSection() {
    return <>
        <Grid container>

            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                <div className="hero-banner-image-wrapper">
                    <img src="/images/peson.png" />
                </div>
                <div className="medicare-wrapper">
                    <h1 className="font-blue font-weight-700">Medicare 101 Seminars</h1>
                    <h3 className="font-blue font-weight-700">Learn about your Medicare coverage online or in person</h3>
                    <p className="font-weight-700 font-grey">Choos­ing the right Medicare plan can feel over­whelm­ing. Duly Health and Care wants
                        you to under­stand your cov­er­age options and how they affect your health.
                        Our seminars are to help simplify your Medicare options, so you can feel con­fi­dent in mak­ing an
                        informed deci­sion. If you have ques­tions con­cern­ing Medicare, we encour­age patients
                        to sched­ule an annu­al ben­e­fit review with a licensed rep­re­sen­ta­tive. If you do not
                        cur­rent­ly work with a local insur­ance agent, please call the Integri­ty Medicare Helpline
                        at 1−855−205−2037 to sched­ule an appoint­ment with a licensed advisor.</p>
                </div>

               
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                <div className="seminar-location-wrapper hide-grid">
                    <h3 className="background-color-blue font-weight-700">
                        Seminar Locations
                    </h3>
                    <p className="seminar-location font-black font-weight-700">Glen Ellyn</p>
                    <p className="seminar-location font-black font-weight-700">Hoffman Estates</p>
                    <p className="seminar-location font-black font-weight-700">Joliet</p>
                    <p className="seminar-location font-black font-weight-700">Lisle</p>
                    <p className="seminar-location font-black font-weight-700">Lombard</p>
                    <p className="seminar-location font-black font-weight-700">Tinley Park</p>
                    <p className="seminar-location font-black font-weight-700">Online</p>
                </div>
            </Grid>
        </Grid>
    </>
}