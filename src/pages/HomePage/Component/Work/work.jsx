import "aos/dist/aos.css";
import React from "react";
import wooder from "../../../../assets/img/wooder.jpg";
import gbox from "../../../../assets/img/gbox.jpg";
import CardWork from "../../../../components/cardwork";
import { Containerfluid, Title } from "../../../../styles/global";
import { WorkContent, WorkProject, WorkWrapper, Test } from "./style";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { PixiPlugin } from "gsap/PixiPlugin.js";

function Work({ workSection }) {
  const listWork = [
    {
      id: 1,
      name: "Wooder",
      img: wooder,
      positionProject: "projectFirst",
      link: "https://wooder-omega.vercel.app/",
      idCard: "card_1",
      des: "Tasked with reimagining their online magazine, we combined Bloomingdale's insightful editorial content with their vast range of high-end products in new ways.",
    },
    {
      id: 2,
      name: "Gbox",
      img: gbox,
      positionProject: "positionSecond",
      link: "https://gbox-studio-nine.vercel.app/",
      idCard: "card_2",
      des: "A complete overhaul of the Morgan Stanley digital presence with a twofold mission: to better promote their thought leadership, as well as to create a compelling platform to attract new talents.",
    },
  ];

  return (
    <WorkWrapper ref={workSection}>
      <Containerfluid>
        <WorkContent>
          <Title>
            <h2>Works</h2>
            <p>Selected projects</p>
          </Title>

          <WorkProject>
            <ul id="cards">
              {listWork.map((item) => (
                <div key={item.id} className="card" id={item.idCard}>
                  <CardWork
                    key={item.id}
                    name={item.name}
                    image={item.img}
                    positionPJ={item.positionProject}
                    link={item.link}
                    des={item.des}
                  />
                </div>
              ))}
            </ul>
            {/* {listWork.map((item) => (
              <div key={item.id}>
                <CardWork
                  key={item.id}
                  name={item.name}
                  image={item.img}
                  positionPJ={item.positionProject}
                  link={item.link}
                  des={item.des}
                />
              </div>
            ))} */}
          </WorkProject>
        </WorkContent>
        <Test> </Test>
      </Containerfluid>
    </WorkWrapper>
  );
}

export default Work;
