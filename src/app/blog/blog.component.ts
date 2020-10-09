import { Component, OnInit } from '@angular/core';
import { ContactPageServiceService } from '../contact-page-service.service';
import { FormGroup, FormControl,FormBuilder ,Validators,NgForm} from '@angular/forms'
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  name:any;
  comment:any;
  email:any;
  allComments:any = [];
  formObject:FormGroup;
  firstLoad: boolean=true;
  
  constructor(private contactService: ContactPageServiceService , formBuild:FormBuilder) { 
    this.formObject = formBuild.group({
      fName:['',Validators.required],
      mail:['',[Validators.required,Validators.email]],
     comm:['',Validators.required]
    })

  }

  ngOnInit(): void {
    if(this.firstLoad) {
    window.scroll(0,0);
    this.firstLoad = false;
  }
  this.updateComments();
  }
  sendComment(){
 
      let obj={
        clientName:this.name,
        clientComment:this.comment,
        clientEmail:this.email,
      }

      this.contactService.sendComment(obj).subscribe(
        (res:any)=>{

        },
        (err:any)=>{

        }
      )
        alert("comment updated")
        this.updateComments();
        this.setState();
      }
   
  

    updateComments(){
      
      
      this.contactService.getComments().subscribe(
        (res:any)=>{
          this.allComments=res;
           console.log("coments coming from backend ", res);
       },
        (err:any)=>{
    
        }
      )
    }
    
//   checkEmail(email:any) {

//     var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

//     if (!filter.test(email))
//      {
//       email.focus;
//       return false;
//      }
//      return true;
// }

setState(){
  this.email="";
  this.name="";
  this.comment="";
}

}
