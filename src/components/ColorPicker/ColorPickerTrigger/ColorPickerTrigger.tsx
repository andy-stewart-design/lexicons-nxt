"use client";

import { Trigger } from "@radix-ui/react-popover";
import classes from "./styles.module.css";

export function ColorPickerTrigger() {
  return (
    <Trigger asChild>
      <button
        className={classes["trigger"]}
        aria-label="Update dimensions"
      ></button>
    </Trigger>
  );
}
