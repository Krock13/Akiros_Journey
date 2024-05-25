/**
 * Main entry point of the application.
 * Sets up the React root, Redux store provider, router, and layout components.
 */

// React and ReactDOM for app rendering
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

// React Router for navigation
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Redux store provider
import { Provider } from 'react-redux';
import { store } from './redux/store';

// Import pages
import { Room } from './pages/Room/room';

// Global styles
import './utils/style/globalStyle.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path='/' element={<Room />} />
                    <Route path='/next-room' element={<Room />} />
                </Routes>
            </Router>
        </Provider>
    </StrictMode>
);
