import { IConverter } from "..";

/**
 *
 * @param data
 */
const Converter: IConverter<Date, number> = (data: Date): number => {
  return new Date(data).getTime();
};

export default Converter;
