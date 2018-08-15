import { keyframes } from "styled-components";

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
