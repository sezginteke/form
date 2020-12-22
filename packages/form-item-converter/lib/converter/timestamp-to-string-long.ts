import { IConverter } from "..";

/**
 *
 * @param data
 */
const Converter: IConverter<Date, string> = (data: Date): string => {
  return new Date(data).toLocaleString("tr-TR");
};

export default Converter;
