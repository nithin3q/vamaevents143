import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFireworksPreset } from 'tsparticles-preset-fireworks';

const FireworksComponent = () => {
    const particlesInit = useCallback(async (engine) => {
        // Load the fireworks preset
        await loadFireworksPreset(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        // You can do something with the container when particles are loaded
    }, []);

    return (
        <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    preset: "fireworks",
                }}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            />
        </div>
    );
};

export default FireworksComponent;
