import React from 'react'
import Loader from 'react-loader-spinner';
import { usePromiseTracker } from "react-promise-tracker";


const LoadingIndicator = props => {
  const { promiseInProgress } = usePromiseTracker({delay: 500});

  return promiseInProgress && 
   <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Loader type="TailSpin"  color="gray" height="20%" width="20%" />
    </div>
};

export default LoadingIndicator