import MainLayout from "../components/MainLayout";
import useWindowSize from "../components/windowSize";

import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Image from "next/image";

const GalleryDesktop = () => {
  return (
    <MainLayout>
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <div
          style={{
            width: 1000,
          }}
        >
          <ImageList variant="masonry" cols={3} gap={8}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=333&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </div>
    </MainLayout>
  );
};

const GalleryMobile = () => {
  return (
    <MainLayout>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          // border: "1px solid red",
        }}
      >
        <div
          style={{
            width: "100%",
            // border: "1px solid red",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ImageList
            variant="masonry"
            cols={1}
            gap={8}
            sx={{
              // border: "1px solid red",
              paddingLeft: 1,
              paddingRight: 1,
            }}
          >
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </div>
    </MainLayout>
  );
};

export default function Gallery() {
  const size = useWindowSize();
  return (
    <div>{size.width > 1000 ? <GalleryDesktop /> : <GalleryMobile />}</div>
  );
}

const itemData = [
  {
    img: "/gallery1.jpeg",
    title: "squash",
  },
  {
    img: "/gallery2.jpeg",
    title: "squash",
  },
  {
    img: "/gallery3.jpeg",
    title: "squash",
  },
  {
    img: "/gallery4.jpeg",
    title: "squash",
  },
  {
    img: "/gallery5.jpeg",
    title: "squash",
  },
  {
    img: "/gallery6.jpeg",
    title: "squash",
  },
  {
    img: "/gallery7.jpeg",
    title: "squash",
  },
  {
    img: "/gallery8.jpeg",
    title: "squash",
  },
  {
    img: "/gallery9.jpeg",
    title: "squash",
  },
  {
    img: "/gallery10.jpeg",
    title: "squash",
  },
  {
    img: "/gallery12.jpeg",
    title: "squash",
  },
  {
    img: "/gallery13.jpeg",
    title: "squash",
  },
  {
    img: "/gallery14.jpeg",
    title: "squash",
  },
  {
    img: "/gallery15.jpeg",
    title: "squash",
  },
  {
    img: "/gallery16.jpeg",
    title: "squash",
  },
  {
    img: "/gallery17.jpeg",
    title: "squash",
  },
  {
    img: "/gallery18.jpeg",
    title: "squash",
  },
  {
    img: "/gallery19.jpeg",
    title: "squash",
  },
  {
    img: "/gallery20.jpeg",
    title: "squash",
  },
  {
    img: "/gallery21.jpeg",
    title: "squash",
  },
  {
    img: "/gallery22.jpeg",
    title: "squash",
  },
  {
    img: "/gallery23.jpeg",
    title: "squash",
  },
  {
    img: "/gallery24.jpeg",
    title: "squash",
  },
  {
    img: "/gallery25.jpeg",
    title: "squash",
  },
  {
    img: "/gallery26.jpeg",
    title: "squash",
  },
  {
    img: "/gallery27.jpeg",
    title: "squash",
  },
  {
    img: "/gallery28.jpeg",
    title: "squash",
  },
  {
    img: "/gallery29.jpeg",
    title: "squash",
  },
  {
    img: "/gallery30.jpeg",
    title: "squash",
  },
  {
    img: "/gallery31.jpeg",
    title: "squash",
  },
  {
    img: "/gallery32.jpeg",
    title: "squash",
  },
  {
    img: "/gallery33.jpeg",
    title: "squash",
  },
  {
    img: "/gallery34.jpeg",
    title: "squash",
  },
  {
    img: "/gallery35.jpeg",
    title: "squash",
  },
  {
    img: "/gallery36.jpeg",
    title: "squash",
  },
];
