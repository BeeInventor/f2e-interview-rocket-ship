import React, { useState } from 'react';
import RocketCore from './RocketCore';

export function Rocket() {
  const [initialLaunchTime] = useState(Date.now());

  console.log('This message should appear only once.');
  return <RocketCore initialLaunchTime={initialLaunchTime} />;
}
