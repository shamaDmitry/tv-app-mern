export const getInitials = name => {
  return name
    .replace(/[^A-Za-z0-9À-ÿ ]/gi, '')
    .replace(/ +/gi, ' ')
    .split(/ /)
    .reduce((acc, item) => acc + item[0], '')
    .concat(name.substr(1))
    .concat(name)
    .substr(0, 2)
    .toUpperCase();
};
