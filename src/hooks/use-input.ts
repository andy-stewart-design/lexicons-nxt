import { useState, useCallback, useMemo } from 'react';
import type { ChangeEvent } from 'react';

// ------------------------------------------------------
// Input: Slider ----------------------------------------
// ------------------------------------------------------

export type SliderChangeEvent = (event: ChangeEvent<HTMLInputElement>) => void;

export interface DelegatedSlideProps {
  min: number;
  max: number;
  step: number;
}

export type UseSliderReturn = [number, SliderChangeEvent, DelegatedSlideProps];

type SliderSetupHook = (
  initialValue: number,
  min: number,
  max: number,
  step: number
) => UseSliderReturn;

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

export type UseToggleReturn = [boolean, (e: ChangeEvent<HTMLInputElement>) => void];

export type ToggleSetupHook = (initialValue?: boolean) => UseToggleReturn;

export const useToggle: ToggleSetupHook = (initialValue = true) => {
  const [value, setValue] = useState(initialValue);

  const toggleValue = useCallback(function () {
    setValue((currentValue) => !currentValue);
  }, []);

  return [value, toggleValue];
};

// ------------------------------------------------------
// Input: Text ------------------------------------------
// ------------------------------------------------------

export type UseTextInputReturn = [string, (arg: ChangeEvent<HTMLInputElement> | string) => void];

export type TextInputSetupHook = (initialValue?: string) => UseTextInputReturn;

export const useTextInput: TextInputSetupHook = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);

  const updateValue = useCallback(function (arg: ChangeEvent<HTMLInputElement> | string) {
    if (typeof arg === 'string') setValue(arg);
    else setValue(arg.target.value);
  }, []);

  return [value, updateValue];
};

// ------------------------------------------------------
// Input: Toggle ----------------------------------------
// ------------------------------------------------------

export type UseSelectReturn = [string, (value: string) => void];

export type SelectSetupHook = (initialValue?: string) => UseSelectReturn;

export const useSelect: SelectSetupHook = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);

  const updateValue = useCallback(function (value: string) {
    setValue(value);
  }, []);

  return [value, updateValue];
};
