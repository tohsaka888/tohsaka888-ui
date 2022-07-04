import styled from "styled-components";
import { AvatarProps } from "./type";

const parsingSize = (size: AvatarProps['size']) => {
  switch (size) {
    case "small":
      return `40px`;
    case "default":
      return `60px`;
    case "large":
      return `80px`;
  }
}

export const AvatarWrapper = styled.img<AvatarProps>`
  width: ${({ size }) => parsingSize(size)};
  height: ${({ size }) => parsingSize(size)};
  border-radius: ${({ shape }) => shape === 'circle' ? '50%' : '8px'};
  box-shadow: 0px 0px 10px 1px #cecece;
`