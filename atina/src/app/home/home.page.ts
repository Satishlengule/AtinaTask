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
      // geolocation:['', Validators.required],
    })
    
  }

  public addproduct(): void{
    // debugger
    this.productdata.push(this.Productform.value);
    this.Productform.reset();
    // console.log(this.productdata.filter((entry:any)=>entry.name === 'raj').length);
  }

  

  // declareproduct():void{
  //   this.productdata=[];
  // }

  // searching(){
  //   var input,filter,table, tr,td,i,txtValue;
  //   input = document.getElementById("myinput");
  //   filter = input?.ariaValueText?.toUpperCase();
  //   table = document.getElementById("myTable");
  //   tr = table?.getElementsByTagName("tr");
  //   for (i = 0; i < tr.length; i++) {
  //     td = tr[i].getElementsByTagName("td")[0];
  //     if (td) {
  //       txtValue = td.textContent || td.innerText;
  //       if (txtValue.toUpperCase().indexOf(filter) > -1) {
  //         tr[i].style.display = "";
  //       } else {
  //         tr[i].style.display = "none";
  //       }
  //     }       
  //   }
  // }
   

}
