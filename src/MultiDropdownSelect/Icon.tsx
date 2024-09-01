/// <reference types="vite-plugin-svgr/client" />

import arrow from "../assets/arrow.svg?react";
import checked from "../assets/checked.svg?react";

export const Icons = {
  arrow,
  checked,
};

interface Iprops {
  name: keyof typeof Icons;
}

export default function Icon({ name }: Iprops) {
  const DynamicIcon = Icons[name];
  return <DynamicIcon />;
}
