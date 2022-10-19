import React, { useEffect, useRef, useState } from "react";
import { Iframe, LoadingIframe } from "./styles";
import gifLoading from "./images/_______.gif";

const CustomIframe = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const onLoadHandler = () => {
    setIsLoaded(true);
  };

  return (
    <div>
      {!isLoaded && (
        <LoadingIframe>
          <img src={gifLoading} width="220px" />
        </LoadingIframe>
      )}
      <Iframe
        onLoad={onLoadHandler}
        src={props.src}
        height="700"
        width="400"
      ></Iframe>
    </div>
  );
};

export default CustomIframe;
