import type { NextPage } from "next";
import { Header, Heading, ConstrainedContent, CardsItem } from "../components";
import { Fragment } from "react";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Header />
      <ConstrainedContent>
        <Heading>Statistics</Heading>
        <CardsItem></CardsItem>
        <Heading>Messages</Heading>
      </ConstrainedContent>
    </Fragment>
  );
};

export default Home;
