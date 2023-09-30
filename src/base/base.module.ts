import {InjectionToken, NgModule} from '@angular/core';
import {CommonModule, DatePipe} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialKitModule} from "../extras/material/material.module";
import {ExampleDialogComponent} from './examples/example-dialog/example-dialog.component';
import {ExamplePanelComponent} from './examples/example-panel/example-panel.component';
import {ExampleListComponent} from './examples/example-list/example-list.component';
import {ExamplePickerComponent} from './examples/example-picker/example-picker.component';
import {ExampleExpandableListComponent} from './examples/example-expandable-list/example-expandable-list.component';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from "@angular/material/form-field";
import { ExampleAppFrameComponent } from './examples/example-app-frame/example-app-frame.component';
import { ExampleMainFrameComponent } from './examples/example-main-frame/example-main-frame.component';
import { ExampleContentFrameComponent } from './examples/example-content-frame/example-content-frame.component';


export const APP_PARENT = new InjectionToken<{}>("AppParent");
export const APP_DTO = new InjectionToken<{}>("AppDTO");

@NgModule({
  exports: [],
  declarations: [

    ExampleDialogComponent,
    ExamplePanelComponent,
    ExampleListComponent,
    ExamplePickerComponent,
    ExampleExpandableListComponent,
    ExampleAppFrameComponent,
    ExampleMainFrameComponent,
    ExampleContentFrameComponent
  ],
  imports: [
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
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}, //standard, fill, outline
    {provide: APP_PARENT, useValue: {}},
    {provide: APP_DTO, useValue: {}}
  ],
})
export class BaseModule {
}
