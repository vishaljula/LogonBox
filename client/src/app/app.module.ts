import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatToolbarModule, MatInputModule, MatCardModule, MatListModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';
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
    HttpModule, 
    FormsModule,
    MatButtonModule, 
    MatToolbarModule, 
    MatInputModule, 
    MatCardModule,
    MatListModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ApiService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
