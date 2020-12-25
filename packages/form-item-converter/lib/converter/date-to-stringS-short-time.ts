import { IConverter } from "@acorn/form-model";

/**
 *
 * @param data
 */
const Converter: IConverter<Date, string> = (data: Date): string => {
  const date = new Date(data);

  let hour: any = date.getHours();
  let minute: any = date.getMinutes();

  if (hour < 10) {
    hour = "0" + hour;
  }

  if (minute < 10) {
    minute = "0" + minute;
  }

  return `${hour}:${minute}`;
};

export default Converter;
