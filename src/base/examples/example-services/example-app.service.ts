import {Injectable, Injector} from '@angular/core';
import {BaseFrameManager, FrameManager, FrameManagerFactory} from "../../frames/base-frame-manager";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";
import {HttpClient} from "@angular/common/http";
import {KeycloakService} from "keycloak-angular";
import {BaseDialogManager, DialogManager, DialogManagerFactory} from "../../dialogs/base-dialog-manager";
import {BaseErrorManager, ErrorManager, ErrorManagerFactory} from "../../errors/error-manager";
import {BaseIdManager, IdManager, IdManagerFactory} from "../../ids/id-manager";

@Injectable({
  providedIn: 'root'
})
export class ExampleAppService implements FrameManagerFactory,
  DialogManagerFactory, ErrorManagerFactory, IdManagerFactory {

  // ::: vars
  //
  //app!: AppComponent;
  //

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
  /*
  appInit(app: AppComponent) {
    this.rootApp = app;
  }*/
/*
  app() {
    return this.rootApp;
  }*/

  //  ::: UI SNACKS
  //
  snack(text?: string, action?: string, customConfig?: MatSnackBarConfig) {
    if (text) {
      let config = customConfig || {
        duration: 2000
      }
      this.snackBar.open(text, action, config);
    }
  }

  // ::: ID MANAGER
  //
  idManager() : IdManager {
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

  // ::: CUSTOM API
  //
  exampleApi(comp?: any) {

  }

  // ::: REST
  //


}


