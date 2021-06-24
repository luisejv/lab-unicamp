import React from "react";
import { useRouter } from "next/router";

const ButtonBanner = (props) => {
  const router = useRouter();
  return (
    <button className="buttonBanner" onClick={() => router.push(props.anchor)}>
      {props.children}
    </button>
  );
};

export default ButtonBanner;
