import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useWindowSize from "../components/windowSize";
import { useState } from "react";

import MainLayout from "../components/MainLayout";
import Image from "next/image";
import Map from "../components/Map";

const HomeDesktop = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          paddingLeft: 150,
          marginRight: 150,
          marginTop: 70,
          width: "100%",
        }}
      >
        {/* <div
          style={{
            color: "gray",
            zIndex: 1000,
            marginTop: -80,
            textAlign: "center",
          }}
        >
          <h1>WELCOME TO RAD SQUASH</h1>
        </div> */}
        <div
          style={{
            marginLeft: -150,
            marginRight: -150,
            marginTop: -20,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image
            src="/collage.png"
            alt="radloff squash collage"
            height={600}
            width={899}
          />
        </div>
        <br />
        <div
          style={{
            display: "flex",
            // border: "1px solid red",
            flexDirection: "row",
            marginLeft: -150,
            marginRight: -150,
            marginTop: 30,
            paddingTop: 100,
            paddingBottom: 100,
            backgroundColor: "#e0e0e0",
            // paddingLeft: 150,
            // paddingRight: 150,
            clipPath:
              "polygon(30% 9%, 71% 0, 100% 7%, 100% 100%, 70% 100%, 30% 100%, 0 100%, 0 4%)",
          }}
        >
          <div
            style={{
              width: "100%",
              // border: "1px solid red",
              paddingLeft: 150,
              paddingTop: 50,
              paddingBottom: 50,
              paddingRight: 150,
              display: "flex",
              backgroundColor: "#a3a3a3",
              marginTop: 50,
              marginBottom: 20,
            }}
          >
            <div
              style={{
                width: "40%",
                textAlign: "start",
                color: "#e72e3a",
                fontSize: 25,
                // border: "1px solid blue",
                display: "flex",
                flexDirection: "column",
                // width: 1000,
              }}
            >
              <div>
                <p style={{ fontFamily: "bungee, sans-serif", color: "black" }}>
                  SQUASH
                </p>
                <h1 style={{ marginTop: -60 }}>TAME</h1>
                <h1 style={{ marginTop: -100 }}>THE GAME</h1>
              </div>
              <div
                style={{
                  backgroundColor: "#e72e3a",
                  width: "100%",
                  height: 300,
                  marginTop: 50,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p style={{ color: "white", fontFamily: "bungee, sans-serif" }}>
                  Become a member today
                </p>
                <div
                  style={{
                    backgroundColor: "gray",
                    color: "white",
                    lineHeight: 0,
                    paddingLeft: 20,
                    paddingRight: 20,
                    fontFamily: "bungee, sans-serif",
                    cursor: "pointer",
                  }}
                >
                  <p>Sign Up</p>
                </div>
              </div>
            </div>
            <div
              style={{
                width: "60%",
                // border: "1px solid red",
                marginLeft: 30,
              }}
            >
              <Map />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MobileHome = () => {
  return (
    <div style={{ paddingLeft: 20, paddingRight: 20, marginTop: 20 }}>
      {/* <div
        style={{
          color: "gray",
          zIndex: 1000,
          marginTop: -60,
          textAlign: "center",
        }}
      >
        <h1>WELCOME TO RAD SQUASH</h1>
      </div> */}
      <div style={{ marginLeft: -20, marginRight: -20 }}>
        <Image
          src="/collage.png"
          alt="radloff squash collage"
          height={600}
          width={899}
        />
      </div>
      <br />
      <div
        style={{
          display: "flex",
          // border: "1px solid red",
          flexDirection: "column",
          marginLeft: -20,
          marginRight: -20,
          marginTop: 100,
          paddingTop: 100,
          paddingBottom: 100,
          backgroundColor: "#e0e0e0",
          paddingLeft: 20,
          paddingRight: 20,
          clipPath:
            "polygon(30% 9%, 71% 0, 100% 7%, 100% 100%, 70% 100%, 30% 100%, 0 100%, 0 4%)",
        }}
      >
        <div
          style={{
            width: "100%",
            textAlign: "start",
            color: "#e72e3a",
            fontSize: 25,
            // border: "1px solid blue",
            display: "flex",
            flexDirection: "column",
            // backgroundColor: "#aa3a3a3"
          }}
        >
          <div>
            <p style={{ fontFamily: "bungee, sans-serif", color: "black" }}>
              SQUASH
            </p>
            <h1 style={{ marginTop: -60 }}>TAME</h1>
            <h1 style={{ marginTop: -100 }}>THE GAME</h1>
          </div>
          <br />
          <div
            style={{
              backgroundColor: "#e72e3a",
              width: "100%",
              height: 200,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: 40,
            }}
          >
            <p style={{ color: "white", fontFamily: "bungee, sans-serif" }}>
              Become a member today
            </p>
            <div
              style={{
                backgroundColor: "gray",
                color: "white",
                lineHeight: 0,
                paddingLeft: 20,
                paddingRight: 20,
                fontFamily: "bungee, sans-serif",
              }}
            >
              <p>Sign Up</p>
            </div>
          </div>
        </div>
        <br />
        <div
          style={{
            width: "100%",
            border: "1px solid black",
            zIndex: 1000,
            height: 400,
          }}
        >
          <Map />
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const size = useWindowSize();
  return (
    <MainLayout>
      {size.width > 1000 ? <HomeDesktop /> : <MobileHome />}
    </MainLayout>
  );
}
