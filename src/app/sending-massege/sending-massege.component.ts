import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {EmailService} from '../email.service'
import { Email } from '../email';
@Component({
  selector: 'app-sending-massege',
  templateUrl: './sending-massege.component.html',
  styleUrls: ['./sending-massege.component.css']
})
export class SendingMassegeComponent implements OnInit {
  emails: Email[] = [];
  error = '';
  success = '';
  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  constructor(private EmailService: EmailService){}

  addCar( name:any,adressEmail:any,subject:any,content:any){
    let newId = this.generateId();
/* id:newId, */
    this.EmailService.store({id:newId, userName:name.value,adressEmail:adressEmail.value,subject:subject.value,content:content.value})
      .subscribe(
        (response) => console.log(response),
        (error)    => console.log(error)
      );

      this.emails.push({id:newId,userName:name.value,adressEmail:adressEmail.value,subject:subject.value,content:content.value});
      console.log(this.emails)
    }

    private generateId(){
        let str = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_";

        for (var i = 0; i < 10; i++){
            str += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return str;
    }

  ngOnInit(): void {
  }

}
