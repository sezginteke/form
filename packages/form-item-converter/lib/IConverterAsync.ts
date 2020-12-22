/**
 *
 */
interface IConverter<T, R> {
  (data: T): Promise<R>;
}

export default IConverter;
