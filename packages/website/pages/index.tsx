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
import { Fragment, useEffect, useState, useMemo } from "react";

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
      messagesState.unshift({
        user: event.data.split(":")[0],
        date: event.timeStamp,
        message: event.data.split(":")[1],
      });

      setMessagesState([...messagesState]);
    });
  }, []);

  const usersCountMemo = useMemo(() => {
    let newUsersCountMemo = 0;
    const uniqueUsers: string[] = [];

    messagesState.forEach((element) => {
      if (!uniqueUsers.includes(element.user)) {
        uniqueUsers.push(element.user);
        newUsersCountMemo += 1;
      }
    });

    return newUsersCountMemo;
  }, [messagesState.length]);

  const messagesCountMemo = useMemo(() => {
    let newMessagesCountMemo = 0;
    newMessagesCountMemo = messagesState.length;
    return newMessagesCountMemo;
  }, [messagesState.length]);

  const wordCountMemo = useMemo(() => {
    let newWordcountMemo = 0;

    messagesState.forEach((element) => {
      newWordcountMemo += element.message.split(" ").length;
    });

    return newWordcountMemo;
  }, [messagesState.length]);

  return (
    <Fragment>
      <Header />
      <ConstrainedContent>
        <Heading>Statistics</Heading>
        <Cards>
          <CardsItem
            heading="Users"
            value={usersCountMemo}
            detail="Displaying All Users"
          />
          <CardsItem
            heading="Messages"
            value={messagesCountMemo}
            detail="Filtered by: All Users"
          />
          <CardsItem
            heading="Words"
            value={wordCountMemo}
            detail="Filtered by: All Users"
          />
        </Cards>
        <Heading>Messages</Heading>
        <Messages>
          {messagesState.map((element) => {
            return (
              <MessagesItem
                key={element.date}
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
