import Image from "next/image";
import useWindowSize from "./windowSize";
import Link from "next/link";

// MUI
import { Button, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const DesktopHeader = () => {
  return (
    <header>
      <header
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 100,
        }}
      >
        <Image src={"/logo.jpg"} width={100} height={100} />
      </header>
      <header
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 35,
          backgroundColor: "#D93B3A",
          color: "white",
          fontFamily: "acumin-pro",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            width: 700,
          }}
        >
          <Link href="/" passHref>
            <a className="underline">HOME</a>
          </Link>

          <Link href="/about" passHref>
            <a className="underline">ABOUT</a>
          </Link>

          <Link href="/membership" passHref>
            <a className="underline">MEMBERSHIP</a>
          </Link>

          <Link href="/commitee" passHref>
            <a className="underline">COMMITEE</a>
          </Link>

          <Link href="/ladder" passHref>
            <a className="underline">CLUB LADDER</a>
          </Link>

          <Link
            href="https://www.ezibook.co.za/rpsc/index.php?status=10"
            passHref
          >
            <a target="_blank" rel="noopener noreferrer" className="underline">
              BOOK COURT
            </a>
          </Link>

          <Link href="/contact" passHref>
            <a className="underline">CONTACT US</a>
          </Link>
        </div>
      </header>
    </header>
  );
};

const MobileHeader = () => {
  const [open, setOpen] = useState(false);
  return (
    <header
      style={{
        display: "flex",
        width: "100%",
        borderBottom: "5px solid #D93B3A",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "33.33%",
        }}
      >
        <Button onClick={() => setOpen(true)}>
          <MenuIcon style={{ color: "black" }} />
          <Drawer anchor="top" open={open} onClose={() => setOpen(false)}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <br />
              <Link href="/" passHref>
                <a>Home</a>
              </Link>
              <br />
              <Link href="/about" passHref>
                <a>About</a>
              </Link>
              <br />
              <Link href="/membership" passHref>
                <a>Membership</a>
              </Link>
              <br />
              <Link href="/commitee" passHref>
                <a>Commitee</a>
              </Link>
              <br />
              <Link href="/ladder" passHref>
                <a>Club Ladder</a>
              </Link>
              <br />
              <Link
                href="https://www.ezibook.co.za/rpsc/index.php?status=10"
                passHref
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  BOOK COURT
                </a>
              </Link>
              <br />
              <Link href="/contact" passHref>
                <a>Contact Us</a>
              </Link>
              <br />
            </div>
          </Drawer>
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "33.33%",
        }}
      >
        <Image src="/logo.jpg" width={100} height={100} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "33.33%",
        }}
      ></div>
    </header>
  );
};

const MainHeader = () => {
  const size = useWindowSize();
  return <div>{size.width > 700 ? <DesktopHeader /> : <MobileHeader />}</div>;
};

export default MainHeader;
