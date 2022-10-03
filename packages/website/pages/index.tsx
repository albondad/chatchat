import type { NextPage } from "next";
import {
  Header,
  Heading,
  ConstrainedContent,
  CardsItem,
  Messages,
  Cards,
} from "../components";
import { Fragment } from "react";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Header />
      <ConstrainedContent>
        <Heading>Statistics</Heading>
        <Cards>
          <CardsItem
            heading="Users"
            value="00"
            detail="Displaying All Users"
          ></CardsItem>
          <CardsItem
            heading="Messages"
            value="00"
            detail="Filtered by: All Users"
          />
          <CardsItem
            heading="Characters"
            value="00"
            detail="Filtered by: All Users"
          />
        </Cards>
        <Heading>Messages</Heading>
        <Messages></Messages>
      </ConstrainedContent>
    </Fragment>
  );
};

export default Home;
