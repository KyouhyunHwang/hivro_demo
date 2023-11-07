import React, { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import { BeatLoader } from "react-spinners";
import { ArcherElement } from "react-archer";
import { RelationType } from "react-archer/lib/types";
import { boxMB } from "../helpers/configs";

interface IRectangleBoxProps {
  id: string;
  title: string;
  type: "connector" | "connector_red" | "wait" | "wake_up";
  direction: string;
  defaultDirection: string;
  relations?: RelationType[];
  children: React.ReactNode;
  style?: any;
  currentId?: string;
  onEnd?: () => void;
}

const RectangleBox = ({
  id,
  title,
  type,
  direction,
  defaultDirection,
  relations,
  children,
  style,
  currentId,
  onEnd,
}: IRectangleBoxProps) => {
  const [myStatus, setMyStatus] = useState<string | null>(null);
  const [myLoading, setMyLoading] = useState<boolean>(false);
  const [myClass, setMyClass] = useState<string>("");
  const [myBorderRadius, setMyBorderRadius] = useState<number>(50);
  const [typeClass, setTypeClass] = useState<string>("rectangleNormal");

  useEffect(() => {
    if (direction === defaultDirection) {
      if (currentId === id) {
        setMyLoading(true);
        setTimeout(() => {
          setMyLoading(false);
          setMyStatus("current");
        }, 1000);
      } else if (myStatus !== null && currentId && currentId !== id) {
        setMyStatus("done");
      }
    }

    // eslint-disable-next-line
  }, [currentId]);

  useEffect(() => {
    if (type === "connector_red") {
      setTypeClass("rectangleRed");
    } else if (type === "wait") {
      setTypeClass("rectangleWait");
      setMyBorderRadius(10);
    } else if (type === 'wake_up') {
      setTypeClass("rectanglePurple")
    } else {}
  }, [type]);

  useEffect(() => {
    if (myStatus === null) {
      // setBackColor("#ffffff");
      // return;
    } else if (myStatus === "current") {
      setMyClass("currentColor");
      if (onEnd) {
        onEnd();
      }
    } else if (myStatus === "done") {
      setMyClass("doneColor");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myStatus]);

  return (
    <>
      <ArcherElement
        id={id}
        relations={
          relations || [
            {
              targetId: "",
              targetAnchor: "left",
              sourceAnchor: "right",
            },
          ]
        }
      >
        <Button
          className={`rectangleBox ${typeClass} ${myClass}`}
          colorScheme="white"
          boxShadow="md"
          style={{
            width: 200,
            height: 100,
            borderRadius: myBorderRadius,
            // backgroundColor: { backColor },
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            ...style,
          }}
          spinner={<BeatLoader size={8} color="white" />}
          isLoading={myLoading}
        >
          <div className="rectangleTitle">{title}</div>
          <p className="rectangleContent">{children}</p>
        </Button>
      </ArcherElement>
      <div style={{ marginBottom: boxMB }} />
    </>
  );
};

export default RectangleBox;
