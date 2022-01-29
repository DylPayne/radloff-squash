import MainLayout from "../components/MainLayout";
import useWindowSize from "../components/windowSize";

// MUI
import { Grid } from "@mui/material";

const CommiteeCard = (props) => {
  return (
    <div style={{ backgroundColor: "#D93B3A", width: "100%", height: "400px" }}>
      <div
        style={{
          height: "70%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // border: "1px solid black",
        }}
      >
        <div>
          <p>Image to go here</p>
        </div>
      </div>
      <div
        style={{
          height: "15%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "gray",
          // border: "1px solid black"
        }}
      >
        <div>
          <h2>Name to go here</h2>
        </div>
      </div>
      <div
        style={{
          height: "15%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "darkgray",
          // border: "1px solid black"
        }}
      >
        <div>
          <p>Role to go here</p>
        </div>
      </div>
    </div>
  );
};

const CommiteeDesktop = (props) => {
  return (
    <MainLayout>
      <br />
      <div style={{ paddingLeft: 150, paddingRight: 150 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <CommiteeCard />
          </Grid>
          <Grid item xs={4}>
            <CommiteeCard />
          </Grid>
          <Grid item xs={4}>
            <CommiteeCard />
          </Grid>
          <Grid item xs={4}>
            <CommiteeCard />
          </Grid>
          <Grid item xs={4}>
            <CommiteeCard />
          </Grid>
          <Grid item xs={4}>
            <CommiteeCard />
          </Grid>
        </Grid>
      </div>
    </MainLayout>
  );
};

const CommiteeMobile = (props) => {
  return (
    <MainLayout>
      <br />
      <div style={{ paddingLeft: 20, paddingRight: 20 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <CommiteeCard />
          </Grid>
          <Grid item xs={12}>
            <CommiteeCard />
          </Grid>
          <Grid item xs={12}>
            <CommiteeCard />
          </Grid>
          <Grid item xs={12}>
            <CommiteeCard />
          </Grid>
          <Grid item xs={12}>
            <CommiteeCard />
          </Grid>
          <Grid item xs={12}>
            <CommiteeCard />
          </Grid>
        </Grid>
      </div>
    </MainLayout>
  );
};

const Commitee = () => {
  const size = useWindowSize();
  return (
    <div>{size.width > 1100 ? <CommiteeDesktop /> : <CommiteeMobile />}</div>
  );
};

export default Commitee;
