import React, { useState } from 'react';
import { Rocket } from './Rocket';
import '../styles/_launchpad.scss';

export default function LaunchPad() {
  const [rerenderCount, triggerRerender] = useState(0);

  setTimeout(() => { triggerRerender(rerenderCount + 1); }, 500);

  return (
    <div className="launchpad">
      <Rocket />
    </div>
  );
}
