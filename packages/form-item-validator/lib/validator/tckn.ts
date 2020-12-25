import { IValidator } from "@acorn/form-model";

/**
 *
 * @param data
 */
const Validator: IValidator<string> = (data: string): boolean => {
  let returnData = false;

  if (data != null) {
    const isEleven = /^[0-9]{11}$/.test(data);
    let totalX = 0;
    for (let i = 0; i < 10; i++) {
      totalX += Number(data.substr(i, 1));
    }

    const isRuleX = totalX % 10 == Number(data.substr(10, 1));
    let totalY1 = 0;
    let totalY2 = 0;
    for (let i = 0; i < 10; i += 2) {
      totalY1 += Number(data.substr(i, 1));
    }

    for (let i = 1; i < 10; i += 2) {
      totalY2 += Number(data.substr(i, 1));
    }

    const isRuleY = (totalY1 * 7 - totalY2) % 10 == Number(data.substr(9, 0));
    returnData = isEleven && isRuleX && isRuleY;
  } else {
    returnData = false;
  }

  return returnData;
};

export default Validator;
