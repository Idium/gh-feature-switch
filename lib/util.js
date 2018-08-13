// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some#Converting_any_value_to_Boolean

const TRUTHY_VALUES = [true, 'true', 1, '1'];

export function getBool(value) {
  if (typeof value === 'string') {
    value = value.toLowerCase().trim();
  }

  return TRUTHY_VALUES.some(function(t) {
    return t === value;
  });
}
