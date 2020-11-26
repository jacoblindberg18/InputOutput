import { Component, EventEmitter } from '@angular/core';
import { Animal } from './models/animal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'InputOutput';

  animals: Animal[] = [
    {
      name: 'bulldog',
      age: 2,
      type: 'dog',
      mammal: true,
      isFed: false
    },
    {
      name: 'parrot',
      age: 7,
      type: 'bird',
      mammal: false,
      isFed: false
    },
    {
      name: 'tiger',
      age: 10,
      type: 'big cat',
      mammal: true,
      isFed: false
    },
    {
      name: 'turtle',
      age: 55,
      type: 'reptile',
      mammal: false,
      isFed: false
    },
  ];

  feedAnimal(animal: Animal) {
    animal.isFed = true;
    
  }
}
