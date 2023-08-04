import { MutableRefObject, useEffect, useRef } from "react";

export interface useInfiniteScrollProps {
    callback?: () => void;
    triggerRef: MutableRefObject<HTMLElement>;
    wrapperRef: MutableRefObject<HTMLElement>;
}

export function useInfiniteScroll({
    callback,
    triggerRef,
    wrapperRef,
}: useInfiniteScrollProps) {
    useEffect(() => {
        let observer: IntersectionObserver | null = null;
        const triggerElement = triggerRef.current;
        const wrapperElement = wrapperRef.current;
        if (callback) {
            const options = {
                root: wrapperElement,
                rootMargin: "1px",
                threshold: 1,
            };

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);

            observer.observe(triggerElement);
        }

        return () => {
            if (observer) {
                observer.disconnect();
            }
        };
    }, [triggerRef, wrapperRef, callback]);
}
