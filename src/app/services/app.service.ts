import {Injectable, Injector} from '@angular/core';
//import { v4 as uuidv4 } from "uuid";
//import {generate as shortUUID} from "short-uuid";
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";
import {AppComponent} from "../app.component";
import {KeycloakService} from "keycloak-angular";
import {BaseFrameManager, FrameManager, FrameManagerFactory} from "../../base/frames/base-frame-manager";
import {BaseDialogManager, DialogManager, DialogManagerFactory} from "../../base/dialogs/base-dialog-manager";
import {BaseErrorManager, ErrorManager, ErrorManagerFactory} from "../../base/errors/error-manager";
import {BaseIdManager, IdManager, IdManagerFactory} from "../../base/ids/id-manager";
import {
  AlertDialogManagerComponent
} from "../../mods/alerts/dialogs/alert-dialog-manager/alert-dialog-manager.component";
import {RestBase} from "../../base/rest/rest";
import {ExampleRest} from "./example.rest";
import Butter from "buttercms";
import {ButterRest} from "./butter.rest";
import {environment} from "../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class AppService implements /*BaseAppService,*/ FrameManagerFactory,
  DialogManagerFactory, ErrorManagerFactory, IdManagerFactory {

  // ::: vars
  //
  rootApp!: AppComponent;
  butterInstance = Butter(environment.butter_api_key);
  //sessionManager: any;

  // ::: constructor
  //
  constructor(private injector: Injector,
              private dialog: MatDialog,
              private snackBar: MatSnackBar,
              private httpClient: HttpClient,
              private keycloak: KeycloakService) {
  }

  // ::: app
  //
  appInit(app: AppComponent) {
    this.rootApp = app;
  }

  app() {
    return this.rootApp;
  }

  // ::: UI SNACKS
  //
  snack(text?: string, action?: string, customConfig?: MatSnackBarConfig) {
    if (text) {
      let config = customConfig || {
        duration: 2000
      }
      this.snackBar.open(text, action, config);
    }
  }

  // ::: UI ALERT DIALOG
  //
  dialogAlert(data?: any, mode?: any, config?: any) {
    this.dialogManager().open(AlertDialogManagerComponent, data, mode, config);
  }

  // ::: ID MANAGER
  //
  idManager(): IdManager {
    return new BaseIdManager();
  }

  // ::: ERROR MANAGER
  //
  errorManager(): ErrorManager {
    return new BaseErrorManager(this.snackBar);
  }

  // ::: DIALOG MANAGER
  //
  dialogManager(): DialogManager {
    return new BaseDialogManager(this.dialog);
  }

  // ::: FRAME MANAGER
  //
  frameManager(): FrameManager {
    return new BaseFrameManager(this.injector);
  }

  // ::: REST
  //
  example() {
    let base = new RestBase(this.httpClient);
    base.server("http://localhost:8080");
    base.context({expectedResult: "example"});

    base.onError((err) => {
      try {
        this.errorManager().handle(err)
      } catch (throwable) {
        console.error(throwable);
      }
    });

    let example = new ExampleRest(base);
    return example;
  }

  butter() {
    return new ButterRest(this.butterInstance);
  }
}
