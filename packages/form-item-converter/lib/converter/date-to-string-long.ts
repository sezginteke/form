import { IConverter } from "..";

/**
 *
 * @param data
 */
const Converter: IConverter<Date, string> = (data: Date): string => {
  const date = new Date(data);

  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
};

export default Converter;
