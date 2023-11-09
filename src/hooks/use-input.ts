import { useState, useCallback, useMemo } from 'react';
import type { ChangeEvent } from 'react';

// ------------------------------------------------------
// Input: Slider ----------------------------------------
// ------------------------------------------------------

type SliderChangeEvent = (event: ChangeEvent<HTMLInputElement>) => void;

interface DelegatedSlideProps {
  //   onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  min: number;
  max: number;
  step: number;
}

export type SliderSetupHookReturn = [number, SliderChangeEvent, DelegatedSlideProps];

type SliderSetupHook = (
  initialValue: number,
  min: number,
  max: number,
  step: number
) => SliderSetupHookReturn;

export const useSlider: SliderSetupHook = (
  initialValue = 5,
  min = 0,
  max = initialValue * 2,
  step = 0.1
) => {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback(
    function (event: ChangeEvent<HTMLInputElement>) {
      const { target } = event;

      if (!target) return;
      const newValueNumber = Number((target as HTMLInputElement).value);

      if (newValueNumber >= max) setValue(max);
      else if (newValueNumber <= min) setValue(min);
      else setValue(newValueNumber);
    },
    [min, max]
  );

  const delegatedProps = useMemo(() => {
    return { min, max, step };
  }, [min, max, step]);

  return [value, onChange, delegatedProps];
};

// ------------------------------------------------------
// Input: Toggle ----------------------------------------
// ------------------------------------------------------

type UseToggleReturn = [boolean, () => void];

type ToggleSetupHook = (initialValue?: boolean) => UseToggleReturn;

export const useToggle: ToggleSetupHook = (initialValue = true) => {
  const [value, setValue] = useState(initialValue);

  const toggleValue = useCallback(function () {
    setValue((currentValue) => !currentValue);
  }, []);

  return [value, toggleValue];
};
