import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BaseModule} from "../../base/base.module";
import {MaterialKitModule} from "../../extras/material/material.module";
import { TestMainFrameComponent } from './frames/test-main-frame/test-main-frame.component';
import { TestContentFrameComponent } from './frames/test-content-frame/test-content-frame.component';
import { TestMainHeaderComponent } from './panels/test-main-header/test-main-header.component';
import { TestContentMenuComponent } from './panels/test-content-menu/test-content-menu.component';
import { TestContentPanelComponent } from './panels/test-content-panel/test-content-panel.component';
import { TestOtherFrameComponent } from './frames/test-other-frame/test-other-frame.component';



@NgModule({
  exports: [],
  declarations: [

  
    TestMainFrameComponent,
        TestContentFrameComponent,
        TestMainHeaderComponent,
        TestContentMenuComponent,
        TestContentPanelComponent,
        TestOtherFrameComponent
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
export class ZtestModule {
}
