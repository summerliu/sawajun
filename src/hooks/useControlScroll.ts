import { useEffect } from 'react';

// control target element scrolling capability
export default function useControlScroll(
  disableScroll: boolean,
  target?: HTMLElement
) {
  useEffect(() => {
    const _target = target
      ? [target]
      : [document?.body, document?.documentElement];

    if (!_target) {
      return;
    }

    const originalOverflows = _target.map(t => t.style.overflow);

    if (disableScroll) {
      _target.forEach(t => (t.style.overflow = 'hidden'));
    } else {
      _target.forEach(
        (t, index) => (t.style.overflow = originalOverflows[index])
      );
    }

    return () => {
      _target.forEach(
        (t, index) => (t.style.overflow = originalOverflows[index])
      );
    };
  }, [disableScroll, target]);

  return;
}
