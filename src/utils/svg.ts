import type { IconData, IconStyle } from '@constants/icons';

export async function copySvg(icon: IconData, size: number, iconStyle: IconStyle) {
  const svg = formatSVG(icon, size, iconStyle);

  try {
    await navigator.clipboard.writeText(svg);
  } catch (err) {
    console.error('Failed to copy!', err);
  }
}

export function downloadSvg(icon: IconData, size: number, iconStyle: IconStyle) {
  const svg = formatSVG(icon, size, iconStyle);
  const filetype = 'data:image/svg+xml;charset=utf-8,';

  const element = document.createElement('a');
  element.setAttribute('href', filetype + encodeURIComponent(svg));
  element.setAttribute('download', `lexicon-${icon.name}-${size}.svg`);
  element.style.display = 'none';

  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

function formatSVG(icon: IconData, size: number, iconStyle: IconStyle) {
  const showOutline = iconStyle === 'two_tone' || iconStyle === 'outline';

  const svg = `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">`;

  const solidPath =
    iconStyle === 'solid' && icon.path_solid
      ? `<path d="${icon.path_solid}" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />`
      : '';

  const tonedPath =
    iconStyle === 'two_tone' && icon.path_tint
      ? `<path d="${icon.path_tint}" fill="currentColor" opacity="0.4" fillRule="evenodd" clipRule="evenodd" />`
      : '';

  const outlinePath =
    showOutline && icon.path_outline
      ? `<path d="${icon.path_outline}" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />`
      : '';

  return svg + solidPath + tonedPath + outlinePath + '</svg>';
}
