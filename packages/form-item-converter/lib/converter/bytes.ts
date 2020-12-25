import { IConverter } from "@acorn/form-model";

/**
 *
 * @param data
 */
const Converter: IConverter<number, string> = (data: number): string => {
  if (data === 0) return `0 Bytes`;

  const k = 1024;
  const dm = 2;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(data) / Math.log(k));

  return `${parseFloat((data / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
};

export default Converter;
