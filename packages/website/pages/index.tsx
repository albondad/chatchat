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
import { Fragment, useEffect, useState } from "react";

const Home: NextPage = () => {
  const [messagesState, setMessagesState] = useState<
    {
      user: string;
      date: number;
      message: string;
    }[]
  >([]);

  useEffect(() => {
    const socket = new WebSocket("wss://tso-take-home-chat-room.herokuapp.com");

    socket.addEventListener("message", (event) => {
      messagesState.push({
        user: event.data.split(":")[0],
        date: event.timeStamp,
        message: event.data.split(":")[1],
      });
      setMessagesState([...messagesState]);
    });
  }, []);

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
          {messagesState.map((element) => {
            return (
              <MessagesItem
                user={element.user}
                message={element.message}
                date={element.date}
              />
            );
          })}
        </Messages>
      </ConstrainedContent>
    </Fragment>
  );
};

export default Home;
