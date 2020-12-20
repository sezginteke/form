import { FormModeType, IEntity } from "..";

/**
 *
 */
interface IFormAction<T extends IEntity> {
  label: (mode: FormModeType) => string;
  call: (entity?: T) => void;
  validateForm?: boolean;
}

export default IFormAction;
