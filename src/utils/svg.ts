import type { IconData, IconStyle } from '@constants/icons';

export async function copySvg(
  icon: IconData,
  size: number,
  iconStyle: IconStyle,
  copyAsJSX: boolean,
  fillCurrent: boolean
) {
  const svg = formatSVG(icon, size, iconStyle, copyAsJSX, fillCurrent);

  try {
    await navigator.clipboard.writeText(svg);
  } catch (err) {
    console.error('Failed to copy!', err);
  }
}

export function downloadSvg(
  icon: IconData,
  size: number,
  iconStyle: IconStyle,
  copyAsJSX: boolean,
  fillCurrent: boolean
) {
  const svg = formatSVG(icon, size, iconStyle, copyAsJSX, fillCurrent);
  const extenstion = copyAsJSX ? 'jsx' : 'svg';
  const filetype = copyAsJSX ? 'data:text/javascript,' : 'data:image/svg+xml;charset=utf-8,';

  const svgName = `lexicon-${icon.name
    .split(' ')
    .join('-')
    .toLocaleLowerCase()}-${size}.${extenstion}`;
  const jsxName = `${icon.name.split(' ').join('')}.${extenstion}`;
  const filename = copyAsJSX ? jsxName : svgName;

  const element = document.createElement('a');
  element.setAttribute('href', filetype + encodeURIComponent(svg));
  element.setAttribute('download', filename);
  element.style.display = 'none';

  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

function formatSVG(
  icon: IconData,
  size: number,
  iconStyle: IconStyle,
  copyAsJSX: boolean,
  fillCurrent: boolean
) {
  const showOutline = iconStyle === 'two_tone' || iconStyle === 'monoline';
  const fillRule = copyAsJSX ? 'fillRule' : 'fill-rule';
  const clipRule = copyAsJSX ? 'clipRule' : 'clip-rule';
  const fillColor = fillCurrent ? 'currentColor' : getAccentColor();

  const svg = `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">`;

  const solidPath =
    iconStyle === 'solid' && icon.path_solid
      ? `<path d="${icon.path_solid}" fill="${fillColor}" ${fillRule}="evenodd" ${clipRule}="evenodd" />`
      : '';

  const tonedPath =
    iconStyle === 'two_tone' && icon.path_two_tone
      ? `<path d="${icon.path_two_tone}" fill="${fillColor}" opacity="0.4" ${fillRule}="evenodd" ${clipRule}="evenodd" />`
      : '';

  const outlinePath =
    showOutline && icon.path_monoline
      ? `<path d="${icon.path_monoline}" fill="${fillColor}" ${fillRule}="evenodd" ${clipRule}="evenodd" />`
      : '';

  if (copyAsJSX) return formatJSX(icon.name, svg + solidPath + tonedPath + outlinePath + '</svg>');
  return svg + solidPath + tonedPath + outlinePath + '</svg>';
}

function formatJSX(name: string, svg: string) {
  const functionName = name.split(' ').join('');

  return `
  export function ${functionName}() {
    return (
      ${svg}
    )
  }
  `;
}

function getAccentColor() {
  const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent-color');
  return accentColor ?? 'currentColor';
}
