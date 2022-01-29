import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";

const MainLayout = ({ children }) => {
  return (
    <main>
      <MainHeader />
      <div>{children}</div>
      <MainFooter />
    </main>
  );
};

export default MainLayout;
