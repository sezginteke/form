import { IForm } from "..";

/**
 *
 */
interface IControlItem {
  (): Promise<IForm<any, any>>;
}

export default IControlItem;
