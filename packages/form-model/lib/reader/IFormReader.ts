import { IEntity, IFromItem, IForm } from "..";

interface IFormReader<T extends IFromItem, E extends IEntity> {
  read(entity: { new (): E }): Promise<IForm<T, E>>;
}

export default IFormReader;
