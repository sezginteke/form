import { IConverterAsync } from "..";

/**
 *
 * @param data
 */
const Converter: IConverterAsync<any, string | ArrayBuffer> = (
  file: any
): Promise<string | ArrayBuffer> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error: any) => reject(error);
  });
};

export default Converter;
