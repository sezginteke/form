/**
 *
 */
interface IConverter<T, R> {
  (data: T): R;
}

export default IConverter;
