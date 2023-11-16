export function setCookie(name: string, value: string) {
  const optionsWithDefaults = {
    days: 7,
    path: '/',
  };

  const expires = new Date(Date.now() + optionsWithDefaults.days * 864e5).toUTCString();

  document.cookie =
    name +
    '=' +
    encodeURIComponent(value) +
    '; expires=' +
    expires +
    stringifyOptions(optionsWithDefaults);
}

function stringifyOptions(options: { [key: string]: string | boolean | number }) {
  return Object.keys(options).reduce((acc, key) => {
    if (key === 'days') {
      return acc;
    } else {
      if (options[key] === false) {
        return acc;
      } else if (options[key] === true) {
        return `${acc}; ${key}`;
      } else {
        return `${acc}; ${key}=${options[key]}`;
      }
    }
  }, '');
}
