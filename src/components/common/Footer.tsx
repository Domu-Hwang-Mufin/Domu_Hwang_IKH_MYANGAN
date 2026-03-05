import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-foreground py-12 md:py-16 border-t border-white/10">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1">
                        <h3 className="text-xl font-bold mb-6 text-yellow-500">IKH MYANGAN</h3>
                        <p className="text-body-sm text-muted-foreground mb-8 leading-relaxed max-w-[240px]">
                            {t('footer.description')}
                        </p>
                        <div className="flex gap-4">
                        </div>
                    </div>

                    {/* About Us */}
                    <div>
                        <h3 className="text-body font-bold mb-6 text-foreground">{t('footer.aboutUs')}</h3>
                        <ul className="space-y-1.5 md:space-y-4">
                            <li>
                                <Link to="/coming-soon" className="text-body-sm text-muted-foreground hover:text-foreground transition-colors">
                                    {t('footer.aboutIkhMyangan')}
                                </Link>
                            </li>
                            <li>
                                <Link to="/coming-soon" className="text-body-sm text-muted-foreground hover:text-foreground transition-colors">
                                    {t('footer.legalPrivacy')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="text-body font-bold mb-6 text-foreground">{t('footer.products')}</h3>
                        <ul className="space-y-1.5 md:space-y-4">
                            <li>
                                <Link to="/coming-soon" className="text-body-sm text-muted-foreground hover:text-foreground transition-colors">
                                    {t('footer.spotTrading')}
                                </Link>
                            </li>
                            <li>
                                <Link to="/coming-soon" className="text-body-sm text-muted-foreground hover:text-foreground transition-colors">
                                    {t('footer.quickSwap')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Features */}
                    <div>
                        <h3 className="text-body font-bold mb-6 text-foreground">{t('footer.features')}</h3>
                        <ul className="space-y-1.5 md:space-y-4">
                            <li>
                                <Link to="/coming-soon" className="text-body-sm text-muted-foreground hover:text-foreground transition-colors">
                                    {t('footer.featuresOverview')}
                                </Link>
                            </li>
                            <li>
                                <Link to="/coming-soon" className="text-body-sm text-muted-foreground hover:text-foreground transition-colors">
                                    {t('footer.security')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-body font-bold mb-6 text-foreground">{t('footer.support')}</h3>
                        <ul className="space-y-1.5 md:space-y-4">
                            <li>
                                <p className="text-body-sm text-muted-foreground font-medium">
                                    {t('footer.email')}: <br />support@ikh-myangan.com
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-caption text-muted-foreground">
                        &copy; {currentYear} IKH MYANGAN. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link to="/coming-soon" className="text-caption text-muted-foreground hover:text-foreground transition-colors">{t('footer.termsOfService')}</Link>
                        <Link to="/coming-soon" className="text-caption text-muted-foreground hover:text-foreground transition-colors">{t('footer.privacyPolicy')}</Link>
                        <Link to="/coming-soon" className="text-caption text-muted-foreground hover:text-foreground transition-colors">{t('footer.cookiePolicy')}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
