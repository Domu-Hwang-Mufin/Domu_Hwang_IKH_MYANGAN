import React from 'react';
import { BarChart, Zap, Lock, Eye, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const features = [
    {
        icon: BarChart,
        titleKey: 'common.spotTrading',
        descriptionKey: 'spotTradingDescription',
        color: 'text-yellow-500',
        bgColor: 'bg-yellow-500/10',
    },
    {
        icon: Zap,
        titleKey: 'common.fastReliableEngine',
        descriptionKey: 'fastReliableEngineDescription',
        color: 'text-yellow-500',
        bgColor: 'bg-yellow-500/10',
    },
    {
        icon: Lock,
        titleKey: 'common.secureCustody',
        descriptionKey: 'secureCustodyDescription',
        color: 'text-yellow-500',
        bgColor: 'bg-yellow-500/10',
    },
    {
        icon: Eye,
        titleKey: 'common.transparentOperations',
        descriptionKey: 'transparentOperationsDescription',
        color: 'text-yellow-500',
        bgColor: 'bg-yellow-500/10',
    },
    {
        icon: Globe,
        titleKey: 'common.localizedExperience',
        descriptionKey: 'localizedExperienceDescription',
        color: 'text-yellow-500',
        bgColor: 'bg-yellow-500/10',
    },
];

const FeaturesSection: React.FC = () => {
    const { t } = useTranslation(); // Initialize useTranslation
    return (
        <section id="features" className="py-12 md:py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-h2 md:text-h1 font-bold text-foreground mb-3 md:mb-4">
                        {t('landingPage.coreFeatures')}
                    </h2>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-card border border-border rounded-xl p-4 md:p-6 hover:shadow-lg hover:border-yellow-500/30 transition-all h-full min-h-[200px] flex flex-col justify-between">
                            <div className={`w-10 h-10 md:w-12 md:h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-3 md:mb-4`}>
                                <feature.icon className={`w-5 h-5 md:w-6 md:h-6 ${feature.color}`} />
                            </div>
                            <h3 className="text-body md:text-h5 font-semibold text-foreground mb-2">
                                {t(feature.titleKey)}
                            </h3>
                            <p className="text-caption md:text-body-sm text-muted-foreground leading-relaxed flex-grow">
                                {t(feature.descriptionKey)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
