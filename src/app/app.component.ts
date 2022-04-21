import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Programming Languages';
  languageNames : Array< string > = [];
  language : any ;

  public formPArent : FormGroup = new FormGroup({

  });

  @ViewChild('name') inputName: any;

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