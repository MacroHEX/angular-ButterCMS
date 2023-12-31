// ::: Angular
//
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import {DatePipe} from "@angular/common";
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from "@angular/material/form-field";

// ::: Base
//
import {APP_DTO, APP_PARENT, BaseModule} from "../base/base.module";

// ::: Libraries
//
import {KeycloakAngularModule} from "keycloak-angular";

// ::: Modules
//
import {MaterialKitModule} from "../extras/material/material.module";
import {AlertsModule} from "../mods/alerts/alerts.module";
import {ZtestModule} from "../mods/ztest/ztest.module";

// ::: Components
//
import {AppComponent} from './app.component';
import {PubMainFrameComponent} from './pub/frames/pub-main-frame/pub-main-frame.component';
import {HomeModule} from "../mods/home/home.module";
import {PubMainHeaderComponent} from './pub/panels/pub-main-header/pub-main-header.component';
import {PubMainFooterComponent} from './pub/panels/pub-main-footer/pub-main-footer.component';
import {FramesModule} from "../mods/frames/frames.module";

/*
function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8200',
        realm: 'karaku-test',
        clientId: 'frontend'
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html'
      }
    });
}*/

@NgModule({
  declarations: [
    AppComponent,
    PubMainFrameComponent,
    PubMainHeaderComponent,
    PubMainFooterComponent
  ],
  imports: [

    // mods
    ZtestModule,
    AlertsModule,
    HomeModule,
    FramesModule,

    // base
    BaseModule,

    // extras
    MaterialKitModule,

    // ng
    RouterModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    KeycloakAngularModule

  ],
  providers: [
    /*
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    },*/
    DatePipe,
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}, //standard, fill, outline
    {provide: APP_PARENT, useValue: {}},
    {provide: APP_DTO, useValue: {}}

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
