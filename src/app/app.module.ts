import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'



import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { githubFormComponent } from './github-form/github-form.component';


@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    githubFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
