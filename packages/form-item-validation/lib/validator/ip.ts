import { IValidator } from "..";

/**
 *
 * @param data
 */
const Validator: IValidator<string> = (data: string): boolean => {
  var reg = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;

  return reg.test(data);
};

export default Validator;
