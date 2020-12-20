import { IErrorDetail } from "..";

/**
 *
 */
interface ICheckError {
  (): Promise<IErrorDetail>;
}

export default ICheckError;
