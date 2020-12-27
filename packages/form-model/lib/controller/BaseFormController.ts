import { IEntity } from "..";
import { IForm } from "../form";

abstract class BasFormController<E extends IEntity> {
  protected form: IForm<any, E>;
  protected entity: { new (): E };

  /**
   *
   * @param entity
   */
  constructor(entity: { new (): E }) {
    this.entity = entity;
  }

  /**
   *
   */
  public destroy() {
    this.form = null;
    this.entity = null;
  }
}

export default BasFormController;
