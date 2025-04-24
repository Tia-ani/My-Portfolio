
import { useEffect, useState, useCallback } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const updatePosition = useCallback((e: MouseEvent) => {
    // Use immediate updates for smoother cursor movement
    setPosition({ x: e.clientX, y: e.clientY });
  }, []);

  const updateCursorStyle = useCallback(() => {
    const hoveredElement = document.elementFromPoint(position.x, position.y);
    const computedStyle = hoveredElement ? window.getComputedStyle(hoveredElement).cursor : '';
    setIsPointer(computedStyle === 'pointer');
  }, [position.x, position.y]);

  useEffect(() => {
    document.addEventListener('mousemove', updatePosition, { passive: true });
    document.addEventListener('mousemove', updateCursorStyle, { passive: true });
    
    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);
    
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousemove', updateCursorStyle);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [updatePosition, updateCursorStyle]);

  useEffect(() => {
    document.body.style.cursor = isHidden ? 'auto' : 'none';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, [isHidden]);

  if (isHidden) return null;

  return (
    <>
      <div
        className="fixed top-0 left-0 w-6 h-6 rounded-full bg-white mix-blend-difference pointer-events-none z-50 transform-gpu"
        style={{
          transform: `translate(${position.x - 12}px, ${position.y - 12}px)`,
          scale: isPointer ? '1.5' : '1',
          transition: 'transform 0.05s ease, scale 0.15s ease',
        }}
      />
      <div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-white mix-blend-difference pointer-events-none z-50 transform-gpu"
        style={{
          transform: `translate(${position.x - 6}px, ${position.y - 6}px)`,
          opacity: isPointer ? 0 : 1,
          transition: 'transform 0.01s ease, opacity 0.15s ease',
        }}
      />
    </>
  );
};

export default CustomCursor;
