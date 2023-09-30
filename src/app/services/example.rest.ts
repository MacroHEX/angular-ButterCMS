import * as uuid from 'uuid';
import {RestBase, RestCaller, RestProtocol} from "../../base/rest/rest";
import {BaseException} from "../../base/validation/base-exception";
import {HttpErrorResponse} from "@angular/common/http";

// ::: Example PROTOCOL
//
class ExampleProtocol implements RestProtocol {

  requestMessage(caller: RestCaller, o: any): any {
    return o;

    // return {
    //   id: uuid.v4(),
    //   message: o ? o : {}
    // };
  }

  responseMessage(caller: RestCaller, o: any): any {
    // return o;
    let expected = caller.getBuilder().getContext()?.expectedResult;
    switch (expected) {
      case "Example":
        return o?.message;
      default:
        return o;
    }
  }

  errorMessage(caller: RestCaller, err: any): any {
    if (err) {
      if (err instanceof BaseException) {
        return err;
      } else if (err instanceof HttpErrorResponse) {
        // XXX todo
      } else if (err.failure) {
        let ex = new BaseException();
        ex.code = err.failure.code;
        ex.name = err.failure.name;
        ex.message = err.failure.description;
        return ex;
        /*} else {
          let ex = new BaseException();
          ex.message = err;
          return ex;*/
      }
    }
  }

  isSuccess(caller: RestCaller, o: any): boolean {
    let expected = caller.getBuilder().getContext()?.expectedResult;
    switch (expected) {
      case "Example":
        return o?.status === 0;
      default:
        return o;
    }
  }
}

// :::: Example REST
//
export class ExampleRest {

  // ::: vars
  //
  _base: RestBase;

  // ::: constructors
  //
  constructor(base: RestBase) {
    this._base = base;
    this._base.getContext().expectedResult = "example";
    //authRequired() ??
    this._base.protocol = new ExampleProtocol();
  }

  // ::: modules
  //
  example() {
    let newBase = this._base.rebase("/web");
    return new Example(newBase);
  }
}

// :::
//
export class Example {

  // ::: vars
  //
  _base: RestBase;

  // ::: constructor
  //
  constructor(base: RestBase) {
    this._base = base;
  }

  // ::: methods
  //
  register() {
    let caller = this._base.builder()
      .caller().methodPost();
    return caller;
  }

  update(id: string) {
    let caller = this._base.builder().slash().resource(id)
      .caller().methodPut();
    return caller;
  }

  disable(id: string) {
    let caller = this._base.builder().next(id).slash().resource("/disable")
      .caller().methodPut();
    return caller;
  }

  enable(id: string) {
    let caller = this._base.builder().next(id).slash().resource("/enable")
      .caller().methodPut();
    return caller;
  }

  list() {
    let caller = this._base.builder().resource("/list")
      .caller().methodPost();
    return caller;
  }

}

