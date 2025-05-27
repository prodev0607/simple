import React, { useEffect, useState } from 'react';

const ExampleComponent: React.FC = () => {
  const [parentHostname, setParentHostname] = useState<string | null>(null);

  useEffect(() => {
    if (document.referrer) {
      try {
        const url = new URL(document.referrer);
        setParentHostname(url.hostname); // full domain with subdomain, no protocol/port
      } catch (e) {
        setParentHostname(document.referrer);
      }
    }
  }, []);

  return (
    <div>
      <h1>Hello from ExampleComponent!</h1>
      <p>This is a simple React component.</p>
      <p>
        Parent full domain (with subdomain): {parentHostname ? parentHostname : 'Not embedded or no referrer'}
      </p>
    </div>
  );
};

export default ExampleComponent;