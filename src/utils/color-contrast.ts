export function getContrast(hexcolor: string) {
  // If a leading # is provided, remove it
  if (hexcolor.slice(0, 1) === '#') {
    hexcolor = hexcolor.slice(1);
  }

  // Convert to RGB value
  var r = parseInt(hexcolor.substring(0, 2), 16);
  var g = parseInt(hexcolor.substring(2, 4), 16);
  var b = parseInt(hexcolor.substring(4, 6), 16);

  // Get YIQ ratio
  var yiq = (r * 299 + g * 587 + b * 114) / 1000;

  // Check contrast
  return yiq >= 120 ? 'var(--black)' : 'var(--white)';
}
