import React, { useEffect, useState } from 'react';

const ExampleComponent: React.FC = () => {
  const [parentOrigin, setParentOrigin] = useState<string | null>(null);
  const [parentHost, setParentHost] = useState<string | null>(null);

  useEffect(() => {
    if (document.referrer) {
      try {
        const url = new URL(document.referrer);
        setParentOrigin(url.origin); // includes protocol, subdomain, domain, port
        setParentHost(url.host);     // includes subdomain, domain, port (no protocol)
      } catch (e) {
        setParentOrigin(document.referrer);
        setParentHost(document.referrer);
      }
    }
  }, []);

  return (
    <div>
      <h1>Hello from ExampleComponent!</h1>
      <p>This is a simple React component.</p>
      <p>
        Parent origin (with protocol): {parentOrigin ? parentOrigin : 'Not embedded or no referrer'}
      </p>
      <p>
        Parent host (domain & subdomain): {parentHost ? parentHost : 'Not embedded or no referrer'}
      </p>
    </div>
  );
};

export default ExampleComponent;