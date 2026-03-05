import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/globals.css';
import './styles/trade.css';
import i18n from './i18n'; // Import the i18n configuration with LanguageDetector
import { I18nextProvider } from 'react-i18next'; // Import I18nextProvider
import { AuthProvider } from './features/auth/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { Toaster } from './components/ui/toaster';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <ThemeProvider>
                <AuthProvider>
                    <Suspense fallback={<div>Loading...</div>}>
                        <I18nextProvider i18n={i18n}>
                            <App />
                            <Toaster />
                        </I18nextProvider>
                    </Suspense>
                </AuthProvider>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);
