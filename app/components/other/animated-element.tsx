'use client'
import React, { ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface WithAnimationProps {
    children: ReactNode;
    mode: string;
    delay?: number;
    isVisible?: boolean;
    className?: string
}

export const WithAnimation = ({ children, mode, delay = 0, isVisible = true, className }: WithAnimationProps) => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    const variants =
        mode === 'zoom' ?
            {
                hidden: {
                    opacity: 0,
                    y: 0,
                    scale: 0.5
                },
                visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1.0,
                    transition: {
                        delay: delay,
                    },
                },
                exit: {
                    opacity: 0,
                    y: 0,
                    scale: 0.5,

                },
            } :
            mode === 'fade' ?
                {
                    hidden: {
                        opacity: 0,
                    },
                    visible: {
                        opacity: 1,
                        transition: {
                            delay: delay,
                        },
                    },
                    exit: {
                        opacity: 0,
                    },
                } :
                {
                    hidden: {
                        opacity: 0,
                        y: 30,
                    },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            delay: delay,
                        },
                    },
                    exit: {
                        opacity: 0,
                        y: -30,
                    },
                }
        ;

    return (
        <AnimatePresence>
            {isVisible && <motion.div
                layout
                ref={ref as React.Ref<HTMLDivElement>}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                exit="exit"
                variants={variants}
                className={className}
                transition={{
                    duration: mode === 'zoom' ? 0.7 : 1,
                    ease: 'backInOut'
                }}
            >
                {children}
            </motion.div>}
        </AnimatePresence>
    );
};
