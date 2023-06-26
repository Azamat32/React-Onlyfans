import React from 'react';
import Image from '../Image/Image';
import './button.scss';
interface Props {
  border: string;
  backgroundColor?: string;
  title: React.ReactNode;
  padding?: string;
  maxWidth: string;
  icon?: string;
  width: string;
  hoverColorChange?: string;
  fontColor: string;
  fontHoverColor?: string;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({
  onClick,
  padding,
  border,
  backgroundColor,
  title,
  maxWidth,
  icon,
  width,
  hoverColorChange,
  fontColor,
  fontHoverColor,
}) => {
  const changeBackgroundHoverColor = (e: any) => {
    e.target.style.background = hoverColorChange;
    if (fontHoverColor) {
      e.target.style.color = fontHoverColor;
    }
  };
  const changeBackgroundColorDefault = (e: any) => {
    e.target.style.background = backgroundColor;

    if (fontColor) {
      e.target.style.color = fontColor;
    }
  };
  return (
    <button
      onClick={onClick}
      onMouseOver={hoverColorChange ? changeBackgroundHoverColor : undefined}
      onMouseLeave={hoverColorChange ? changeBackgroundColorDefault : undefined}
      style={{
        backgroundColor: backgroundColor,
        border,
        padding,
        maxWidth,
        width,
        color: fontColor,
      }}
    >
      {icon && <Image path={icon} alt="" />} {title}
    </button>
  );
};

export default Button;
