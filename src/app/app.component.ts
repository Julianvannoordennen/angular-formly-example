import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Animal } from './animal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {

  public animal: Animal;
  public animalForm: FormGroup;
  public animalFields: Array<FormlyFieldConfig>;

  constructor() {

    //Defineer het model waar de data in komt
    this.animal = new Animal();

    //Maak een nieuwe formgroup aan
    this.animalForm = new FormGroup({});

    //Genereer het formulier
    this.animalFields = this.animal.getFormFields();
  }

  onAnimalFormSubmit(animal:Animal) {
    console.log(animal);
  }

}
