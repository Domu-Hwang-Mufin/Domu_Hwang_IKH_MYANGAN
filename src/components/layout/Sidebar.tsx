import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { X, TrendingUp, RefreshCcw, Wallet, Users, Globe, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type Language = 'en' | 'ko' | 'mn';

const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'ko', label: '한국어', flag: '🇰🇷' },
    { code: 'mn', label: 'Монгол', flag: '🇲🇳' },
];

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
    const { t, i18n } = useTranslation();
    const [langOpen, setLangOpen] = useState(false);

    // Get current language
    const currentLangCode = i18n.language?.split('-')[0] as Language;
    const currentLang = languages.find(l => l.code === currentLangCode) || languages[0];

    const handleLanguageChange = (langCode: Language) => {
        i18n.changeLanguage(langCode);
        setLangOpen(false);
    };

    const navItems = [
        { label: t('nav.trade'), path: '/coming-soon', icon: TrendingUp },
        { label: t('nav.quickSwap'), path: '/coming-soon', icon: RefreshCcw },
        { label: t('nav.wallet'), path: '/coming-soon', icon: Wallet },
        { label: t('nav.p2p'), path: '/coming-soon', icon: Users },
    ];

    return (
        <>
            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-[60] md:hidden"
                    onClick={onClose}
                />
            )}

            {/* Sidebar - slides from right */}
            <aside
                className={cn(
                    "fixed inset-y-0 right-0 z-[70] w-72 bg-black text-white transform transition-transform duration-300 ease-in-out flex flex-col md:hidden",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                {/* Header */}
                <div className="p-4 flex justify-between items-center border-b border-gray-700">
                    <h2 className="text-xl font-bold text-yellow-500">IKH MIYANGAN</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white">
                        <X className="h-6 w-6" />
                    </button>
                </div>

                {/* Navigation Items */}
                <nav className="p-4 space-y-2">
                    {navItems.map((item, index) => (
                        <Link
                            key={index}
                            to={item.path}
                            onClick={onClose}
                            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                        >
                            <item.icon className="h-5 w-5" />
                            <span className="font-medium">{item.label}</span>
                        </Link>
                    ))}
                </nav>

                {/* Language Selector */}
                <div className="px-4 py-2">
                    <button
                        onClick={() => setLangOpen(!langOpen)}
                        className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                    >
                        <div className="flex items-center gap-3">
                            <Globe className="h-5 w-5" />
                            <span className="font-medium">{currentLang?.flag} {currentLang?.label}</span>
                        </div>
                        <ChevronDown className={cn("h-4 w-4 transition-transform", langOpen && "rotate-180")} />
                    </button>
                    {langOpen && (
                        <div className="mt-1 ml-8 space-y-1">
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => handleLanguageChange(lang.code)}
                                    className={cn(
                                        "w-full flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors",
                                        currentLangCode === lang.code
                                            ? "bg-yellow-500/20 text-yellow-400"
                                            : "text-gray-400 hover:bg-gray-800 hover:text-white"
                                    )}
                                >
                                    <span>{lang.flag}</span>
                                    <span>{lang.label}</span>
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Spacer */}
                <div className="flex-1" />

                {/* CTA Buttons */}
                <div className="p-4 space-y-3 border-t border-gray-700">
                    <Link to="/coming-soon" onClick={onClose} className="block">
                        <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-6">
                            {t('common.signup')}
                        </Button>
                    </Link>
                    <Link to="/coming-soon" onClick={onClose} className="block">
                        <Button variant="outline" className="w-full border-gray-600 text-white hover:bg-gray-800 py-6">
                            {t('common.login')}
                        </Button>
                    </Link>
                </div>
            </aside>
        </>
    );
};
