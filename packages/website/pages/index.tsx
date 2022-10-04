import type { NextPage } from "next";
import {
  Cards,
  CardsItem,
  ConstrainedContent,
  Header,
  Heading,
  Messages,
  MessagesItem,
  Tabs,
  TabsItem,
  Words,
} from "../components";
import { Fragment, useEffect, useState, useMemo } from "react";
import { WordsItem } from "../components/words-item";

const Home: NextPage = () => {
  const [messagesState, setMessagesState] = useState<
    {
      userName: string;
      date: number;
      message: string;
    }[]
  >([]);

  const [usersState, setUsersState] = useState<
    {
      name: string;
    }[]
  >([]);

  const [wordsState, setWordsState] = useState<
    {
      userName: string;
      value: string;
      count: number;
    }[]
  >([]);

  useEffect(() => {
    const socket = new WebSocket("wss://tso-take-home-chat-room.herokuapp.com");

    socket.addEventListener("message", (event) => {
      const userName = event.data.split(":")[0];
      const message = event.data.split(":")[1];
      const date = event.timeStamp;
      const words: string[] = message.split(" ");

      if (messagesState.length >= 10) {
        socket.close();
        return;
      }

      // update message state
      messagesState.unshift({
        userName: userName,
        date: date,
        message: message,
      });

      setMessagesState([...messagesState]);

      // update users state
      const hasUserName = !!usersState.find(
        (usersStateElement) => usersStateElement.name === userName
      );

      if (!hasUserName) {
        usersState.push({
          name: userName,
        });
      }

      setUsersState([...usersState]);

      // update words state
      words.forEach((wordsElement) => {
        const currentWordsStateElement = wordsState.find(
          (wordsStateElement) =>
            wordsStateElement.value === wordsElement &&
            wordsStateElement.userName === userName
        );

        const hasCurrentWordsStateElement = !!currentWordsStateElement;

        if (!hasCurrentWordsStateElement) {
          wordsState.push({
            userName: userName,
            value: wordsElement,
            count: 1,
          });
        } else {
          currentWordsStateElement.count++;
        }

        const currentWordsStateElementWithAllUserName = wordsState.find(
          (wordsStateElement) =>
            wordsStateElement.value === wordsElement &&
            wordsStateElement.userName === "All"
        );

        const hasCurrentWordsStateElementWithAllUserName =
          !!currentWordsStateElementWithAllUserName;

        if (!hasCurrentWordsStateElementWithAllUserName) {
          wordsState.push({
            userName: "All",
            value: wordsElement,
            count: 1,
          });
        } else {
          currentWordsStateElementWithAllUserName.count++;
        }
      });
      setWordsState([...wordsState]);
    });
  }, []);

  console.log(messagesState);

  return (
    <Fragment>
      <Header />
      <ConstrainedContent>
        <Tabs>
          <TabsItem value="All" />
          {usersState.map((element) => {
            return <TabsItem key={element.name} value={element.name} />;
          })}
        </Tabs>

        <Messages>
          {messagesState.map((element) => {
            return (
              <MessagesItem
                key={element.date}
                userName={element.userName}
                message={element.message}
                date={element.date}
              />
            );
          })}
        </Messages>

        <Words>
          {wordsState.map((element) => {
            return (
              <WordsItem
                key={element.value}
                value={element.value}
                count={element.count}
              />
            );
          })}
        </Words>
      </ConstrainedContent>
    </Fragment>
  );
};

export default Home;
