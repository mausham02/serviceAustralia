import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { InboxComponent } from './inbox/inbox.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { EventsComponent } from './events/events.component';
import {AuthGuardGuard} from './auth-guard.guard';
import {TokenInterceptorService} from './token-interceptor.service';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SpecialEventsComponent,
    EventsComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    InboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthGuardGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
