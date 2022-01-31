import MainLayout from "../components/MainLayout";
import useWindowSize from "../components/windowSize";

// MUI
import { Grid } from "@mui/material";

const MembershipCard = (props) => {
  return (
    <div
      style={{
        // width: "100%",
        display: "flex",
        // justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "gray",
        color: "white",
        paddingTop: 20,
        paddingBottom: 20,
        height: 270,
      }}
    >
      <div style={{ width: "100%", paddingRight: "15%" }}>
        <div
          style={{
            width: "100%",
            backgroundColor: "darkgray",
            paddingLeft: 22,
          }}
        >
          <h1 style={{ fontSize: 16 }}>{props.membershipType}</h1>
        </div>
      </div>
      <div style={{ width: "100%", paddingRight: 10 }}>{props.children}</div>
    </div>
  );
};

const MembershipDesktop = () => {
  return (
    <MainLayout>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginTop: 20,
        }}
      >
        <div style={{ width: "50%", textAlign: "center" }}>
          <h1
            style={{
              fontSize: 20,
              border: "3px solid #D93B3A",
              lineHeight: 1.5,
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            CONTACT KAREN +27 815006350 ON WHATSAPP TO SELCT ONE OF THE
            MEMBERSHIP OPTIONS BELOW
          </h1>
        </div>
      </div>
      <br />
      <div
        style={{
          paddingLeft: "15%",
          paddingRight: "15%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <MembershipCard membershipType="Premium Membership">
              <ul>
                <li style={{ margin: "10px 0" }}>R210 PER MONTH</li>
                <li style={{ margin: "10px 0" }}>3 TAGS</li>
                <li style={{ margin: "10px 0" }}>
                  ABILITY TO BOOK 3 WEEKS IN ADVANCE
                </li>
              </ul>
            </MembershipCard>
          </Grid>
          <Grid item xs={4}>
            <MembershipCard membershipType="Family Membership">
              <ul>
                <li style={{ margin: "10px 0" }}>R168 PER MONTH</li>
                <li style={{ margin: "10px 0" }}>2 TAGS</li>
                <li style={{ margin: "10px 0" }}>
                  ABILITY TO BOOK 1 WEEK IN ADVANCE
                </li>
              </ul>
            </MembershipCard>
          </Grid>
          <Grid item xs={4}>
            <MembershipCard membershipType="Full Membership">
              <ul>
                <li style={{ margin: "10px 0" }}>R137 PER MONTH</li>
                <li style={{ margin: "10px 0" }}>1 TAG</li>
                <li style={{ margin: "10px 0" }}>
                  ABILITY TO BOOK 1 WEEK IN ADVANCE
                </li>
              </ul>
            </MembershipCard>
          </Grid>
          <Grid item xs={4}>
            <MembershipCard membershipType="Social Membership">
              <ul>
                <li style={{ margin: "10px 0" }}>R115 PER MONTH</li>
                <li style={{ margin: "10px 0" }}>1 TAG</li>
                <li style={{ margin: "10px 0" }}>
                  ABILITY TO BOOK 1 WEEK IN ADVANCE
                </li>
              </ul>
            </MembershipCard>
          </Grid>
          <Grid item xs={4}>
            <MembershipCard membershipType="Student Membership">
              <ul>
                <li style={{ margin: "10px 0" }}>R75 PER MONTH</li>
                <li style={{ margin: "10px 0" }}>1 TAG</li>
                <li style={{ margin: "10px 0" }}>
                  ABILITY TO BOOK 1 WEEK IN ADVANCE
                </li>
              </ul>
            </MembershipCard>
          </Grid>
          <Grid item xs={4}>
            <MembershipCard membershipType="Scholar Membership">
              <ul>
                <li style={{ margin: "10px 0" }}>R50 PER MONTH</li>
                <li style={{ margin: "10px 0" }}>1 TAG</li>
                <li style={{ margin: "10px 0" }}>
                  ABILITY TO BOOK 1 WEEK IN ADVANCE
                </li>
              </ul>
            </MembershipCard>
          </Grid>
          <Grid item xs={4}>
            <MembershipCard membershipType="Free Lights">
              <ul>
                <li style={{ margin: "10px 0" }}>FAMILY</li>
                <li style={{ margin: "10px 0" }}>R4700 PER YEAR</li>
                <li style={{ margin: "10px 0" }}>3 TAGS</li>
                <li style={{ margin: "10px 0" }}>
                  ABILITY TO BOOK 3 WEEKS IN ADVANCE
                </li>
                <li style={{ margin: "10px 0" }}>NO LIGHT FEES</li>
              </ul>
            </MembershipCard>
          </Grid>
          <Grid item xs={4}>
            <MembershipCard membershipType="Free lights">
              <ul>
                <li style={{ margin: "10px 0" }}>INDIVIDUAL</li>
                <li style={{ margin: "10px 0" }}>R3700 PER YEAR</li>
                <li style={{ margin: "10px 0" }}>2 TAGS</li>
                <li style={{ margin: "10px 0" }}>
                  ABILITY TO BOOK 1 WEEK IN ADVANCE
                </li>
                <li style={{ margin: "10px 0" }}>NO LIGHT FEES</li>
              </ul>
            </MembershipCard>
          </Grid>
          <Grid item xs={4}>
            <MembershipCard membershipType="PENSIONERS">
              <ul>
                <li style={{ margin: "10px 0" }}>R90 PER MONTH</li>
                <li style={{ margin: "10px 0" }}>1 TAG</li>
                <li style={{ margin: "10px 0" }}>
                  ABILITY TO BOOK 1 WEEK IN ADVANCE
                </li>
              </ul>
            </MembershipCard>
          </Grid>
          <Grid item xs={4} />
          <Grid item xs={4}>
            <MembershipCard membershipType="LIGHT FEES">
              <ul>
                <li style={{ margin: "10px 0" }}>R30 FOR 60 MINS</li>
              </ul>
            </MembershipCard>
          </Grid>
          <Grid item xs={4} />
        </Grid>
      </div>
    </MainLayout>
  );
};

const MembershipMobile = () => {
  return (
    <MainLayout>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginTop: 20,
        }}
      >
        <div style={{ width: "50%", textAlign: "center" }}>
          <h1
            style={{
              fontSize: 20,
              border: "3px solid #D93B3A",
              lineHeight: 1.5,
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            CONTACT KAREN +27 815006350 ON WHATSAPP TO SELCT ONE OF THE
            MEMBERSHIP OPTIONS BELOW
          </h1>
        </div>
      </div>
      <br />
      <div
        style={{
          paddingLeft: "15%",
          paddingRight: "15%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <MembershipCard membershipType="Premium Membership">
              <ul>
                <li style={{ margin: "10px 0" }}>R210 PER MONTH</li>
                <li style={{ margin: "10px 0" }}>3 TAGS</li>
                <li style={{ margin: "10px 0" }}>
                  ABILITY TO BOOK 3 WEEKS IN ADVANCE
                </li>
              </ul>
            </MembershipCard>
          </Grid>
          <Grid item xs={12}>
            <MembershipCard membershipType="Family Membership">
              <ul>
                <li style={{ margin: "10px 0" }}>R168 PER MONTH</li>
                <li style={{ margin: "10px 0" }}>2 TAGS</li>
                <li style={{ margin: "10px 0" }}>
                  ABILITY TO BOOK 1 WEEK IN ADVANCE
                </li>
              </ul>
            </MembershipCard>
          </Grid>
          <Grid item xs={12}>
            <MembershipCard membershipType="Full Membership">
              <ul>
                <li style={{ margin: "10px 0" }}>R137 PER MONTH</li>
                <li style={{ margin: "10px 0" }}>1 TAG</li>
                <li style={{ margin: "10px 0" }}>
                  ABILITY TO BOOK 1 WEEK IN ADVANCE
                </li>
              </ul>
            </MembershipCard>
          </Grid>
          <Grid item xs={12}>
            <MembershipCard membershipType="Social Membership">
              <ul>
                <li style={{ margin: "10px 0" }}>R115 PER MONTH</li>
                <li style={{ margin: "10px 0" }}>1 TAG</li>
                <li style={{ margin: "10px 0" }}>
                  ABILITY TO BOOK 1 WEEK IN ADVANCE
                </li>
              </ul>
            </MembershipCard>
          </Grid>
          <Grid item xs={12}>
            <MembershipCard membershipType="Student Membership">
              <ul>
                <li style={{ margin: "10px 0" }}>R75 PER MONTH</li>
                <li style={{ margin: "10px 0" }}>1 TAG</li>
                <li style={{ margin: "10px 0" }}>
                  ABILITY TO BOOK 1 WEEK IN ADVANCE
                </li>
              </ul>
            </MembershipCard>
          </Grid>
          <Grid item xs={12}>
            <MembershipCard membershipType="Scholar Membership">
              <ul>
                <li style={{ margin: "10px 0" }}>R50 PER MONTH</li>
                <li style={{ margin: "10px 0" }}>1 TAG</li>
                <li style={{ margin: "10px 0" }}>
                  ABILITY TO BOOK 1 WEEK IN ADVANCE
                </li>
              </ul>
            </MembershipCard>
          </Grid>
          <Grid item xs={12}>
            <MembershipCard membershipType="Free Lights">
              <ul>
                <li style={{ margin: "10px 0" }}>FAMILY</li>
                <li style={{ margin: "10px 0" }}>R4700 PER YEAR</li>
                <li style={{ margin: "10px 0" }}>3 TAGS</li>
                <li style={{ margin: "10px 0" }}>
                  ABILITY TO BOOK 3 WEEKS IN ADVANCE
                </li>
                <li style={{ margin: "10px 0" }}>NO LIGHT FEES</li>
              </ul>
            </MembershipCard>
          </Grid>
          <Grid item xs={12}>
            <MembershipCard membershipType="Free lights">
              <ul>
                <li style={{ margin: "10px 0" }}>INDIVIDUAL</li>
                <li style={{ margin: "10px 0" }}>R3700 PER YEAR</li>
                <li style={{ margin: "10px 0" }}>2 TAGS</li>
                <li style={{ margin: "10px 0" }}>
                  ABILITY TO BOOK 1 WEEK IN ADVANCE
                </li>
                <li style={{ margin: "10px 0" }}>NO LIGHT FEES</li>
              </ul>
            </MembershipCard>
          </Grid>
          <Grid item xs={12}>
            <MembershipCard membershipType="PENSIONERS">
              <ul>
                <li style={{ margin: "10px 0" }}>R90 PER MONTH</li>
                <li style={{ margin: "10px 0" }}>1 TAG</li>
                <li style={{ margin: "10px 0" }}>
                  ABILITY TO BOOK 1 WEEK IN ADVANCE
                </li>
              </ul>
            </MembershipCard>
          </Grid>
          <Grid item xs={12}>
            <MembershipCard membershipType="LIGHT FEES">
              <ul>
                <li style={{ margin: "10px 0" }}>R30 FOR 60 MINS</li>
              </ul>
            </MembershipCard>
          </Grid>
        </Grid>
      </div>
    </MainLayout>
  );
};

const Membership = () => {
  const size = useWindowSize();
  return (
    <div>
      {size.width > 1000 ? <MembershipDesktop /> : <MembershipMobile />}
    </div>
  );
};

export default Membership;
