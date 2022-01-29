import MainLayout from "../components/MainLayout";
import Iframe from "react-iframe";

const BookDesktop = () => {
  return (
    <div
      style={{
        paddingLeft: 100,
        paddingRight: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "70vh"
      }}
    >
      <Iframe
        url="http://www.rhys.co.za/"
        width="100%"
        height="100%"
        display="initial"
      />
    </div>
  );
};

const Book = () => {
  return (
    <MainLayout>
      <br /><br />
      <BookDesktop />
    </MainLayout>
  );
};

export default Book;
