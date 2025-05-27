import React, { useEffect, useState } from 'react';

const ExampleComponent: React.FC = () => {
  const [parentDomain, setParentDomain] = useState<string | null>(null);

  useEffect(() => {
    if (document.referrer) {
      try {
        const url = new URL(document.referrer);
        setParentDomain(url.origin);
      } catch (e) {
        setParentDomain(document.referrer);
      }
    }
  }, []);

  return (
    <div>
      <h1>Hello from ExampleComponent!</h1>
      <p>This is a simple React component.</p>
      <p>
        Parent domain: {parentDomain ? parentDomain : 'Not embedded or no referrer'}
      </p>
    </div>
  );
};

export default ExampleComponent;