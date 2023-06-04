import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

Productform: FormGroup;
public productdata:any=[];
searchValue : String="";



  constructor( private fb:FormBuilder) {

    this.productdata = [];

    

    this.Productform = this.fb.group({
      likes:['', Validators.required],
      name:['', Validators.required],
      price:['', Validators.required],
      type:['', Validators.required],
      description:['', Validators.required],
      image:['', Validators.required],
     
    })
    
  }

  public addproduct(): void{
    
    this.productdata.push(this.Productform.value);
    this.Productform.reset();
    
  }


}
