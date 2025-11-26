'use client';

import { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        const cursor = cursorRef.current;

        const handleMouseMove = (e: MouseEvent) => {
            if (cursor) {
                cursor.style.left = `${e.clientX}px`;
                cursor.style.top = `${e.clientY}px`;
            }
        };

        const handleMouseEnter = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.matches('a, button, [role="button"], input, textarea, select')) {
                setIsPointer(true);
            }
        };

        const handleMouseLeave = () => {
            setIsPointer(false);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseover', handleMouseEnter);
        document.addEventListener('mouseout', handleMouseLeave);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseover', handleMouseEnter);
            document.removeEventListener('mouseout', handleMouseLeave);
        };
    }, []);

    return (
        <>
            <div ref={cursorRef}
                className={`fixed left-0 top-0 w-5 h-5 bg-[radial-gradient(circle,_var(--background)20%,_transparent_70%)] bg-opacity-50 rounded-full pointer-events-none z-[9999999] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ease-out ${isPointer ? 'scale-150 bg-opacity-70' : 'scale-100'} shadow-[0px_0px_10px_var(--foreground)]`} />
        </>
    );
};

export default CustomCursor;