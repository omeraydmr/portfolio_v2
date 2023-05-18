/**
 * @author omeraydmr
 * @email osilix1@gmail.com
 * @create date 2023-03-14 21:21:00
 * @modify date 2023-03-14 21:21:00
 * @desc [description]
 */

import React from "react";
import "./Home.css";
import Container from "../../components/Container";
import Grid from "../../components/Grid";

function Home() {
  return (
    <Container>
      <Grid length={5}>
        <img
          className="home-image"
          src="navbar-home.jpg"
          alt="home-navbar"
        ></img>
      </Grid>
      <Grid length={6}>
        <h1 className="header-1">Hello There!</h1>
        <h2 className="header-2">I am Ömer Aydemir</h2>
        <p className="paragraph-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          orci nibh, hendrerit ut ante sit amet, hendrerit sodales metus. Fusce
          nisl odio, auctor sed arcu vel, ultrices fermentum nunc. Nulla
          pretium, nunc nec elementum bibendum, metus lectus sodales quam, a
          sagittis felis felis quis turpis. Vestibulum gravida euismod mauris,
          at aliquet dolor cursus eu. Morbi tristique bibendum neque id
          vehicula. Integer condimentum dapibus quam eget blandit. Nam sodales,
          ante sit amet gravida vestibulum, elit nisi maximus nisl, nec faucibus
          nulla elit vitae ex.
        </p>
        <p className="paragraph-1">
          Cras ultricies urna id lectus suscipit aliquam. In maximus semper
          lacus. Maecenas a nunc a nisi bibendum pellentesque. Nullam congue sed
          magna in imperdiet. Nulla egestas felis justo, a pellentesque diam
          varius sit amet. Nulla sollicitudin pharetra ipsum, vel faucibus nisl
          posuere at. Maecenas sodales velit odio, id posuere magna rhoncus in.
          Curabitur erat neque, iaculis ac arcu sit amet, hendrerit aliquam
          lectus. Morbi semper vel lectus quis mattis. Mauris libero nisl,
          ornare et sodales et, tempus ut tellus. Integer hendrerit iaculis
          turpis id egestas. In non euismod tortor, et dignissim magna. Donec
          quis porttitor dui. Nullam non euismod ipsum. Pellentesque mollis urna
          vitae quam interdum, at tincidunt justo venenatis. Aenean feugiat orci
          est, quis consectetur diam gravida vitae. Aliquam pulvinar malesuada
          neque, a laoreet mauris consequat sit amet. Donec quis nibh et augue
          fringilla scelerisque. Donec sit amet lacus velit. Nulla posuere
          porttitor ipsum quis mattis. Aenean ut vulputate turpis. Nulla
          accumsan massa et lacus laoreet, a aliquam tortor mattis. Quisque
          aliquet ante non egestas ultrices. Pellentesque pharetra tincidunt
          hendrerit. Suspendisse potenti. Sed luctus dolor quis arcu euismod
          tristique.
        </p>
      </Grid>
    </Container>
  );
}

export default Home;
