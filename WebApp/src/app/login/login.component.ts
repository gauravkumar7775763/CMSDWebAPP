import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public selectedValue!: string;
  
  constructor() { }

  ngOnInit() {
    this.selectedValue = 'Admin Login';
  }

  onToggle(value : any){
    console.log(value);
    if(value == 'Admin Login'){
      this.selectedValue = 'Admin Login';

    }
    else if(value == 'Customer'){
      this.selectedValue = 'Customer';

    }
  }
}
