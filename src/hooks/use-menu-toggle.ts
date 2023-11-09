import { useEffect, useState, useCallback, useRef } from 'react';
import debounce from 'just-debounce-it';

type UseMenuToggleReturn = [boolean | null, () => void, boolean | null];

type MenuToggleSetupHook = (breakpoint: number) => UseMenuToggleReturn;

export const useMenuToggle: MenuToggleSetupHook = () => {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);
  const [isWidescreen, setIsWidescreen] = useState<boolean | null>(null);
  const windowWidth = useRef(0);

  const toggleIsOpen = useCallback(
    function () {
      if (isOpen === null) return;
      setIsOpen(!isOpen);
    },
    [isOpen]
  );

  useEffect(() => {
    const breakpoint = Number(
      getComputedStyle(document.documentElement).getPropertyValue('--screen-md')
    );

    const __isWidescreen = window.innerWidth >= breakpoint;
    setIsOpen(__isWidescreen);
    setIsWidescreen(true);
    windowWidth.current = window.innerWidth;

    const handleResize = debounce(() => {
      const currentWidth = window.innerWidth;
      const previousWidth = windowWidth.current;
      const __wasWidescreen = previousWidth >= breakpoint;
      const __isWidescreen = currentWidth >= breakpoint;

      if (__isWidescreen === __wasWidescreen) return;
      else {
        if (currentWidth >= breakpoint) setIsOpen(true);
        else setIsOpen(false);
        setIsWidescreen(__isWidescreen);
      }

      windowWidth.current = currentWidth;
    }, 100);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return [isOpen, toggleIsOpen, isWidescreen];
};
