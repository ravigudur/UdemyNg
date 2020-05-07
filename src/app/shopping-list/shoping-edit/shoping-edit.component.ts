import { Component, OnInit,Output, ElementRef, EventEmitter, ViewChild } from '@angular/core';

import { ingredient } from 'src/app/Shared/ingredient.model';


@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit {
@ViewChild('nameInput') nameInputRef: ElementRef;
@ViewChild('amountInput') amountInputRef: ElementRef;  
@Output() ingrediantAdded =new EventEmitter<ingredient>();
constructor() { }

  ngOnInit(): void {
  }

  onAddItem(){
     const ingName = this.nameInputRef.nativeElement.value;
     const ingAmount = this.amountInputRef.nativeElement.value;
     const newIngredient = new ingredient(ingName, ingAmount);
     this.ingrediantAdded.emit(newIngredient);
  }

}
