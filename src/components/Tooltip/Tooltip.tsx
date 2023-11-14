import { useRef } from 'react';
import { Information } from '@/icons/20';
import classes from './component.module.css';

type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

interface TooltipProps {
  text: string;
  position?: TooltipPosition;
  width?: number;
}

export default function Tooltip({ text, position = 'top', width = 25 }: TooltipProps) {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  return (
    <button ref={triggerRef} className={classes['tooltip-group']}>
      <Information />
      <div
        ref={tooltipRef}
        role="tooltip"
        data-position={position}
        style={{ inlineSize: `${width}ch` }}
      >
        {text}
      </div>
    </button>
  );
}
