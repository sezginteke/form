import { IConverter } from "@acorn/form-model";

/**
 *
 * @param data
 */
const Converter: IConverter<Date, number> = (data: Date): number => {
  return new Date(data).getTime();
};

export default Converter;
