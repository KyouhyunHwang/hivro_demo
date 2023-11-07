import React, { useEffect, useState } from "react";
import { ArcherElement } from "react-archer";
import { RelationType } from "react-archer/lib/types";

interface ICircleProps {
  id: string;
  currentId?: string;
  children?: any;
  relations?: RelationType[];
  style?: any;
  onClick?: () => void;
}

const Circle = ({
  id,
  children,
  relations,
  style,
  onClick,
  currentId,
}: ICircleProps) => {
  const [myStatus, setMyStatus] = useState<string | null>(null);

  useEffect(() => {
    if (currentId === id) {
      setMyStatus("done");
    }
  }, [currentId, id]);
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
        <div
          className="circle"
          style={{
            ...style,
            backgroundColor: myStatus === "done" ? "#fff9cc" : "white",
          }}
          onClick={() => (onClick ? onClick() : null)}
        >
          {children}
        </div>
      </ArcherElement>
    </>
  );
};

export default Circle;
