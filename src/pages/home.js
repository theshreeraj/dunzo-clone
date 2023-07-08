import React from "react";
import AppDownload from "../components/app-download";
import Footer from "../components/footer";
import Header from "../components/header";
import Mainfold from "../components/mainfold";
import TopPicks from "../components/top-picks";

const HomePage = () => {
  return (
    <div className="homepage">
      <Header />
      <Mainfold />
      <TopPicks />
      <AppDownload />
      <Footer />
    </div>
  );
};

export default HomePage;
