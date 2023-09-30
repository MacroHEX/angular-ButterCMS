import * as uuid from 'uuid';

// ::: Id Manager Factory
//
export interface IdManagerFactory {
  idManager() : IdManager;
}

// ::: Id Manager
//
export interface IdManager {

  uuid(): string;

  normalize(name: string | undefined) : string | undefined;
}

// ::: Base Id Manager
//
export class BaseIdManager implements IdManager {

  // ::: vars
  //

  // ::: constructor
  //

  // ::: api
  //
  uuid(): string {
    return uuid.v4();
  }

  /*
  shortUUID() {
    //let s = shortUUID();
    //console.log("ShortUUID: " + s);
    return "XXX";
  }*/

  normalize(name: string | undefined) : string | undefined {
    if (name) {
      name = name.trim().toLowerCase();
      name = name.replace(/[^a-zA-Z-0-9]/g, "_");
    }

    return name ? name : undefined;
  }
}
