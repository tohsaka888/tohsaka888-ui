import { ImgHTMLAttributes } from "react";

export type AvatarProps = {
  size: 'small' | 'default' | 'large';
  shape: 'circle' | 'rect';
} & ImgHTMLAttributes<HTMLImageElement>;