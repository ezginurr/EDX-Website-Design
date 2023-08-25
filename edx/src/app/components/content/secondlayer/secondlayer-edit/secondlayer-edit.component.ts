import { Component} from '@angular/core';

@Component({
  selector: 'app-secondlayer-edit',
  templateUrl: './secondlayer-edit.component.html',
  styleUrls: ['./secondlayer-edit.component.css']
})
export class SecondlayerEditComponent {

  selecteditem:number = 1;
  second:number = 2;

  f2(){
    this.selecteditem = this.second;
  }

}
