import React from "react";
// import "./skills.scss";
import { Containerfluid, Title } from "../../../../styles/global";
import {
  Card,
  SkillContent,
  WrapCard,
  WrapCardSkill,
  WrapSkill,
} from "./style";

function Skills({ skillSection }) {
  const listSkill = [
    {
      id: 1,
      nameCard: "ReactJs",
    },
    {
      id: 2,
      nameCard: "CSS/SCSS",
    },
    {
      id: 3,
      nameCard: "Javascript",
    },
    {
      id: 4,
      nameCard: "TypeScript",
    },
    {
      id: 5,
      nameCard: "HTML",
    },
    {
      id: 6,
      nameCard: "Responsive",
    },
    {
      id: 7,
      nameCard: "Boostrap",
    },
    {
      id: 8,
      nameCard: "Tailwind",
    },
  ];

  return (
    <WrapSkill ref={skillSection}>
      <Containerfluid>
        <SkillContent>
          <Title>
            <h2>Skills</h2>
            <p>My skill</p>
          </Title>
          <WrapCardSkill>
            {listSkill.map((item, index) => (
              // <Card nameCard={item.nameCard} />
              <WrapCard key={index}>
                <Card className="hover" key={item.id}>
                  {item.nameCard}
                </Card>{" "}
              </WrapCard>
            ))}
          </WrapCardSkill>
        </SkillContent>{" "}
      </Containerfluid>{" "}
    </WrapSkill>
  );
}

export default Skills;
