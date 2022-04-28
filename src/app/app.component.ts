import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'Programming Languages';
  languageNames : Array< string > = [];
  language : any ;
  length : number = 10;
  pageSize : number = 3;
  pageNumber : number = 3;
  pageSizeOptions : Array < number > = [2,4,6,8,10]

  public formPArent : FormGroup = new FormGroup({

  });

  @ViewChild('name') inputName: any;

  handlePage(e: PageEvent){
    this.pageSize = e.pageSize;
    this.pageNumber = e.pageIndex + 1;
  }

  onKeypress(event: any){
    this.language = event.target.value;
  
    if(!!this.language.length){
      this.languageNames.push(this.language);
    }

  }

  handleClear(){
    this.inputName.nativeElement.value = '';
    // this.inputName.placeholder = '';
  }

}