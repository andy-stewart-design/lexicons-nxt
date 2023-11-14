export const iconStyles = [
  {
    value: 'outline',
    label: 'Outline',
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

export type IconStyle = 'outline' | 'solid' | 'two_tone';

export interface IconData {
  id: number;
  name: string;
  path_outline: string;
  path_tint: string;
  path_solid: string;
}
