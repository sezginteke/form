import { IFormAction } from "@acorn/form-model";
/**
 *
 */
export const ANNOTATION_FORM_ACTION = Symbol("class:form-action");

/**
 *
 * @param form
 */
export const FormAction = (data: Array<IFormAction<any>>): ClassDecorator => {
  return (target) => {
    Reflect.defineMetadata(ANNOTATION_FORM_ACTION, data, target.prototype);

    return target;
  };
};
