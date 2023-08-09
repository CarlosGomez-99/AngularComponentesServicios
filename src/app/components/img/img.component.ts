import { Component, Input, Output, EventEmitter, OnChanges, OnInit, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnChanges, OnInit, AfterViewInit, OnDestroy {

  img: string = '';

  @Input('img')
  set changeImg(newImg: string){
    this.img = newImg;
    console.log('change just img =>', this.img);    
  }
  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = 'https://www.w3schools.com/howto/img_avatar2.png';
  counter = 0;
  counterFn: number | undefined;

  constructor() {
    //Antes del render
    //Solo se corre una vez - NO async
    console.log('constructor', 'imgValue =>', this.img);
  }

  ngOnChanges(changes: SimpleChanges) {
    //Antes y durante del render
    //Evaluar cambios de los inputs
    //Corre las veces que se actualice los inputs
    console.log('ngOnChanges', 'imgValue =>', this.img);
    console.log('Changes: ', changes);
  }

  ngOnInit(): void {
    //Antes del render
    //Aqui se pueden correr cosas asincronas
    //Corre una sola vez
    console.log('ngOnInit', 'imgValue =>', this.img);
    this.counterFn = window.setInterval(() => {
      this.counter++;
      console.log('Run counter');
    }, 1000);
  }

  ngAfterViewInit(): void {
    //Despues del render
    //Manejar hijos
    console.log('ngAfterViewInit', 'imgValue =>', this.img);
  }

  ngOnDestroy(): void {
    //Eliminación de componente
    console.log('ngOnDestroy', 'imgValue =>', this.img);
    window.clearInterval(this.counterFn);

  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('log hijo');
    this.loaded.emit(this.img);
  }
}
