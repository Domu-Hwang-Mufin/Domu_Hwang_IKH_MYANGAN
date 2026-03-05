import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  staggerChildren?: boolean;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  className = '',
  delay = 0,
  staggerChildren = false,
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });
  const duration = 1.8; // 1800ms - slow and gentle
  const easeOutCubicBezier = 'cubic-bezier(0.25, 0.1, 0.25, 1)'; // very smooth ease-out

  const animatedChildren = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      const childDelay = staggerChildren ? delay + index * 0.1 : delay;
      return React.cloneElement(child as React.ReactElement, {
        style: {
          ...child.props.style,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(80px)',
          transition: `opacity ${duration}s ${easeOutCubicBezier} ${childDelay}s,
                       transform ${duration}s ${easeOutCubicBezier} ${childDelay}s`,
        },
      });
    }
    return child;
  });

  return (
    <div ref={ref} className={className}>
      {staggerChildren ? animatedChildren : (
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(80px)',
            transition: `opacity ${duration}s ${easeOutCubicBezier} ${delay}s,
                         transform ${duration}s ${easeOutCubicBezier} ${delay}s`,
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default FadeInSection;
