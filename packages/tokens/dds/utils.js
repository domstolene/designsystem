export const lastChars = (token, length) => {
  if (token.value !== undefined) return token.value.toString().slice(-length);
};

export const hasRem = token => {
  return lastChars(token, 3) === 'rem';
};

export const hasPxOrEm = token => {
  return lastChars(token, 2) === 'px' || lastChars(token, 2) === 'em';
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const numberTokenOutput = (token, unitLength) =>
  `export const ${token.name} = "${token.value}";\nexport const ${token.name}Number${capitalizeFirstLetter(lastChars(token, unitLength))} = ${token.value.slice(0, -unitLength)};`;

export const filterOutBase = token =>
  !token.attributes.category.includes('base');
