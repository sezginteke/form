import {
  IErrorDetail,
  IValidator,
  ICheckError,
  IControlItem,
  IConverter,
} from "..";

/**
 *
 */
interface IFromItem {
  label: string;
  attribute: string;
  required: boolean;
  disabled: boolean;
  hidden: boolean;
  errorDetail: IErrorDetail;
  inputConverter: IConverter<any, any>;
  outputConverter: IConverter<any, any>;
  validator: IValidator<any>;
  checkError: ICheckError;
  control: IControlItem;
  getInstance: (props: any) => any;
}

export default IFromItem;
