import { IFormReader, IForm, IEntity, IFromItem } from "@acorn/form-model";

class FormReader<T extends IFromItem, E extends IEntity>
  implements IFormReader<T, E> {
  public read(entity: E): Promise<IForm<T, E>> {
    return new Promise((resolve, reject) => {});
  }
}

export default FormReader;
