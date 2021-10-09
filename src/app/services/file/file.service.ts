import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private file: any
  constructor() { }

  setPdf(file){
    this.file = file
  }

  getPdf(){
    return this.file
  }
}
