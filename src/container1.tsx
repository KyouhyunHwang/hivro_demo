import React, { useEffect, useRef, useState, useCallback } from "react";
import { VStack, Grid, GridItem, Box, Textarea, Text } from "@chakra-ui/react";
import { ArcherContainer } from "react-archer";
import RectangleBox from "./components/rectangleBox";
import UserIcon from "./components/userIcon";
import Rhombus from "./components/rhombus";
import EmptyBox from "./components/emptyBox";
import {
  mainTopMB,
  scenario2,
  center2,
  left2,
  left3,
  right2,
  right3,
  path2,
  center4,
  left3None,
  path3,
  right3None,
} from "./helpers/configs";
import Circle from "./components/circle";
import _ from "lodash";

const Container1 = () => {
  const ws = useRef<any>(null);
  const textareaRef = useRef<any>(null);
  // const newString = useRef<any>('')

  const [currentId, setCurrentId] = useState<string | undefined>(undefined);
  const [centerList, setCenterList] = useState<any>([]);
  const [rightList, setRightList] = useState<any>([]);
  const [leftList, setLeftList] = useState<any>([]);
  const [pathList, setPathList] = useState<any>([]);
  const [scenario, setScenario] = useState<string[]>([]);
  const [defaultDirection, setDefaultDirection] = useState<string>("center");
  const [logData, setLogData] = useState<any>("");

  let newString = "";

  useEffect(() => {
    setDefaultDirection("center");

    ws.current = new WebSocket(
      "wss://n253p5730f.execute-api.ap-northeast-2.amazonaws.com/dev"
    );
    ws.current.onopen = () => {
      console.log("connected");
      // setCurrentId("start");
    };

    ws.current.onclose = () => {
      setTimeout(() => {
        ws.current = new WebSocket(
          "wss://n253p5730f.execute-api.ap-northeast-2.amazonaws.com/dev"
        );
      }, 3000);
    };

    ws.current.onmessage = ({ data }: any) => {
      console.log({data});
      if (currentId === undefined) {
        setCurrentId("start");
        setTimeout(() => {
          try {
            const json = JSON.parse(data);
            if (json.api_id) {
              setCurrentId(json.api_id);
            } else if (json.message) {
              const a = JSON.stringify(json, null, 2);
              newString = a + newString;
              setLogData(newString);
              // setTimeout(() => {
              //   textareaRef.current?.scrollIntoView({ behavior: "smooth" });
              // }, 200);
            }
          } catch (e) {
            console.log(data);
          }
        }, 200);
      } else {
        try {
          const json = JSON.parse(data);
          if (json.api_id) {
            setCurrentId(json.api_id);
          } else if (json.message) {
            const a = JSON.stringify(json, null, 2);
            newString = a + newString;
            setLogData(newString);
            // setTimeout(() => {
            //   textareaRef.current?.scrollIntoView({ behavior: "smooth" });
            // }, 200);
          }
        } catch (e) {
          console.log(data);
        }
      }
    };

    // setLogData(JSON.stringify(logData1));

    setInterval(() => {
      ws.current.send("hello");
    }, 1000 * 60 * 2);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (defaultDirection === "center") {
      setCenterList(center4);
      setRightList(right3None);
      setLeftList(left3None);
      setPathList(path3);
      setScenario(scenario2);
    } else if (defaultDirection === "right") {
      setRightList(right3);
      setCenterList(center2);
      setLeftList(left2);
      setPathList(path2);
      setScenario(scenario2);
    } else if (defaultDirection === "left") {
      setLeftList(left3);
      setCenterList(center2);
      setRightList(right2);
      setPathList(path2);
      setScenario(scenario2);
    }
  }, [defaultDirection]);

  const sendMsg = useCallback(() => {
    ws.current.send("hello hivro");
  }, []);

  // 시나리오 넣고 프론트만 테스트하는 코드
  useEffect(() => {
    // if (currentId === undefined) {
    //   setCurrentId("start");
    // }
    // if (scenario.length > 0) {
    //   for (let i = 0; i < scenario.length; i++) {
    //     setTimeout(() => {
    //       setCurrentId(scenario[i]);
    //     }, 3000 * i);
    //   }
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scenario]);

  const onMainMouseDown = (event: any) => {
  //   const { offsetX, offsetY } = event.nativeEvent;
    // console.log("x:", offsetX, " y:", offsetY);
  };

  const onEnd = () => {
    setCurrentId("end");
  };

  const _renderBoxes = (data: any, direction: string) => {
    const list: JSX.Element[] = [];

    _.map(data, (item, index) => {
      if (item.type === "selector") {
        const elem = (
          <Rhombus
            key={`${direction}-${item.id}-${index}`}
            id={item.id}
            direction={direction}
            defaultDirection={defaultDirection}
            title={item.title}
            triggerId={item.triggerId}
            relations={item.relations}
            currentId={currentId}
            doneId={item.doneId}
          >
            {item.children}
          </Rhombus>
        );
        list.push(elem);
      } else if (item.type === "empty") {
        const elem = <EmptyBox key={`${direction}-empty-${index}`} />;
        list.push(elem);
      } else {
        const elem = (
          <RectangleBox
            key={`${direction}-${item.id}-${index}`}
            id={item.id}
            direction={direction}
            defaultDirection={defaultDirection}
            title={item.title}
            type={item.type}
            relations={item.relations}
            currentId={currentId}
            onEnd={item.end ? onEnd : undefined}
          >
            {item.children}
          </RectangleBox>
        );
        list.push(elem);
      }
    });
    return list;
  };

  return (
    <Grid
      minH="100vh"
      p={3}
      templateAreas={`"main log"
      "footer footer"`}
      gridTemplateRows={`1fr 150px`}
      gridTemplateColumns={`2fr 1fr`}
      style={{ backgroundColor: "black", opacity: 0.9 }}
    >
      <GridItem area="main">
        <VStack spacing={8}>
          <ArcherContainer strokeColor="white">
            <div className="mainTop" style={{ marginBottom: mainTopMB }}>
              <UserIcon />
              <Circle
                id="start"
                style={{ position: "absolute", left: 645, top: 20 }}
                relations={[
                  {
                    targetId: "2",
                    targetAnchor: "top",
                    sourceAnchor: "bottom",
                  },
                ]}
                currentId={currentId}
                onClick={sendMsg}
              >
                Start
              </Circle>
            </div>
            <div className="main" onMouseDown={onMainMouseDown}>
              {/* 왼쪽 */}
              <div className="left">
                <EmptyBox />
                {_renderBoxes(leftList, "left")}
              </div>
              {/* 중간 */}
              <div className="center">
                <Rhombus
                  id="2"
                  title="Selector"
                  direction={defaultDirection}
                  defaultDirection={defaultDirection}
                  triggerId="start"
                  relations={[
                    {
                      targetId:
                        defaultDirection === "left"
                          ? "NX-API53kacnYXH65BADW5q17hZC"
                          : "1-1",
                      targetAnchor: "top",
                      sourceAnchor: "left",
                    },
                    {
                      targetId:
                        defaultDirection === "center"
                          ? "NX-API53kacnYXH65BADW5q17hZC"
                          : "2-1",
                      targetAnchor: "top",
                      sourceAnchor: "bottom",
                    },
                    {
                      targetId:
                        defaultDirection === "right"
                          ? "NX-API53kacnYXH65BADW5q17hZC"
                          : "3-1",
                      targetAnchor: "top",
                      sourceAnchor: "right",
                    },
                  ]}
                  currentId={currentId || "not start"}
                >
                  Charging Status
                </Rhombus>
                {_renderBoxes(centerList, "center")}
              </div>
              {/* 오른쪽 */}
              <div className="right">
                <EmptyBox />
                {_renderBoxes(rightList, "right")}
              </div>
              <div
                style={{ position: "absolute", width: "100%", height: "100%" }}
              >
                <svg width="100%" height="100%" style={{ zIndex: 900 }}>
                  <g fill="none">
                    <defs>
                      <marker
                        id="arrowhead0"
                        viewBox="0 0 60 60"
                        refX="0"
                        refY="30"
                        markerUnits="strokeWidth"
                        markerWidth="8"
                        markerHeight="10"
                        orient="auto"
                      >
                        <path d="M 0 0 L 60 30 L 0 60 z" fill="#fff" />
                      </marker>
                      <marker
                        id="arrowhead1"
                        markerWidth="10"
                        markerHeight="6"
                        refX="0"
                        refY="3"
                        orient="auto-start-reverse"
                        markerUnits="strokeWidth"
                      >
                        <path d="M0,0 L0,6 L10,3 z" fill="#fff" />
                      </marker>
                    </defs>
                  </g>
                  <g>
                    {pathList.map((item: any, index: number) => (
                      <path
                        key={`path-${index}`}
                        d={item.pathD}
                        stroke="#fff"
                        fill="none"
                        strokeWidth={2}
                        strokeLinecap="round"
                        markerEnd="url(#arrowhead1)"
                      />
                    ))}
                    <text className="arrow_svg_text" x="450" y="625">
                      Charging Not
                      <tspan x="465" y="650">
                        Stopped
                      </tspan>
                    </text>
                    <text className="arrow_svg_text" x="850" y="465">
                      Charging Not
                      <tspan x="865" y="490">
                        Stopped
                      </tspan>
                    </text>
                    {/* <text className="arrow_svg_text" x="1250" y="465">
                      Charging Not
                      <tspan x="1265" y="490">
                        Stopped
                      </tspan>
                    </text> */}
                  </g>
                </svg>
              </div>
            </div>
            <div className="mainFooter">
              <Circle
                id="end"
                style={{ marginLeft: 645 }}
                currentId={currentId}
              >
                End
              </Circle>
            </div>
          </ArcherContainer>
        </VStack>
      </GridItem>
      <GridItem area="log">
        <Box className="logContainer">
          <div style={{ position: "sticky", top: 0 }}>
            <Text style={{ marginBottom: 10, color: "#fff" }}>Log</Text>
            <Textarea
              ref={textareaRef}
              height={1100}
              readOnly
              value={logData}
              // onChange={handleInputChange}
              // placeholder="Here is a sample placeholder"
              size="md"
              style={{ backgroundColor: "black", color: "white" }}
            />
          </div>
        </Box>
      </GridItem>
      <GridItem area="footer">
        <Box className="footerContainer">
            {/* <Text style={{ color: "#fff" }}>Footer</Text> */}
        </Box>
        </GridItem>

    </Grid>
  );
};

export default Container1;
