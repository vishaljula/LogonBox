import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatButtonModule, MatToolbarModule, MatInputModule, MatCardModule, MatListModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';
import { AuthInterceptorService } from './services/authInterceptor.service';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';

const routes = [
	{path: 'login', component: LoginComponent},
	{path: 'details', component: DetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent, LoginComponent, DetailsComponent
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    HttpClientModule, 
    FormsModule,
    MatButtonModule, 
    MatToolbarModule, 
    MatInputModule, 
    MatCardModule,
    MatListModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ApiService, AuthService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
