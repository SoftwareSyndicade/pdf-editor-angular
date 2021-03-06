import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadPdfComponent, PdfComponent } from './components';

const routes: Routes = [{
    path:'',
    component: UploadPdfComponent
},{
    path:'pdf',
    component:PdfComponent
}]

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }