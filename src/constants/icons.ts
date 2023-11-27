export type IconStyle = 'monoline' | 'solid' | 'two_tone';

export interface IconStyles {
  value: IconStyle;
  label: string;
}

export const iconStyles: Array<IconStyles> = [
  {
    value: 'monoline',
    label: 'Monoline',
  },
  {
    value: 'solid',
    label: 'Solid',
  },
  {
    value: 'two_tone',
    label: 'Two-tone',
  },
];

export interface TagData {
  id: string;
  name: string;
}

export interface IconData {
  id: string;
  name: string;
  display_name: string;
  path_monoline: string;
  path_two_tone: string | null;
  path_solid: string;
  tags: TagData[];
}
