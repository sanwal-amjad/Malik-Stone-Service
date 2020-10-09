import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ContactPageServiceService } from '../contact-page-service.service';
import { FormGroup, FormControl,FormBuilder ,Validators,NgForm} from '@angular/forms'
import { from } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  userName: String;
  message:String;
  country:String;
  number:Number;
  email:String;
  formObject :FormGroup;

  constructor(  private contactService: ContactPageServiceService , private formBuild: FormBuilder) {
   console.log("constructor working");
      
      this.formObject= formBuild.group({
      name:['',Validators.required],
      phon:['',[Validators.required, Validators.maxLength(11)] ],
      ema:['',[Validators.required,Validators.email]],
      mes:['',Validators.required],
      count:['',Validators.required]
    })
  }  
  
  ngOnInit(): void {
  }

    NODE
    sendDataToBackEnd()
    {
        let objectForData ={
            name:this.userName,
            message: this.message,
            email:this.email,
            phone:this.number,
            country:this.country
          }
        console.log("in contact.ts ",objectForData)
        this.contactService.mailSending(objectForData).subscribe(
          (res: any) => { },
          (err: any) => {})
          alert("Information Sent")
          this.resetAllStates();
     }

//   php


// sendDataToBackEnd()
// {
//     let objectForData ={
//         name:this.userName,
//         message: this.message,
//         email:this.email,
//         phone:this.number,
//         country:this.country
//       }
//     console.log("in contact.ts ",objectForData)
//     this.contactService.createPolicy(objectForData).subscribe(
//       (res: any) => { },
//       (err: any) => {})
//       alert("Information Sent")
//       this.resetAllStates();
//  }
        
        // checkEmail(email:any) {

        //   var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        //   if (!filter.test(email))
        //   {
        //     email.focus;
        //     this.email="";     
        //     return false;
        //   }
        //   return true;


        // }
       resetAllStates(){
          this.email="";
          this.userName="";
          this.country="";
          this.number=null;
          this.email="";
          this.message="";
        }
        }

