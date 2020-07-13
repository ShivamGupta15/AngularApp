import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomeComponent } from './home/home.component';
import { HighlightDirective } from './highlight.directive';
import { FormspageComponent } from './formspage/formspage.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NewformComponent } from './newform/newform.component';
import { EmailCheckDirective } from './email-check.directive';
import { EnrollmentService } from './enrollment.service';
import { PhoneCheckDirective } from './phone-check.directive';







@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    TopBarComponent,
    HomeComponent,
    HighlightDirective,
    FormspageComponent,
    NewformComponent,
    EmailCheckDirective,
    PhoneCheckDirective,

 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
