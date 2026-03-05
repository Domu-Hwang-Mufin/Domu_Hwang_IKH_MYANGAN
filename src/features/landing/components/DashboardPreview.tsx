import React from 'react';
import FadeInSection from '@/components/animations/FadeInSection';

const DashboardPreview: React.FC = () => {
    return (
        <section className="py-12 md:py-20 bg-background overflow-hidden">
            <div className="container mx-auto px-4">
                <FadeInSection>
                    <div className="max-w-6xl mx-auto">
                        <div className="relative group">
                            {/* Browser Frame effect */}
                            <div className="bg-zinc-900 rounded-xl border border-border overflow-hidden shadow-2xl transition-all duration-500 group-hover:border-yellow-500/30">
                                {/* Browser Header */}
                                <div className="flex items-center gap-2 px-4 py-3 bg-zinc-800/50 border-b border-border">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                                    </div>
                                    <div className="flex-1 mx-4">
                                        <div className="bg-zinc-900/50 rounded px-3 py-1 text-[10px] text-muted-foreground font-mono">
                                            ikhmyangan.mn/trade
                                        </div>
                                    </div>
                                </div>

                                {/* Image Content */}
                                <div className="aspect-[16/9] md:aspect-[21/9] bg-zinc-950 overflow-hidden relative">
                                    <img
                                        src={`${import.meta.env.BASE_URL}images/dashboard-preview.jpg`}
                                        alt="Trade Dashboard Preview"
                                        className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                                    />

                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none"></div>
                                </div>
                            </div>

                            {/* Decorative Glow */}
                            <div className="absolute -inset-4 bg-yellow-500/5 blur-3xl -z-10 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                    </div>
                </FadeInSection>
            </div>
        </section>
    );
};

export default DashboardPreview;
