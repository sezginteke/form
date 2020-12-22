import { IValidator } from "..";

/**
 *
 * @param data
 */
const Validator: IValidator<string> = (data: string): boolean => {
  const regex = /^(([^ğüşıöçĞÜŞİÖÇ<>()\[\]\\.,;:\s@"]+(\.[^ğüşıöçĞÜŞİÖÇ<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regex.test(data);
};

export default Validator;
