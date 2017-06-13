import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './notfound.component';

import { LoginModule } from './login/login.module';
import { GitHubModule } from './github/github.module';

import { routing } from './app.routing';
import { GitHubRouting } from './github/github.routing'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    GitHubModule,
    GitHubRouting,
    routing
  ],
  providers: [
        
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
