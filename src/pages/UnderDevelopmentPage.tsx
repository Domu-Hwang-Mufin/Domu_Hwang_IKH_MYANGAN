import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import DawnHorizon from '@/components/three/DawnHorizon';

const UnderDevelopmentPage: React.FC = () => {
    return (
        <div
            className="relative min-h-[600px] md:min-h-[850px]"
            style={{
                width: '100vw',
                marginLeft: 'calc(-50vw + 50%)'
            }}
        >
            {/* Background - DawnHorizon */}
            <div className="absolute inset-0" style={{ zIndex: 0 }}>
                <DawnHorizon />
            </div>

            {/* Top gradient for smooth transition - starts below header */}
            <div
                className="absolute left-0 right-0 h-32"
                style={{
                    zIndex: 1,
                    top: '0px',
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, transparent 100%)'
                }}
            />

            {/* Dim Layer with blur */}
            <div
                className="absolute inset-0"
                style={{
                    zIndex: 1,
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    backdropFilter: 'blur(2px)'
                }}
            />

            {/* Content */}
            <div
                className="relative min-h-[600px] md:min-h-[850px] flex items-center justify-center p-4"
                style={{ zIndex: 2, marginTop: '-80px' }}
            >
                <div className="w-full max-w-md text-center px-4">
                    <h1 className="text-h2 md:text-h1 font-bold text-white mb-3 md:mb-4">Under Development</h1>
                    <p className="text-body-sm md:text-body text-gray-300 mb-8">
                        This feature is currently under development.
                        <br />
                        Please check back later.
                    </p>
                    <Link to="/">
                        <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-5">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Home
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default UnderDevelopmentPage;
