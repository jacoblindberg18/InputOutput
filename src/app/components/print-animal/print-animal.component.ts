import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Animal } from 'src/app/models/animal';


@Component({
  selector: 'app-print-animal',
  templateUrl: './print-animal.component.html',
  styleUrls: ['./print-animal.component.css']
})
export class PrintAnimalComponent implements OnInit {
  @Input() animal: Animal;
  @Output() fed = new EventEmitter<Animal>()

  constructor() { }

  ngOnInit(): void {
  }

  feedAnimal(animal: Animal) {
    this.fed.emit(animal);
  }

}
