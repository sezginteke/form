/**
 *
 */
interface IValidator<D> {
  (data: D): boolean;
}

export default IValidator;
