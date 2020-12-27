import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';

const MyRoute: Routes =
  [
    { path: '', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'login', component: LoginComponent },
    // default
    { path: 'notfound', component: ErrorPageComponent },
    { path: 'error', component: ErrorPageComponent, data: { message: 'Page Not Found!' } },
    { path: '**', redirectTo: '/notfound' }
  ];
@NgModule({
  imports: [RouterModule.forRoot(MyRoute, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
