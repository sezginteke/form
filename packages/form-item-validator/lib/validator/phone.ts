import { IValidator } from "@acorn/form-model";

/**
 *
 * @param data
 */
const Validator: IValidator<string> = (data: string): boolean => {
  const regex = /^(\([0-9]{4}\)\s*|[0-9]{3}) [0-9]{3} [0-9]{2} [0-9]{2}$/;

  return regex.test(data);
};

export default Validator;
