import React from 'react';
import ExampleComponent from '../components/ExampleComponent';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Welcome to the Simple Next.js App!</h1>
            <ExampleComponent />
        </div>
    );
};

export default Home;