import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {BaseModule} from "../../base/base.module";
import {MaterialKitModule} from "../../extras/material/material.module";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AlertDialogManagerComponent } from './dialogs/alert-dialog-manager/alert-dialog-manager.component';


@NgModule({
  declarations: [
    AlertDialogManagerComponent
  ],
  imports: [
    //
    BaseModule,

    // extra modules
    MaterialKitModule,

    // ng modules
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CommonModule
  ],
  providers: [
    DatePipe,
  ],
})
export class AlertsModule {
}
