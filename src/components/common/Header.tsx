import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Globe, ChevronDown, Sun, Moon, Menu } from 'lucide-react';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { useTheme } from '@/contexts/ThemeContext';
import { useTranslation } from 'react-i18next';

type Language = 'en' | 'ko' | 'mn';

const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'ko', label: '한국어', flag: '🇰🇷' },
    { code: 'mn', label: 'Монгол', flag: '🇲🇳' },
];

interface HeaderProps {
    onMenuClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
    const location = useLocation();
    const { theme, toggleTheme } = useTheme();
    const { t, i18n } = useTranslation();
    const [langOpen, setLangOpen] = useState(false);

    // Get current language (handle codes like 'en-US' -> 'en')
    const currentLangCode = i18n.language?.split('-')[0] as Language;
    const currentLang = languages.find(l => l.code === currentLangCode) || languages[0];
    const isLandingPage = location.pathname === '/';

    const navItems = [
        { labelKey: 'nav.trade', label: t('nav.trade'), path: '/coming-soon' },
        { labelKey: 'nav.quickSwap', label: t('nav.quickSwap'), path: '/coming-soon' },
        { labelKey: 'nav.p2p', label: t('nav.p2p'), path: '/coming-soon' },
        { labelKey: 'nav.assets', label: t('nav.assets'), path: '/coming-soon' },
    ];

    const handleLanguageChange = (langCode: Language) => {
        i18n.changeLanguage(langCode);
        setLangOpen(false);
    };

    return (
        <header className="relative z-50 bg-background text-foreground p-4 flex justify-between items-center shadow-md border-b border-border">
            {/* Left side - Logo and Navigation */}
            <div className="flex items-center space-x-8">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold text-primary flex items-center">
                    IKH MYANGAN
                </Link>

                {/* Navigation - Hidden on mobile */}
                <nav className="hidden md:flex items-center space-x-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.labelKey}
                            to={item.path}
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Right-aligned buttons */}
            <div className="flex items-center space-x-4">
                {/* Theme Toggle - Hidden on landing page */}
                {!isLandingPage && (
                    <Button
                        variant="ghost"
                        size="sm"
                        className="hidden md:flex items-center gap-1 text-muted-foreground hover:text-foreground"
                        onClick={toggleTheme}
                    >
                        {theme === 'dark' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                    </Button>
                )}

                {/* Language Selector - Hidden on mobile */}
                <Popover open={langOpen} onOpenChange={setLangOpen}>
                    <PopoverTrigger asChild>
                        <Button variant="ghost" size="sm" className="hidden md:flex items-center gap-1 text-muted-foreground hover:text-foreground">
                            <Globe className="h-4 w-4" />
                            <span className="text-sm">{currentLang?.flag}</span>
                            <ChevronDown className="h-3 w-3" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-40 p-1" align="end">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => handleLanguageChange(lang.code)}
                                className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors ${currentLangCode === lang.code
                                    ? 'bg-primary/10 text-primary'
                                    : 'hover:bg-muted text-foreground'
                                    }`}
                            >
                                <span>{lang.flag}</span>
                                <span>{lang.label}</span>
                            </button>
                        ))}
                    </PopoverContent>
                </Popover>

                {/* Auth buttons - Hidden on mobile */}
                <Link to="/coming-soon" className="hidden md:block">
                    <Button variant="ghost" className="text-white hover:text-white/80 hover:bg-transparent">{t('common.login')}</Button>
                </Link>
                <Link to="/coming-soon" className="hidden md:block">
                    <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">{t('common.signup')}</Button>
                </Link>

                {/* Mobile Menu Button - Right side */}
                <Button variant="ghost" size="icon" className="md:hidden" onClick={onMenuClick}>
                    <Menu className="h-6 w-6" />
                </Button>
            </div>
        </header>
    );
};

export default Header;
