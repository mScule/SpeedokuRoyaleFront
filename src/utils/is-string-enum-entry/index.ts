/**
 * Used for determining if given string is part of given typescript enum that
 * contains string values.
 *
 * @author Vilhelm
 */
export const isStringEnumEntry = (string: string, enumType: object ) =>
  Object.values(enumType).includes(string);
