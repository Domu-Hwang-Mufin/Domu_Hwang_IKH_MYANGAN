import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import DawnHorizon from '@/components/three/DawnHorizon';
import FadeInSection from '@/components/animations/FadeInSection';
import { useTranslation } from 'react-i18next';

const HeroSection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="relative min-h-screen overflow-hidden bg-transparent"> {/* Added bg-transparent */}
            {/* Three.js Dawn Horizon Animation Background */}
            <div className="absolute inset-0 z-0 w-screen h-screen">
                <DawnHorizon />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 min-h-screen flex items-center justify-center">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-4xl mx-auto" style={{ marginTop: '-150px' }}>
                        {/* Status Badge */}
                        <FadeInSection delay={0.1}>
                            <Badge className="mb-4 md:mb-6 bg-yellow-500/20 text-yellow-400 border-yellow-500/50 px-3 md:px-4 py-1 backdrop-blur-sm text-caption md:text-body-sm">
                                {t('hero.badge')}
                            </Badge>
                        </FadeInSection>

                        {/* Main Copy - Responsive Typography */}
                        <FadeInSection delay={0.2}>
                            <h1 className="text-h1 md:text-display font-bold leading-tight mb-4 md:mb-6 text-white drop-shadow-lg">
                                {t('hero.title')}
                                <br />
                                <span className="text-yellow-400">{t('hero.titleHighlight')}</span>
                            </h1>
                        </FadeInSection>

                        {/* Sub Copy - Responsive */}
                        <FadeInSection delay={0.3}>
                            <p className="text-body md:text-body-lg text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                                {t('hero.subtitle')}
                            </p>
                        </FadeInSection>

                        {/* CTA Buttons - Touch-friendly on mobile */}
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-4 w-full px-5 py-[40px] sm:px-0 sm:py-0 sm:max-w-none">
                            <Link to="/coming-soon" className="block w-full sm:w-auto">
                                <Button className="w-full sm:w-auto px-6 md:px-8 py-5 md:py-6 text-body md:text-h5 font-semibold bg-yellow-500 text-black hover:bg-yellow-600">
                                    {t('hero.getStarted')}
                                </Button>
                            </Link>
                            <Link to="/coming-soon" className="block w-full sm:w-auto">
                                <Button variant="outline" size="lg" className="w-full sm:w-auto px-6 md:px-8 py-5 md:py-6 text-body md:text-h5 bg-transparent border-white text-white hover:bg-white/10 font-semibold">
                                    {t('hero.viewMarkets')}
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
