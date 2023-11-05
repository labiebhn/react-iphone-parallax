import React from 'react';
import '../styles.scss';
import { TailSpin } from 'react-loader-spinner';

const LoaderScreen = () => {
  return (
    <div id="loader-screen" className="loader-screen">
      <TailSpin color="#FAFAFAFA" height={80} width={80} />
    </div>
  );
}

export default LoaderScreen