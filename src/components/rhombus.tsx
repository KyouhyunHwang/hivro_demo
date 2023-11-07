import React, { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import { ArcherElement } from "react-archer";
import { rhombusMB } from "../helpers/configs";
import { RelationType } from "react-archer/lib/types";
import { BeatLoader } from "react-spinners";

interface IRhombusProps {
  id: string;
  title: string;
  triggerId: string;
  direction: string;
  defaultDirection: string;
  relations?: RelationType[];
  children: React.ReactNode;
  marginBottom?: number;
  currentId?: string;
  doneId?: string[];
}

const Rhombus = ({
  id,
  title,
  triggerId,
  direction,
  defaultDirection,
  relations,
  children,
  marginBottom,
  currentId,
  doneId,
}: IRhombusProps) => {
  const [myStatus, setMyStatus] = useState<string | null>(null);
  const [myLoading] = useState<boolean>(false);
  const [myClass, setMyClass] = useState<string>("");
  const [backColor, setBackColor] = useState<string>("#606060");
  const [toWait, setToWait] = useState<any>(0);

  useEffect(() => {
    if (direction === defaultDirection) {
      if (currentId === triggerId) {
        // setMyLoading(true);
        if (!doneId) {
          setMyStatus("done");
          return;
        }
      }

      if (doneId) {
        for (const myId of doneId) {
          if (currentId === myId) {
            if (toWait > 1) {
              setMyStatus("done");
            } else {
              setToWait(toWait + 1);
            }
          }
        }
      }
    }

    // eslint-disable-next-line
  }, [currentId]);

  useEffect(() => {
    if (myStatus === null) {
      // setBackColor("#ffffff");
      // return;
    } else if (myStatus === "current") {
      setBackColor("#8bc53f");
      setMyClass("blackFont");
    } else if (myStatus === "done") {
      // setBackColor("#fdb735");
      setBackColor("orange");
      setMyClass("blackFont");
    }
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
        <div className="diamond">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none">
            <filter id="dropshadow" height="125%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="1" />
              <feOffset dx="0" dy="0" result="offsetblur" />
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <path
              d="M2,50 50,2 98,50 50,98z"
              className="outer"
              fill={backColor}
            />
            {/* <path d="M8,50 50,8 92,50 50,92z" className="inner" /> */}
          </svg>
          <Button
            colorScheme="white"
            style={{
              position: "absolute",
              marginTop: 10,
              left: 50,
              height: 80,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
            }}
            spinner={<BeatLoader size={8} color="white" />}
            isLoading={myLoading}
          >
            <div className={`diamondTitle ${myClass}`}>{title}</div>
            <p className="diamondContent">{children}</p>
          </Button>
        </div>
      </ArcherElement>
      <div style={{ marginBottom: marginBottom || rhombusMB }} />
    </>
  );
};

export default Rhombus;
