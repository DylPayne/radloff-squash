import Image from "next/image";
import { useRouter } from "next/router";

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
        paddingTop: 100,
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
        <Button onClick={() => router.push("https://wa.me/27218512200")}>
          <WhatsAppIcon style={{ color: "black", fontSize: 30 }} />
        </Button>
        <Button
          onClick={() =>
            router.push("https://www.facebook.com/radloffparksquash/")
          }
        >
          <FacebookIcon style={{ color: "black", fontSize: 30 }} />
        </Button>
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
