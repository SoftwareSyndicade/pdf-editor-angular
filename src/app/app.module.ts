import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UploadPdfComponent } from './components/upload-pdf/upload-pdf.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DraganddropDirective } from './directives/draganddrop/draganddrop.directive';
import { PdfComponent } from './components/pdf/pdf.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadPdfComponent,
    DraganddropDirective,
    PdfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FontAwesomeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
