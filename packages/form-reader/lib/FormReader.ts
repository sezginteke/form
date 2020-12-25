import {
  IFormReader,
  IForm,
  IEntity,
  IFromItem,
  FormModeType,
} from "@acorn/form-model";

class FormReader<T extends IFromItem, E extends IEntity>
  implements IFormReader<T, E> {
  public read(entity: E): Promise<IForm<T, E>> {
    return new Promise((resolve, reject) => {
      if (entity) {
        resolve({
          title: (formMode: FormModeType) => {
            return formMode.toString();
          },
        });
      }

      reject(entity);
    });
  }
}

export default FormReader;
