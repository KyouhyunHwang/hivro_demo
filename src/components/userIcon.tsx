import React from "react";
import { ArcherElement } from "react-archer";
import { Box } from "@chakra-ui/react";
import { FcVoicePresentation } from "react-icons/fc";

const UserIcon = () => {
  return (
    <div style={{ width: "100px", height: "100px", marginLeft: 100 }}>
      <ArcherElement
        id="user"
        relations={[
          {
            targetId: "start",
            targetAnchor: "left",
            sourceAnchor: "right",
            label: (
              <div
                className="arrow_text"
                style={{ marginLeft: 40, marginBottom: 20 }}
              >
                Start Charging
              </div>
            ),
          },
        ]}
      >
        <Box>
          <FcVoicePresentation size={100} />
        </Box>
      </ArcherElement>
    </div>
  );
};

export default UserIcon;
