import { FormModeType, IFormAction, IFromItem, IEntity } from "..";

/**
 *
 */
interface IForm<T extends IFromItem, E extends IEntity> {
  title: (formMode: FormModeType) => string;
  formAction?: Array<IFormAction<E>>;
  formItems?: Array<T>;
}

export default IForm;
