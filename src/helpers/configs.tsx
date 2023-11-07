import React from "react";

export const boxMB = 50;
export const rhombusMB = 30;
export const mainTopMB = 60;

export const scenario1 = ["2", "2-1", "2-2", "2-3", "2-4", "2-2", "2-3"];

export const center1 = [
  {
    type: "connector",
    id: "2-1",
    title: "SWTCH Connector",
    children: (
      <>
        Request <br />
        Charging Start
      </>
    ),
    relations: [
      {
        targetId: "2-2",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "connector",
    id: "2-2",
    title: "SWTCH Connector",
    children: (
      <>
        Check <br />
        Charging Status
      </>
    ),
    relations: [
      {
        targetId: "2-3",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "empty",
    id: "9-1",
  },
  {
    type: "selector",
    id: "2-3",
    title: "Selector",
    children: "Charging Status",
    relations: [
      {
        targetId: "end",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
];

export const right1 = [
  {
    type: "connector",
    id: "3-1",
    title: "LGE Connector",
    children: (
      <>
        Request <br />
        Charging Start
      </>
    ),
    relations: [
      {
        targetId: "3-2",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "connector",
    id: "3-2",
    title: "LGE Connector",
    children: (
      <>
        Request <br />
        Charging Start
      </>
    ),
  },
];

export const left1 = [
  {
    type: "connector",
    id: "1-1",
    title: "EVR Connector",
    children: (
      <>
        Request <br />
        Charging Start
      </>
    ),
    relations: [
      {
        targetId: "1-2",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "selector",
    id: "1-2",
    title: "Selector",
    children: "Charging Status",
    relations: [
      {
        targetId: "1-3",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "connector",
    id: "1-3",
    title: "EVR Connector",
    children: (
      <>
        Request <br />
        Charging Start
      </>
    ),
    relations: [
      {
        targetId: "1-4",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "connector",
    id: "1-4",
    title: "EVR Connector",
    children: (
      <>
        Request <br />
        Charging Start
      </>
    ),
    relations: [
      {
        targetId: "end",
        targetAnchor: "left",
        sourceAnchor: "bottom",
      },
    ],
  },
];

export const path1 = [{ pathD: "M 316,360 h 40 v -160 h -36" }];

export const center2 = [
  {
    type: "connector",
    id: "2-1",
    title: "SWTCH Connector",
    children: (
      <>
        Request <br />
        Charging Start
      </>
    ),
    relations: [
      {
        targetId: "2-2",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "connector",
    id: "2-2",
    title: "SWTCH Connector",
    children: (
      <>
        Check <br />
        Charging Status
      </>
    ),
    relations: [
      {
        targetId: "2-3",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "connector_red",
    id: "2-3",
    title: "Marriott Connector",
    children: (
      <>
        Check <br />
        Charging Status
      </>
    ),
    relations: [
      {
        targetId: "2-4",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "selector",
    id: "2-4",
    title: "Selector",
    children: "Charging Status",
    relations: [
      {
        targetId: "2-5",
        targetAnchor: "top",
        sourceAnchor: "bottom",
        label: (
          <div className="arrow_text" style={{ marginLeft: 120 }}>
            Charging Stopped
          </div>
        ),
      },
    ],
  },
  {
    type: "connector",
    id: "2-5",
    title: "SWTCH Connector",
    children: (
      <>
        Check <br />
        Charging Status
      </>
    ),
    relations: [
      {
        targetId: "2-6",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "connector_red",
    id: "2-6",
    title: "Marriott Connector",
    children: (
      <>
        Check <br />
        Charging Status
      </>
    ),
    relations: [
      {
        targetId: "2-7",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "wait",
    id: "2-7",
    title: "Wait",
    children: (
      <>
        Wait <br />
        Charging Result
      </>
    ),
    relations: [
      {
        targetId: "2-8",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "connector",
    id: "2-8",
    title: "SWTCH Connector",
    children: (
      <>
        Check <br />
        Charging Status
      </>
    ),
    relations: [
      {
        targetId: "2-9",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "connector",
    id: "2-9",
    title: "SWTCH Connector",
    children: (
      <>
        Check <br />
        Charging Status
      </>
    ),
    relations: [
      {
        targetId: "2-10",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "connector_red",
    id: "2-10",
    title: "Marriott Connector",
    children: (
      <>
        Check <br />
        Charging Status
      </>
    ),
    relations: [
      {
        targetId: "end",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
];

export const left2 = [
  {
    type: "connector",
    id: "1-1",
    title: "EVR Connector",
    children: (
      <>
        Request <br />
        Charging Start
      </>
    ),
    relations: [
      {
        targetId: "1-2",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "connector",
    id: "1-2",
    title: "EVR Connector",
    children: (
      <>
        Request <br />
        Charging Start
      </>
    ),
    relations: [
      {
        targetId: "1-3",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "connector_red",
    id: "1-3",
    title: "Marriott Connector",
    children: (
      <>
        Check <br />
        Charging Status
      </>
    ),
    relations: [
      {
        targetId: "1-4",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "selector",
    id: "1-4",
    title: "Selector",
    children: "Charging Status",
    relations: [
      {
        targetId: "1-5",
        targetAnchor: "top",
        sourceAnchor: "bottom",
        label: (
          <div className="arrow_text" style={{ marginLeft: 120 }}>
            Charging Stopped
          </div>
        ),
      },
    ],
  },
  {
    type: "connector",
    id: "1-5",
    title: "EVR Connector",
    children: (
      <>
        Request <br />
        Charging Start
      </>
    ),
    relations: [
      {
        targetId: "1-6",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "connector_red",
    id: "1-6",
    title: "Marriott Connector",
    children: (
      <>
        Check <br />
        Charging Status
      </>
    ),
    relations: [
      {
        targetId: "1-7",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "wait",
    id: "1-7",
    title: "Wait",
    children: (
      <>
        Wait <br />
        Charging Result
      </>
    ),
    relations: [
      {
        targetId: "1-8",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "connector",
    id: "1-8",
    title: "EVR Connector",
    children: (
      <>
        Request <br />
        Charging Start
      </>
    ),
    relations: [
      {
        targetId: "1-9",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "connector",
    id: "1-9",
    title: "EVR Connector",
    children: (
      <>
        Request <br />
        Charging Start
      </>
    ),
    relations: [
      {
        targetId: "1-10",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "connector_red",
    id: "1-10",
    title: "Marriott Connector",
    children: (
      <>
        Check <br />
        Charging Status
      </>
    ),
    relations: [
      {
        targetId: "end",
        targetAnchor: "left",
        sourceAnchor: "bottom",
      },
    ],
  },
];

export const left3None = [
  {
    type: "connector",
    id: "1-1",
    title: "EVR",
    children: (
      <>
        Request <br />
        Charging Start
      </>
    ),
    relations: [
      {
        targetId: "1-2",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "connector",
    id: "1-2",
    title: "EVR",
    children: (
      <>
        Get <br />
        Charging Status
      </>
    ),
    relations: [
      {
        targetId: "1-3",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "empty",
    id: "9-2",
  },
  {
    type: "connector_red",
    id: "1-3",
    title: "Marriott",
    children: (
      <>
        Register <br />
        Charging Status
      </>
    ),
    relations: [
      {
        targetId: "1-4",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "empty",
    id: "9-3",
  },
  {
    type: "selector",
    id: "1-4",
    title: "Selector",
    children: (
      <>
        Check <br />
        Charging Status
      </>
    ),
    relations: [
      {
        targetId: "1-5",
        targetAnchor: "top",
        sourceAnchor: "bottom",
        label: (
          <div className="arrow_text" style={{ marginLeft: 120 }}>
            Charging Stopped
          </div>
        ),
      },
    ],
  },
  {
    type: "empty",
    id: "9-4",
  },
  {
    type: "connector",
    id: "1-5",
    title: "EVR",
    children: (
      <>
        Get <br />
        Charging Result
      </>
    ),
    relations: [
      {
        targetId: "1-6",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "empty",
    id: "9-1",
  },
  {
    type: "connector_red",
    id: "1-6",
    title: "Marriott",
    children: (
      <>
        Register <br />
        Charging Result
      </>
    ),
    relations: [
      {
        targetId: "end",
        targetAnchor: "left",
        sourceAnchor: "bottom",
      },
    ],
  },
];

export const right2 = [
  {
    type: "connector",
    id: "3-1",
    title: "LGE Connector",
    children: (
      <>
        Request <br />
        Charging Start
      </>
    ),
    relations: [
      {
        targetId: "3-2",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "connector",
    id: "3-2",
    title: "LGE Connector",
    children: (
      <>
        Request <br />
        Charging Start
      </>
    ),
    relations: [
      {
        targetId: "3-3",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "connector_red",
    id: "3-3",
    title: "Marriott Connector",
    children: (
      <>
        Check <br />
        Charging Status
      </>
    ),
    relations: [
      {
        targetId: "3-4",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "selector",
    id: "3-4",
    title: "Selector",
    children: "Charging Status",
    relations: [
      {
        targetId: "3-5",
        targetAnchor: "top",
        sourceAnchor: "bottom",
        label: (
          <div className="arrow_text" style={{ marginLeft: 120 }}>
            Charging Stopped
          </div>
        ),
      },
    ],
  },
  {
    type: "connector",
    id: "3-5",
    title: "LGE Connector",
    children: (
      <>
        Request <br />
        Charging Start
      </>
    ),
    relations: [
      {
        targetId: "3-6",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "connector_red",
    id: "3-6",
    title: "Marriott Connector",
    children: (
      <>
        Check <br />
        Charging Status
      </>
    ),
    relations: [
      {
        targetId: "3-7",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "wait",
    id: "3-7",
    title: "Wait",
    children: (
      <>
        Wait <br />
        Charging Result
      </>
    ),
    relations: [
      {
        targetId: "3-8",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "connector",
    id: "3-8",
    title: "LGE Connector",
    children: (
      <>
        Request <br />
        Charging Start
      </>
    ),
    relations: [
      {
        targetId: "3-9",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "connector",
    id: "3-9",
    title: "LGE Connector",
    children: (
      <>
        Request <br />
        Charging Start
      </>
    ),
    relations: [
      {
        targetId: "3-10",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "connector_red",
    id: "3-10",
    title: "Marriott Connector",
    children: (
      <>
        Check <br />
        Charging Status
      </>
    ),
    relations: [
      {
        targetId: "end",
        targetAnchor: "right",
        sourceAnchor: "bottom",
      },
    ],
  },
];

export const right3None = [
  {
    type: "connector",
    id: "3-1",
    title: "SWTCH",
    children: (
      <>
        Request <br />
        Charging Start
      </>
    ),
    relations: [
      {
        targetId: "3-2",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "wake_up",
    id: "3-2",
    title: "WAKE UP",
    children: (
      <>
        Get <br />
        Charging Result
      </>
    ),
    relations: [
      {
        targetId: "3-3",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "empty",
    id: "9-1",
  },
  {
    type: "connector_red",
    id: "3-3",
    title: "Marriott",
    children: (
      <>
        Register <br />
        Charging Result
      </>
    ),
    relations: [
      {
        targetId: "3-7",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "wait",
    id: "3-7",
    title: "Wait",
    children: (
      <>
        Wait <br />
        Charging Result
      </>
    ),
    relations: [
      {
        targetId: "3-8",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "empty",
    id: "9-2",
  },
  {
    type: "connector",
    id: "3-8",
    title: "SWTCH",
    children: (
      <>
        Request <br />
        Payment
      </>
    ),
    relations: [
      {
        targetId: "3-9",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "connector",
    id: "3-9",
    title: "SWTCH",
    children: (
      <>
        Get <br />
        Payment Result
      </>
    ),
    relations: [
      {
        targetId: "3-10",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "empty",
    id: "9-3",
  },
  {
    type: "connector_red",
    id: "3-10",
    title: "Marriott",
    children: (
      <>
        Register <br />
        Payment Result
      </>
    ),
    relations: [
      {
        targetId: "end",
        targetAnchor: "right",
        sourceAnchor: "bottom",
      },
    ],
  },
];

export const path2 = [
  { pathD: "M 400,660 h 40 v -310 h -36" },
  { pathD: "M 800,660 h 40 v -310 h -36" },
  { pathD: "M 1200,660 h 40 v -310 h -36" },
];

export const path3 = [
  { pathD: "M 400,960 h 40 v -610 h -36" },
  { pathD: "M 800,660 h 40 v -310 h -36" },
  // { pathD: "M 1200,660 h 40 v -310 h -36" },
];

export const scenario2 = [
  "NX-API53kacnYXH65BADW5q17hZC",
  "NX-API39QthWxiWhCv3V67SAqQOJ",
  "NX-API3eSDNMXlqbdQjzQHl1NjuW",
  "NX-API39QthWxiWhCv3V67SAqQOJ",
  "NX-API3eSDNMXlqbdQjzQHl1NjuW",
  "NX-API6gtDauRUbS5yLBVaiTKSXX",
  "NX-API4bgKmO6vrQDufUCDY15YCL",
  "Callback Api",
  "NX-API4zzl6DwhtSGdQSEm1DkLMd",
  "NX-API1qv3d9sE9ozySeLgCmQcp4",
  "NX-API6aca03BkSNNrlkBHhgHjph",
];

export const center3 = [
  {
    type: "connector",
    id: "NX-API53kacnYXH65BADW5q17hZC",
    connector_id: "NX-CON5K10bs50aqzDhSCrUmKjHE",
    title: "SWTCH Connector",
    children: (
      <>
        Request <br />
        Charging Start
      </>
    ),
    relations: [
      {
        targetId: "NX-API39QthWxiWhCv3V67SAqQOJ",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "connector",
    id: "NX-API39QthWxiWhCv3V67SAqQOJ",
    connector_id: "NX-CON5K10bs50aqzDhSCrUmKjHE",
    title: "SWTCH Connector",
    children: (
      <>
        Get <br />
        Charging Status
      </>
    ),
    relations: [
      {
        targetId: "NX-API3eSDNMXlqbdQjzQHl1NjuW",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "connector_red",
    id: "NX-API3eSDNMXlqbdQjzQHl1NjuW",
    connector_id: "NX-CON3fJT4igNecptcrSy0CMuBv",
    title: "Marriott Connector",
    children: (
      <>
        Register <br />
        Charging Status
      </>
    ),
    relations: [
      {
        targetId: "selector_center",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "selector",
    id: "selector_center",
    title: "Selector",
    triggerId: "NX-API3eSDNMXlqbdQjzQHl1NjuW",
    children: "Charging Status",
    relations: [
      {
        targetId: "NX-API6gtDauRUbS5yLBVaiTKSXX",
        targetAnchor: "top",
        sourceAnchor: "bottom",
        label: (
          <div className="arrow_text" style={{ marginLeft: 120 }}>
            Charging Stopped
          </div>
        ),
      },
    ],
    doneId: ["NX-API3eSDNMXlqbdQjzQHl1NjuW", "NX-API39QthWxiWhCv3V67SAqQOJ"],
  },
  {
    type: "connector",
    id: "NX-API6gtDauRUbS5yLBVaiTKSXX",
    connector_id: "NX-CON5K10bs50aqzDhSCrUmKjHE",
    title: "SWTCH Connector",
    children: (
      <>
        Get <br />
        Charging Result
      </>
    ),
    relations: [
      {
        targetId: "NX-API4bgKmO6vrQDufUCDY15YCL",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "connector_red",
    id: "NX-API4bgKmO6vrQDufUCDY15YCL",
    connector_id: "NX-CON3fJT4igNecptcrSy0CMuBv",
    title: "Marriott Connector",
    children: (
      <>
        Register <br />
        Charging Result
      </>
    ),
    relations: [
      {
        targetId: "Callback Api",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "wait",
    id: "Callback Api",
    connector_id: "Callback Connector",
    title: "Wait",
    children: (
      <>
        Wait <br />
        Payment Confirm
      </>
    ),
    relations: [
      {
        targetId: "NX-API4zzl6DwhtSGdQSEm1DkLMd",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "connector",
    id: "NX-API4zzl6DwhtSGdQSEm1DkLMd",
    connector_id: "NX-CON5K10bs50aqzDhSCrUmKjHE",
    title: "SWTCH Connector",
    children: (
      <>
        Request <br />
        Payment
      </>
    ),
    relations: [
      {
        targetId: "NX-API1qv3d9sE9ozySeLgCmQcp4",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "connector",
    id: "NX-API1qv3d9sE9ozySeLgCmQcp4",
    connector_id: "NX-CON5K10bs50aqzDhSCrUmKjHE",
    title: "SWTCH Connector",
    children: (
      <>
        Get <br />
        Payment Result
      </>
    ),
    relations: [
      {
        targetId: "NX-API6aca03BkSNNrlkBHhgHjph",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "connector_red",
    id: "NX-API6aca03BkSNNrlkBHhgHjph",
    connector_id: "NX-CON3fJT4igNecptcrSy0CMuBv",
    title: "Marriott Connector",
    children: (
      <>
        Register <br />
        Payment Result
      </>
    ),
    relations: [
      {
        targetId: "end",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
    end: true,
  },
];

export const center4 = [
  {
    type: "connector",
    id: "NX-API53kacnYXH65BADW5q17hZC",
    connector_id: "NX-CON5K10bs50aqzDhSCrUmKjHE",
    title: "e-Centric",
    children: (
      <>
        Request <br />
        Charging Start
      </>
    ),
    relations: [
      {
        targetId: "NX-API39QthWxiWhCv3V67SAqQOJ",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "connector",
    id: "NX-API39QthWxiWhCv3V67SAqQOJ",
    connector_id: "NX-CON5K10bs50aqzDhSCrUmKjHE",
    title: "e-Centric",
    children: (
      <>
        Get <br />
        Charging Status
      </>
    ),
    relations: [
      {
        targetId: "NX-API3eSDNMXlqbdQjzQHl1NjuW",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "connector_red",
    id: "NX-API3eSDNMXlqbdQjzQHl1NjuW",
    connector_id: "NX-CON3fJT4igNecptcrSy0CMuBv",
    title: "Marriott",
    children: (
      <>
        Register <br />
        Charging Status
      </>
    ),
    relations: [
      {
        targetId: "selector_center",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "selector",
    id: "selector_center",
    title: "Selector",
    triggerId: "NX-API3eSDNMXlqbdQjzQHl1NjuW",
    children: "Charging Status",
    relations: [
      {
        targetId: "NX-API6gtDauRUbS5yLBVaiTKSXX",
        targetAnchor: "top",
        sourceAnchor: "bottom",
        label: (
          <div className="arrow_text" style={{ marginLeft: 120 }}>
            Charging Stopped
          </div>
        ),
      },
    ],
    doneId: ["NX-API3eSDNMXlqbdQjzQHl1NjuW", "NX-API39QthWxiWhCv3V67SAqQOJ"],
  },
  {
    type: "connector",
    id: "NX-API6gtDauRUbS5yLBVaiTKSXX",
    connector_id: "NX-CON5K10bs50aqzDhSCrUmKjHE",
    title: "e-Centric",
    children: (
      <>
        Get <br />
        Charging Result
      </>
    ),
    relations: [
      {
        targetId: "NX-API4bgKmO6vrQDufUCDY15YCL",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "connector_red",
    id: "NX-API4bgKmO6vrQDufUCDY15YCL",
    connector_id: "NX-CON3fJT4igNecptcrSy0CMuBv",
    title: "Marriott",
    children: (
      <>
        Register <br />
        Charging Result
      </>
    ),
    relations: [
      {
        targetId: "Callback Api",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "wait",
    id: "Callback Api",
    connector_id: "Callback Connector",
    title: "Wait",
    children: (
      <>
        Wait <br />
        Payment Confirm
      </>
    ),
    relations: [
      {
        targetId: "NX-API4zzl6DwhtSGdQSEm1DkLMd",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "connector",
    id: "NX-API4zzl6DwhtSGdQSEm1DkLMd",
    connector_id: "NX-CON5K10bs50aqzDhSCrUmKjHE",
    title: "e-Centric",
    children: (
      <>
        Request <br />
        Payment
      </>
    ),
    relations: [
      {
        targetId: "NX-API1qv3d9sE9ozySeLgCmQcp4",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "connector",
    id: "NX-API1qv3d9sE9ozySeLgCmQcp4",
    connector_id: "NX-CON5K10bs50aqzDhSCrUmKjHE",
    title: "e-Centric",
    children: (
      <>
        Get <br />
        Payment Result
      </>
    ),
    relations: [
      {
        targetId: "NX-API6aca03BkSNNrlkBHhgHjph",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "connector_red",
    id: "NX-API6aca03BkSNNrlkBHhgHjph",
    connector_id: "NX-CON3fJT4igNecptcrSy0CMuBv",
    title: "Marriott",
    children: (
      <>
        Register <br />
        Payment Result
      </>
    ),
    relations: [
      {
        targetId: "end",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
    end: true,
  },
];

export const right3 = [
  {
    type: "connector",
    id: "NX-API53kacnYXH65BADW5q17hZC",
    connector_id: "NX-CON5K10bs50aqzDhSCrUmKjHE",
    title: "LGE Connector",
    children: (
      <>
        Request <br />
        Charging Start
      </>
    ),
    relations: [
      {
        targetId: "NX-API39QthWxiWhCv3V67SAqQOJ",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "connector",
    id: "NX-API39QthWxiWhCv3V67SAqQOJ",
    connector_id: "NX-CON5K10bs50aqzDhSCrUmKjHE",
    title: "LGE Connector",
    children: (
      <>
        Get <br />
        Charging Status
      </>
    ),
    relations: [
      {
        targetId: "NX-API3eSDNMXlqbdQjzQHl1NjuW",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "connector_red",
    id: "NX-API3eSDNMXlqbdQjzQHl1NjuW",
    connector_id: "NX-CON3fJT4igNecptcrSy0CMuBv",
    title: "Marriott Connector",
    children: (
      <>
        Register <br />
        Charging Status
      </>
    ),
    relations: [
      {
        targetId: "selector_center",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "selector",
    id: "selector_center",
    title: "Selector",
    triggerId: "NX-API3eSDNMXlqbdQjzQHl1NjuW",
    children: "Charging Status",
    relations: [
      {
        targetId: "NX-API6gtDauRUbS5yLBVaiTKSXX",
        targetAnchor: "top",
        sourceAnchor: "bottom",
        label: (
          <div className="arrow_text" style={{ marginLeft: 120 }}>
            Charging Stopped
          </div>
        ),
      },
    ],
    doneId: ["NX-API3eSDNMXlqbdQjzQHl1NjuW", "NX-API39QthWxiWhCv3V67SAqQOJ"],
  },
  {
    type: "connector",
    id: "NX-API6gtDauRUbS5yLBVaiTKSXX",
    connector_id: "NX-CON5K10bs50aqzDhSCrUmKjHE",
    title: "LGE Connector",
    children: (
      <>
        Get <br />
        Charging Result
      </>
    ),
    relations: [
      {
        targetId: "NX-API4bgKmO6vrQDufUCDY15YCL",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "connector_red",
    id: "NX-API4bgKmO6vrQDufUCDY15YCL",
    connector_id: "NX-CON3fJT4igNecptcrSy0CMuBv",
    title: "Marriott Connector",
    children: (
      <>
        Register <br />
        Charging Result
      </>
    ),
    relations: [
      {
        targetId: "Callback Api",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "wait",
    id: "Callback Api",
    connector_id: "Callback Connector",
    title: "Wait",
    children: (
      <>
        Wait <br />
        Payment Confirm
      </>
    ),
    relations: [
      {
        targetId: "NX-API4zzl6DwhtSGdQSEm1DkLMd",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "connector",
    id: "NX-API4zzl6DwhtSGdQSEm1DkLMd",
    connector_id: "NX-CON5K10bs50aqzDhSCrUmKjHE",
    title: "LGE Connector",
    children: (
      <>
        Request <br />
        Payment
      </>
    ),
    relations: [
      {
        targetId: "NX-API1qv3d9sE9ozySeLgCmQcp4",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "connector",
    id: "NX-API1qv3d9sE9ozySeLgCmQcp4",
    connector_id: "NX-CON5K10bs50aqzDhSCrUmKjHE",
    title: "LGE Connector",
    children: (
      <>
        Get <br />
        Payment Result
      </>
    ),
    relations: [
      {
        targetId: "NX-API6aca03BkSNNrlkBHhgHjph",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "connector_red",
    id: "NX-API6aca03BkSNNrlkBHhgHjph",
    connector_id: "NX-CON3fJT4igNecptcrSy0CMuBv",
    title: "Marriott Connector",
    children: (
      <>
        Register <br />
        Payment Result
      </>
    ),
    relations: [
      {
        targetId: "end",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
    end: true,
  },
];

export const left3 = [
  {
    type: "connector",
    id: "NX-API53kacnYXH65BADW5q17hZC",
    connector_id: "NX-CON5K10bs50aqzDhSCrUmKjHE",
    title: "EVR Connector",
    children: (
      <>
        Request <br />
        Charging Start
      </>
    ),
    relations: [
      {
        targetId: "NX-API39QthWxiWhCv3V67SAqQOJ",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "connector",
    id: "NX-API39QthWxiWhCv3V67SAqQOJ",
    connector_id: "NX-CON5K10bs50aqzDhSCrUmKjHE",
    title: "EVR Connector",
    children: (
      <>
        Get <br />
        Charging Status
      </>
    ),
    relations: [
      {
        targetId: "NX-API3eSDNMXlqbdQjzQHl1NjuW",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "connector_red",
    id: "NX-API3eSDNMXlqbdQjzQHl1NjuW",
    connector_id: "NX-CON3fJT4igNecptcrSy0CMuBv",
    title: "Marriott Connector",
    children: (
      <>
        Register <br />
        Charging Status
      </>
    ),
    relations: [
      {
        targetId: "selector_center",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "selector",
    id: "selector_center",
    title: "Selector",
    triggerId: "NX-API3eSDNMXlqbdQjzQHl1NjuW",
    children: "Charging Status",
    relations: [
      {
        targetId: "NX-API6gtDauRUbS5yLBVaiTKSXX",
        targetAnchor: "top",
        sourceAnchor: "bottom",
        label: (
          <div className="arrow_text" style={{ marginLeft: 120 }}>
            Charging Stopped
          </div>
        ),
      },
    ],
    doneId: ["NX-API3eSDNMXlqbdQjzQHl1NjuW", "NX-API39QthWxiWhCv3V67SAqQOJ"],
  },
  {
    type: "connector",
    id: "NX-API6gtDauRUbS5yLBVaiTKSXX",
    connector_id: "NX-CON5K10bs50aqzDhSCrUmKjHE",
    title: "EVR Connector",
    children: (
      <>
        Get <br />
        Charging Result
      </>
    ),
    relations: [
      {
        targetId: "NX-API4bgKmO6vrQDufUCDY15YCL",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "connector_red",
    id: "NX-API4bgKmO6vrQDufUCDY15YCL",
    connector_id: "NX-CON3fJT4igNecptcrSy0CMuBv",
    title: "Marriott Connector",
    children: (
      <>
        Register <br />
        Charging Result
      </>
    ),
    relations: [
      {
        targetId: "Callback Api",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "wait",
    id: "Callback Api",
    connector_id: "Callback Connector",
    title: "Wait",
    children: (
      <>
        Wait <br />
        Payment Confirm
      </>
    ),
    relations: [
      {
        targetId: "NX-API4zzl6DwhtSGdQSEm1DkLMd",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "connector",
    id: "NX-API4zzl6DwhtSGdQSEm1DkLMd",
    connector_id: "NX-CON5K10bs50aqzDhSCrUmKjHE",
    title: "EVR Connector",
    children: (
      <>
        Request <br />
        Payment
      </>
    ),
    relations: [
      {
        targetId: "NX-API1qv3d9sE9ozySeLgCmQcp4",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "connector",
    id: "NX-API1qv3d9sE9ozySeLgCmQcp4",
    connector_id: "NX-CON5K10bs50aqzDhSCrUmKjHE",
    title: "EVR Connector",
    children: (
      <>
        Get <br />
        Payment Result
      </>
    ),
    relations: [
      {
        targetId: "NX-API6aca03BkSNNrlkBHhgHjph",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
  },
  {
    type: "connector_red",
    id: "NX-API6aca03BkSNNrlkBHhgHjph",
    connector_id: "NX-CON3fJT4igNecptcrSy0CMuBv",
    title: "Marriott Connector",
    children: (
      <>
        Register <br />
        Payment Result
      </>
    ),
    relations: [
      {
        targetId: "end",
        targetAnchor: "top",
        sourceAnchor: "bottom",
      },
    ],
    end: true,
  },
];
