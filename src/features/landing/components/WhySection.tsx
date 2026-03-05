import React from 'react';
import { Shield, Scale } from 'lucide-react';
import FadeInSection from '@/components/animations/FadeInSection';
import { useTranslation } from 'react-i18next';

const WhySection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section id="about" className="py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4">
                <FadeInSection>
                    <div className="text-center mb-8 md:mb-12">
                        <h2 className="text-h2 md:text-h1 font-bold text-foreground mb-3 md:mb-4">
                            {t('why.title')}
                        </h2>
                        <p className="text-body-sm md:text-body text-muted-foreground max-w-2xl mx-auto">
                            {t('why.subtitle')}
                        </p>
                    </div>
                </FadeInSection>

                <div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">
                    {/* Technical Completeness */}
                    <FadeInSection delay={0.1} direction="left">
                        <div className="bg-card border border-border rounded-xl p-5 md:p-8 hover:border-yellow-500/50 transition-colors h-full">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-4 md:mb-6">
                                <Shield className="w-5 h-5 md:w-6 md:h-6 text-yellow-500" />
                            </div>
                            <h3 className="text-h5 md:text-h4 font-semibold text-foreground mb-3 md:mb-4">
                                {t('why.technicalExcellenceTitle')}
                            </h3>
                            <p className="text-body-sm md:text-body text-muted-foreground leading-relaxed">
                                {t('why.technicalExcellenceDesc')}
                            </p>
                        </div>
                    </FadeInSection>

                    {/* Regulatory Compliance */}
                    <FadeInSection delay={0.2} direction="right">
                        <div className="bg-card border border-border rounded-xl p-5 md:p-8 hover:border-yellow-500/50 transition-colors h-full">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-4 md:mb-6">
                                <Scale className="w-5 h-5 md:w-6 md:h-6 text-yellow-500" />
                            </div>
                            <h3 className="text-h5 md:text-h4 font-semibold text-foreground mb-3 md:mb-4">
                                {t('why.regulatoryComplianceTitle')}
                            </h3>
                            <p className="text-body-sm md:text-body text-muted-foreground leading-relaxed">
                                {t('why.regulatoryComplianceDesc')}
                            </p>
                        </div>
                    </FadeInSection>
                </div>
            </div>
        </section>
    );
};

export default WhySection;
