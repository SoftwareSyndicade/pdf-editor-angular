import { AfterViewInit, Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import WebViewer, { WebViewerInstance } from '@pdftron/webviewer';
import { Subject } from 'rxjs';
import { FileService } from 'src/app/services';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit, AfterViewInit {

  @ViewChild('viewer') viewer: ElementRef;
  wvInstance: WebViewerInstance;
  @Output() coreControlsEvent:EventEmitter<string> = new EventEmitter(); 

  private documentLoaded$: Subject<void>;

  constructor(private fileService:FileService, private router:Router) {
    this.documentLoaded$ = new Subject<void>();

    if(fileService.getPdf() === undefined)
      this.router.navigate(['/'])            
  }

  ngAfterViewInit(): void {
    WebViewer({
      path: '../lib',
      enableFilePicker: true,
      
      // initialDoc: '../files/AbhayResume.pdf'
    }, this.viewer.nativeElement).then(instance => {
      this.wvInstance = instance;

      this.coreControlsEvent.emit(instance.UI.LayoutMode.Single);

      const { documentViewer, Annotations, annotationManager } = instance.Core;

      instance.UI.openElements(['notesPanel']);
      let file = this.fileService.getPdf();
      instance.UI.loadDocument(file, { filename: file.name });

      documentViewer.addEventListener('annotationsLoaded', () => {
        console.log('annotations loaded');
      });

      documentViewer.addEventListener('documentLoaded', () => {
        this.documentLoaded$.next();
        const rectangleAnnot = new Annotations.RectangleAnnotation({
          PageNumber: 1,
          // values are in page coordinates with (0, 0) in the top left
          X: 100,
          Y: 150,
          Width: 200,
          Height: 50,
          Author: annotationManager.getCurrentUser()
        });
        annotationManager.addAnnotation(rectangleAnnot);
        annotationManager.redrawAnnotation(rectangleAnnot);
      });
    })
  }

  ngOnInit(): void {
  }

  getDocumentLoadedObservable() {
    return this.documentLoaded$.asObservable();
  }
}
