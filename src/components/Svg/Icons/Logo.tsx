import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 40 60" {...props}>
      <image width="40" height="60" href="/images/egg/logo.png" />
    </Svg>
  );
};

export default Icon;
