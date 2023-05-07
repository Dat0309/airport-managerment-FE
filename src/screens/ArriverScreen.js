import React from "react";
import MainArriver from "../components/Arriver/MainArriver";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ArriverScreen = () => {
    return (
        <>
      <main className="main-wrap">
        <Header />
        <MainArriver />
        <Footer />
      </main>
    </>
    )
}

export default ArriverScreen;