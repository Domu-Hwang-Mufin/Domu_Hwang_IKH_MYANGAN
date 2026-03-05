import React from 'react';
import { Globe, MapPin } from 'lucide-react';
import FadeInSection from '@/components/animations/FadeInSection';
import { useTranslation } from 'react-i18next';

const PartnershipSection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="py-12 md:py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <FadeInSection>
                        <div className="text-center mb-8 md:mb-12">
                            <h2 className="text-h2 md:text-h1 font-bold text-foreground mb-3 md:mb-4">
                                {t('partnership.title')}
                            </h2>
                            <p className="text-body-sm md:text-body text-muted-foreground max-w-2xl mx-auto">
                                {t('partnership.subtitle')}
                            </p>
                        </div>
                    </FadeInSection>

                    <FadeInSection delay={0.1}>
                        <div className="bg-gradient-to-br from-card to-muted/30 border border-border rounded-xl md:rounded-2xl p-5 md:p-8 lg:p-12">
                            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
                                {/* Global */}
                                <div className="text-center md:text-left">
                                    <div className="w-12 h-12 md:w-14 md:h-14 bg-yellow-500/10 rounded-xl flex items-center justify-center mx-auto md:mx-0 mb-3 md:mb-4">
                                        <Globe className="w-6 h-6 md:w-7 md:h-7 text-yellow-500" />
                                    </div>
                                    <h3 className="text-h5 md:text-h4 font-semibold text-foreground mb-2">
                                        {t('partnership.globalHQ')}
                                    </h3>
                                    <p className="text-body-sm md:text-body text-muted-foreground">
                                        {t('partnership.globalHQDesc')}
                                    </p>
                                </div>

                                {/* Local */}
                                <div className="text-center md:text-left">
                                    <div className="w-12 h-12 md:w-14 md:h-14 bg-yellow-500/10 rounded-xl flex items-center justify-center mx-auto md:mx-0 mb-3 md:mb-4">
                                        <MapPin className="w-6 h-6 md:w-7 md:h-7 text-yellow-500" />
                                    </div>
                                    <h3 className="text-h5 md:text-h4 font-semibold text-foreground mb-2">
                                        {t('partnership.mongolianPartner')}
                                    </h3>
                                    <p className="text-body-sm md:text-body text-muted-foreground">
                                        {t('partnership.mongolianPartnerDesc')}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-border">
                                <p className="text-center text-body-sm md:text-body text-muted-foreground leading-relaxed">
                                    {t('partnership.description')}
                                </p>
                            </div>
                        </div>
                    </FadeInSection>
                </div>
            </div>
        </section>
    );
};

export default PartnershipSection;
