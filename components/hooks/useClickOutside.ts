import { useRef, useEffect } from 'react';

type UseClickOutside = {
  closeList: () => void;
  animateArrow: () => void;
};

export const useClickOutside = ({
  closeList,
  animateArrow,
}: UseClickOutside) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onClick = ({ target }: MouseEvent): void => {
      if (ref.current && !ref.current.contains(target as Node)) {
        closeList();
        animateArrow();
      }
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [ref, closeList, animateArrow]);

  return ref;
};
