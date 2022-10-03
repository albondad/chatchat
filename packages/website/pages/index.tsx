import type { NextPage } from "next";
import {
  Cards,
  CardsItem,
  ConstrainedContent,
  Header,
  Heading,
  Messages,
  MessagesItem,
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
        <Messages>
          <MessagesItem
            user="test"
            message="this is a test"
            date="this is a test"
          />
        </Messages>
      </ConstrainedContent>
    </Fragment>
  );
};

export default Home;
