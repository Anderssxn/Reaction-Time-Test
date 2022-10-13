import React from 'react';
import { 
    Routes,
    Route 
} from 'react-router-dom';
import TimerPage from '../pages/TimerPage';

const app = () => {
    return (
            <Routes>
                <Route path="/" element={<TimerPage />} />
            </Routes>
    );
};

export default app;