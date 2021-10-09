import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadPdfComponent } from './components/upload-pdf/upload-pdf.component';

const routes: Routes = [{
    path:'',
    component: UploadPdfComponent
}]

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }