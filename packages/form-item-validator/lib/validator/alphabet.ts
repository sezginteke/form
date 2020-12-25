import { IValidator } from "@acorn/form-model";

/**
 *
 * @param data
 */
const Validator: IValidator<string> = (data: string): boolean => {
  var reg = /^[ A-Za-zĞÜŞİÖÇğüşıöç]+$/i;

  return reg.test(data);
};

export default Validator;
