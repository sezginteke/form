/**
 *
 */
interface IValidator<D> {
  (data: D): Promise<boolean>;
}

export default IValidator;
