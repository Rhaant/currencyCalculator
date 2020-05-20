import React from "react";

import MainLayout from "../../layout/mainLayout.component";
import Splash from '../../splash/splash.component'

import './Home.styles.scss';

const Home = () => (
  <div className="Home">
    <MainLayout>
      <Splash />
    </MainLayout>
  </div>
);

export default Home;
