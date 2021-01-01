import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { SearchComponent } from './search/search.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AddElectorComponent } from './add-elector/add-elector.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { VoterListComponent } from './voter-list/voter-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ErrorPageComponent,
    SearchComponent,
    NavbarComponent,
    FooterComponent,
    AddElectorComponent,
    VoterListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule, FooterComponent]
})
export class AppModule { }
