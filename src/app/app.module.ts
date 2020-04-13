import { ModalCompartirPageModule } from './pages/modal-compartir/modal-compartir.module';
import { ModalCompartirPage } from './pages/modal-compartir/modal-compartir.page';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ComponentsModule } from './components/components.module';

// Geo
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

// API
import { NovedadesPageModule } from './pages/novedades/novedades.module';
import { HttpClientModule } from '@angular/common/http';

// import { Api } from './providers';


@NgModule({
  declarations: [
    AppComponent,
    ModalCompartirPage
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    ComponentsModule,
    NovedadesPageModule,
    HttpClientModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeGeocoder,
    Geolocation,
    // Api,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalCompartirPage
  ],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
