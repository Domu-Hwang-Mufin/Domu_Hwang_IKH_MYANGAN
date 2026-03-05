import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

const CTASection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="py-20 bg-muted/50 text-center border-t border-border">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-4 text-foreground">{t('cta.title')}</h2>
                <p className="text-lg text-muted-foreground mb-8">
                    {t('cta.subtitle')}
                </p>
                <Link to="/register">
                    <Button variant="yellow" size="lg" className="text-xl px-12 h-14 font-bold">
                        {t('cta.signUpNow')}
                    </Button>
                </Link>
            </div>
        </section>
    );
};

export default CTASection;
