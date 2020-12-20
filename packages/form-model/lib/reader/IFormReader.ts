import { IEntity, IFromItem, IForm } from "..";

interface IFormReader<T extends IFromItem, E extends IEntity> {
  read(entity: E): Promise<IForm<T, E>>;
}

export default IFormReader;
