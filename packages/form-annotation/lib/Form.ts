import { IForm } from "@acorn/form-model";

/**
 *
 */
export const ANNOTATION_FORM = Symbol("class:form");

/**
 *
 * @param form
 */
export const Form = (data: IForm<any, any>): ClassDecorator => {
  return (target) => {
    Reflect.defineMetadata(ANNOTATION_FORM, data, target.prototype);

    return target;
  };
};
