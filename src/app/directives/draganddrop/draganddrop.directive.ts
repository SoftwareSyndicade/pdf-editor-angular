import { Directive, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { saveAs } from 'file-saver';
import { FileService } from 'src/app/services';

@Directive({
  selector: '[draganddrop]'
})
export class DraganddropDirective {

  constructor(private fileService:FileService, private router:Router) { }

  @HostListener('dragover', ['$event']) onDragOver(evt){
    evt.preventDefault()
    evt.stopPropagation()
  }

  @HostListener('dragleave', ['$event']) onDragLeave(evt){
    evt.preventDefault()
    evt.stopPropagation()
  }

  @HostListener('drop', ['$event']) onDrop(evt){
    evt.preventDefault()
    evt.stopPropagation()

    const file = evt.dataTransfer.files[0]
    this.fileService.setPdf(file)
    this.router.navigate(['/pdf'])               

  }

  

}
