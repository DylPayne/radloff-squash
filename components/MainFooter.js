import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Button } from "@mui/material";

const DesktopFooter = () => {
  const router = useRouter();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        paddingTop: 50,
        paddingBottom: 50,
      }}
    >
      <p>Follow us on social media</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link href="https://wa.me/0797744814" passHref>
          <a target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon style={{ color: "black", fontSize: 30 }} />
          </a>
        </Link>
        <Link href="https://www.facebook.com/radloffparksquash/" passHref>
          <a target="_blank" rel="noopener noreferrer">
            <FacebookIcon style={{ color: "black", fontSize: 30 }} />
          </a>
        </Link>
      </div>

      <br />
      <Image src="/logo.jpg" height={100} width={136} />
    </div>
  );
};

const MainFooter = () => {
  return <DesktopFooter />;
};

export default MainFooter;
