import MainLayout from "../components/MainLayout";
import useWindowSize from "../components/windowSize";

const AboutDesktop = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: 1000,
          textAlign: "center",
        }}
      >
        <h2>About</h2>
        <p>
          Built in 1979, our little club finds itself in the middle of the
          Radloff Park Sports grounds. Surrounded by mountains and a stone’s
          throw away from the Lourens river, we are proud to welcome squash
          players from all over the world.
          <br />
          <br />
          From humble beginnings and with a rich history, we have moved from a
          very social club to a very competitive and dedicated one. Keeping our
          social roots but adding skill and fitness to the mix. Our Mens, Ladies
          and Masters teams compete in the WP Leagues and we have a good cross
          section of players - from 1st League with some of the top juniors in
          the country right down to very casual beginners who just love to sweat
          it out and give their best.
          <br />
          <br />
          Our coaching staff is top notch. Richard Castle, who served as the
          National Squash Coach for many years and have ample international
          experience, can help any level of player get the best out of their
          natural talents. He has trained some junior coaches and together they
          coach a number of schools in the Boland, helping to grow the game for
          future generations.
          <br />
          <br />
          Our development program is also gaining momentum and we welcome any
          player from any background to join our amazing club.
          <br />
          <br />
          Our 4 courts are spotless and we pride ourselves in doing the best
          with limited means. Pop in anytime, speak to our club manager Karen
          and give squash a go. It has been voted as the best sport by Forbes
          magazine and fits in so well with our modern lifestyles.
          <br />
          <br />
          What are you waiting for?
          <br />
          <br />
          Willem Karsten
          <br />
          Chairman
          <br />
          <br />
          079 774 4814
        </p>
      </div>
    </div>
  );
};

const AboutMobile = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        paddingLeft: 40,
        paddingRight: 40,
      }}
    >
      <h2>About</h2>
      <p>
        Built in 1979, our little club finds itself in the middle of the Radloff
        Park Sports grounds. Surrounded by mountains and a stone’s throw away
        from the Lourens river, we are proud to welcome squash players from all
        over the world.
        <br />
        <br />
        From humble beginnings and with a rich history, we have moved from a
        very social club to a very competitive and dedicated one. Keeping our
        social roots but adding skill and fitness to the mix. Our Mens, Ladies
        and Masters teams compete in the WP Leagues and we have a good cross
        section of players - from 1st League with some of the top juniors in the
        country right down to very casual beginners who just love to sweat it
        out and give their best.
        <br />
        <br />
        Our coaching staff is top notch. Richard Castle, who served as the
        National Squash Coach for many years and have ample international
        experience, can help any level of player get the best out of their
        natural talents. He has trained some junior coaches and together they
        coach a number of schools in the Boland, helping to grow the game for
        future generations.
        <br />
        <br />
        Our development program is also gaining momentum and we welcome any
        player from any background to join our amazing club.
        <br />
        <br />
        Our 4 courts are spotless and we pride ourselves in doing the best with
        limited means. Pop in anytime, speak to our club manager Karen and give
        squash a go. It has been voted as the best sport by Forbes magazine and
        fits in so well with our modern lifestyles.
        <br />
        <br />
        What are you waiting for?
        <br />
        <br />
        Willem Karsten
        <br />
        Chairman
      </p>
    </div>
  );
};

const About = () => {
  const size = useWindowSize();
  return (
    <MainLayout>
      <br />
      <br />
      {size.width > 1000 ? <AboutDesktop /> : <AboutMobile />}
    </MainLayout>
  );
};

export default About;
