import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ServiceWorkerModule } from '@angular/service-worker'
import { environment } from '../environments/environment';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';
import { MenuComponent } from './core/components/sidebar/menu/menu.component';
import { SidebarButtonComponent } from './core/components/sidebar/sidebar-button/sidebar-button.component'

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MenuComponent,
    SidebarButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
