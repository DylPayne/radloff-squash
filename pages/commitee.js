import MainLayout from "../components/MainLayout";
import useWindowSize from "../components/windowSize";
import Image from "next/image";

// MUI
import { Grid } from "@mui/material";

const CommiteeCard = (props) => {
  const name = props.name;
  const src = props.src;
  const description = props.description;

  return (
    <div style={{ backgroundColor: "#4a4a4a", width: "100%", height: "400px" }}>
      <div
        style={{
          height: "70%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          clipPath: "circle(120px)",
          // border: "1px solid black",
        }}
      >
        <div>
          <img src={src} style={{ width: 270, height: 270 }} />
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
          <h2>{name}</h2>
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
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

const CommiteeDesktop = (props) => {
  return (
    <MainLayout>
      <br />
      <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <div style={{ width: 1000 }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <CommiteeCard
                src="/willem.webp"
                name="Willem Karsten"
                description="Chairman"
              />
            </Grid>
            <Grid item xs={4}>
              <CommiteeCard
                src="/richard.png"
                name="Richard Castle"
                description="Vice Chairman"
              />
            </Grid>
            <Grid item xs={4}>
              <CommiteeCard
                src="/yolande.png"
                name="Yolande Castle"
                description="Manager"
              />
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={4}>
              <CommiteeCard
                src="/albert.jpg"
                name="Albert Havenga"
                description="Treasurer"
              />
            </Grid>
            <Grid item xs={4}>
              <CommiteeCard
                src="/richard.png"
                name="Richard Castle"
                description="Vice Chairman"
              />
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
        </div>
      </div>
    </MainLayout>
  );
};

const CommiteeMobile = (props) => {
  return (
    <MainLayout>
      <br />
      <div style={{ display: "flex", justifyContent: "center", width: "100%", paddingLeft: 20, paddingRight: 20 }}>
        <div style={{ maxWidth: 320 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <CommiteeCard
                src="/willem.webp"
                name="Willem Karsten"
                description="Chairman"
              />
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
