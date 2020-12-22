import { IValidator } from "..";

/**
 *
 * @param data
 */
const Validator: IValidator<string> = (data: string): boolean => {
  var reg = /^[ A-Za-zĞÜŞİÖÇğüşıöç]+$/i;

  return reg.test(data);
};

export default Validator;
