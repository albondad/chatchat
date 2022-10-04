import {
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
import type { NextPage } from "next";

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
  >([{ name: "All" }]);

  const [wordsState, setWordsState] = useState<
    {
      userName: string;
      value: string;
      count: number;
    }[]
  >([]);

  const [userNameState, setUserNameState] = useState("All");

  useEffect(() => {
    const socket = new WebSocket("wss://tso-take-home-chat-room.herokuapp.com");

    socket.addEventListener("message", (event) => {
      const userName = event.data.split(":")[0];
      const message = event.data.split(":")[1];
      const date = event.timeStamp;
      const words: string[] = message.replace(".", "").split(" ");

      if (messagesState.length >= 100) {
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

  const formattedMessagesMemo = useMemo(() => {
    let newFormattedMessagesMemo = messagesState;

    if (userNameState !== "All") {
      newFormattedMessagesMemo = newFormattedMessagesMemo.filter(
        (element) => element.userName === userNameState
      );
    }

    return newFormattedMessagesMemo;
  }, [userNameState, messagesState.length]);

  const formattedWordsMemo = useMemo(() => {
    let newFormattedWordsMemo = wordsState;

    newFormattedWordsMemo = newFormattedWordsMemo.filter(
      (element) =>
        element.userName === userNameState &&
        element.value !== " " &&
        element.value !== ""
    );

    newFormattedWordsMemo.sort((firstElement, secondElement) => {
      if (firstElement.count < secondElement.count) {
        return 1;
      } else if (firstElement.count > secondElement.count) {
        return -1;
      } else {
        return 0;
      }
    });

    return newFormattedWordsMemo;
  }, [userNameState, wordsState.length]);

  return (
    <Fragment>
      <Header />
      <ConstrainedContent>
        <Tabs>
          {usersState.map((element) => {
            const isActive = userNameState === element.name;
            console.log(element.name, isActive);

            const handleClick = () => {
              setUserNameState(element.name);
            };

            return (
              <TabsItem
                isActive={isActive}
                key={element.name}
                value={element.name}
                onClick={handleClick}
              />
            );
          })}
        </Tabs>

        <Messages>
          {formattedMessagesMemo.map((element) => {
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
          {formattedWordsMemo.map((element) => {
            const key = element.userName + element.value;
            return (
              <WordsItem
                key={key}
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
