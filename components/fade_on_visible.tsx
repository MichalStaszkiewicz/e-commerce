import React, { useRef, useState, useEffect, ReactNode } from "react";

export default function FadeOnVisible({ children }: { children: ReactNode }) {
    const [isVisible, setIsVisible] = useState(false);

    const childRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setIsVisible(true);
            }
        }, {
            threshold: 0.6,
        });

        observer.observe(childRef.current!);

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={childRef} style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 500ms ease-in-out",
        }}>
            {(children)}
        </div>
    );
};