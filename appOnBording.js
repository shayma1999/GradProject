  
import React, {useState} from 'react';
import Home from './components/Home';
import Onboarding from './components/Onboarding';

const appOnBording = () => {
  const [showOnboard, setShowOnboard] = useState(true);

  const handleOnboardFinish = () => {
    setShowOnboard(false);
  };

  return (
    <>
      {showOnboard && <Onboarding handleDone={handleOnboardFinish} />}
      {!showOnboard && <Home />}
    </>
  );
};

export default appOnBording;