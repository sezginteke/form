import { IConverter } from "@acorn/form-model";

/**
 *
 * @param data
 */
const Converter: IConverter<Date, string> = (data: Date): string => {
  return new Date(data).toLocaleString("tr-TR");
};

export default Converter;
