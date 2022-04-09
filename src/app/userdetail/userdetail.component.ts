import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { HttpserviceService } from '../httpservice.service';


@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {

  public detail:any

 signupForm!:FormGroup

  constructor(private  httpservice:HttpserviceService,private fb:FormBuilder) { 

    

  }

  
ngOnInit(): void {
  //for showing the data in the table
 this.httpservice.getdetails().subscribe(data=>this.detail=data)
    
  this.signupForm=this.fb.group({

    name:[''],
    place:[''],
    state:[''],
    age:[],
    _id:['']
    

  })
  }

  //add
  details(signupForm:any){  
const stude={id:signupForm.value.id,

  name:signupForm.value.name,
  place:signupForm.value.place,
  state:signupForm.value.state,
  age:signupForm.value.age,

}

    this.httpservice.adddetails(stude).subscribe(datas=>{alert("new data added")},
    (err)=>{alert("unable to add" +err)})
  
  }
 }
