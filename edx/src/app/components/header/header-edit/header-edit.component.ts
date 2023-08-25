import { Component } from '@angular/core';

@Component({
  selector: 'app-header-edit',
  templateUrl: './header-edit.component.html',
  styleUrls: ['./header-edit.component.css']
})
export class HeaderEditComponent {
  count:number = 0;

  right:boolean = false;
  right1:boolean = false;

  left:boolean = false;
  left1:boolean = false;



 public counter(a:string) {

  this.right=false; this.right1=false;
    
  this.left = false; this.left1 = false;
  if(a==='c-right') {
    // this.count++;

    if(this.count == 0){
      this.count = 1;
      console.log(this.count);
      this.right = true;
  
    }
    else if(this.count == 1){
      this.count = 2;
      console.log(this.count);
      this.right1 = true;
    }
  }

  if(a==='c-left') {
    // this.count--;

    if(this.count == 2){
      this.count = 1;
      console.log(this.count);
      this.left = true;
    }
    else if(this.count == 1){
      this.count = 0;
      console.log(this.count);
      this.left1 = true;
    }
  }

 }
  
}
