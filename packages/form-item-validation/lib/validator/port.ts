import { IValidator } from "..";

/**
 *
 * @param data
 */
const Validator: IValidator<string> = (data: string): boolean => {
  var reg = /^([0-9]{1,4}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/;

  return reg.test(data);
};

export default Validator;
