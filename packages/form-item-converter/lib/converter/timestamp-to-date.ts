import { IConverter } from "..";

/**
 *
 * @param data
 */
const Converter: IConverter<number, Date> = (data: number): Date => {
  return new Date(data);
};

export default Converter;
