import {BaseException} from "../validation/base-exception";

export class ExampleModuleExceptions {

  static get VAL_NOT_FOUND() {
    return BaseException.newInstance(10, "val_not_found", "No lo encontré!");
  }

}
