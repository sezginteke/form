import { IConverter } from "..";

/**
 *
 * @param data
 */
const Converter: IConverter<string, boolean> = (data: string): boolean => {
  let value: boolean = null;
  switch (data) {
    case "true":
    case "1":
    case "on":
    case "yes":
      value = true;
      break;
    default:
      value = false;
      break;
  }

  return value;
};

export default Converter;
