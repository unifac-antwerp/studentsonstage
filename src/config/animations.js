import { keyframes, css } from "styled-components";

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const logoAnim = keyframes`
  0% {
    transform: scale(0.6);
  }

  60% {
    transform: scale(1);
  }

  80% {
    transform: scale(0.98);
  }

  100% {
    transform: scale(1);
  }
`;

export const countUpStyling = css`
  * {
    margin: 0;
    padding: 0;
  }
  ul,
  ol,
  li {
    list-style: none;
  }
  .title {
    text-align: center;
  }
  .exam-div {
    padding: 20px 0;
    text-align: center;
    color: cornflowerblue;
    font-size: 30px;
  }
  .restart-btn {
    margin-top: 50px;
    background-color: chocolate;
    color: #ffffff;
    padding: 10px 20px;
    border-radius: 5px;
  }
  .count-roll-main,
  .count-slide-main {
    display: inline-block;
    overflow: hidden;
  }
  .count-roll-ul {
    overflow: hidden;
    transition-timing-function: ease-out;
    -moz-transition-timing-function: ease-out; /* Firefox 4 */
    -webkit-transition-timing-function: ease-out; /* Safari 和 Chrome */
    -o-transition-timing-function: ease-out; /* Opera */
  }
  .count-roll-li {
    display: block;
  }
`;
