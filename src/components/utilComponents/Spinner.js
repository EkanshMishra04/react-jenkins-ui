import RingLoader from 'react-spinners/RingLoader';

import React from 'react';

function Spinner() {
  return (
    <div>

      <RingLoader
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Spinner;
