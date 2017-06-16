import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { UserService } from './services/user.service';

import { FileUploadModule } from 'primeng/components/fileupload/fileupload';


const appRoutes: Routes = [
  { path: 'crisis-center', component: LoginComponent },
  { path: 'hero/:id',      component: LoginComponent },
  {
    path: 'heroes',
    component: LoginComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  { path: '**', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    FileUploadModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
