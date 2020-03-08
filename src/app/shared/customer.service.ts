import { Injectable } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms'
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }

      readonly BaseURI="https://localhost:44330/api";

  formModel = this.fb.group({
      Name:['',Validators.required],
      Email:['',[Validators.required, Validators.email]],
      Phone:['',[Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      Address:['',Validators.required],      
      City:['',Validators.required],

  });    
  
  register(){
    var body={
      Name: this.formModel.value.Name,
      Email: this.formModel.value.Email,
      Phone: this.formModel.value.Phone,
      Address: this.formModel.value.Address,
      City: this.formModel.value.City,
    };
    return this.http.post(this.BaseURI+'/Students', body);
  }
}
