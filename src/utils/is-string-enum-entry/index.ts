export const isStringEnumEntry = (string: string, enumType: object ) =>
  Object.values(enumType).includes(string);
