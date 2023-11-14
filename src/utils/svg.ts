import type { IconData, IconStyle } from '@constants/icons';

export async function copySvg(
  icon: IconData,
  size: number,
  iconStyle: IconStyle,
  copyAsJSX: boolean
) {
  const svg = formatSVG(icon, size, iconStyle, copyAsJSX);

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
  copyAsJSX: boolean
) {
  const svg = formatSVG(icon, size, iconStyle, copyAsJSX);
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

function formatSVG(icon: IconData, size: number, iconStyle: IconStyle, copyAsJSX: boolean) {
  const showOutline = iconStyle === 'two_tone' || iconStyle === 'outline';
  const fillRule = copyAsJSX ? 'fillRule' : 'fill-rule';
  const clipRule = copyAsJSX ? 'clipRule' : 'clip-rule';

  const svg = `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">`;

  const solidPath =
    iconStyle === 'solid' && icon.path_solid
      ? `<path d="${icon.path_solid}" fill="currentColor" ${fillRule}="evenodd" ${clipRule}="evenodd" />`
      : '';

  const tonedPath =
    iconStyle === 'two_tone' && icon.path_tint
      ? `<path d="${icon.path_tint}" fill="currentColor" opacity="0.4" ${fillRule}="evenodd" ${clipRule}="evenodd" />`
      : '';

  const outlinePath =
    showOutline && icon.path_outline
      ? `<path d="${icon.path_outline}" fill="currentColor" ${fillRule}="evenodd" ${clipRule}="evenodd" />`
      : '';

  if (copyAsJSX) return formatJSX(icon.name, svg + solidPath + tonedPath + outlinePath + '</svg>');
  return svg + solidPath + tonedPath + outlinePath + '</svg>';
}

`<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.75 11.875C18.75 13.0475 18.461 14.1538 17.9506 15.1222L16.8255 13.9971C17.0985 13.347 17.25 12.63 17.25 11.875V11H18.75V11.875ZM15.75 12C15.75 12.2851 15.7182 12.5627 15.6579 12.8295L14.25 11.4216V5C14.25 3.75736 13.2426 2.75 12 2.75C10.7574 2.75 9.75 3.75736 9.75 5V6.92157L8.25 5.42157V5C8.25 2.92893 9.92893 1.25 12 1.25C14.0711 1.25 15.75 2.92893 15.75 5V12ZM12 15.75C12.2851 15.75 12.5627 15.7182 12.8295 15.6579L8.25 11.0784V12C8.25 14.0711 9.92893 15.75 12 15.75ZM15.1365 17.9649L14.0121 16.8405C13.3915 17.1045 12.7116 17.25 12 17.25C9.11501 17.25 6.75 14.8582 6.75 11.875V11H5.25V11.875C5.25 15.401 7.86376 18.3277 11.25 18.7081V21.25H8V22.75H16V21.25H12.75V18.7081C13.6046 18.6121 14.4099 18.354 15.1365 17.9649ZM1.46967 2.53033L21.4697 22.5303L22.5303 21.4697L2.53033 1.46967L1.46967 2.53033Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" /></svg>`;

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
