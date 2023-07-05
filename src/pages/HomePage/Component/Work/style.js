// import "../../../../assets/css/style.scss";
import styled from "styled-components";
import { device } from "../../../../styles/media";

export const WorkWrapper = styled.section``;
export const WorkContent = styled.div`
  .positionSecond {
    flex-direction: row-reverse;
  }
`;
export const WorkProject = styled.div`
  --card-height: 40vw;
  --card-margin: 4vw;
  --card-top-offset: 6em;
  --numcards: 2;
  --outline-width: 0px;
  ul {
    padding: 0px;
  }
  #cards {
    /* padding-bottom: calc(var(--numcards) * var(--card-top-offset)); */
    /* Make place at bottom, as items will slide to that position*/
    /* margin-bottom: var(--card-margin); */

    /* Don't include the --card-margin in padding, as that will affect the scroll-timeline*/
    /* #card_1 {
      --index: 1;
    }

    #card_2 {
      --index: 2;
    } */

    .card {
      position: sticky;
      top: 0;
      padding-top: 6em;
      ${device.mobile} {
        position: initial;
        padding-top: 0px;
        padding-bottom: 40px;
      }
      /* padding-top: calc(var(--index) * var(--card-top-offset)); */
    }
  }
`;
export const Test = styled.div``;
