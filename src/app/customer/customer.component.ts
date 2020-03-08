import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/customer.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(public service: CustomerService, public toastr: ToastrService) { }

  ngOnInit() {
    this.service.formModel.reset();
  }

  onSubmit(){
    this.service.register().subscribe(
      (res:any)=>{
        if(res.response){
          this.service.formModel.reset();
          this.toastr.success("New Customer Created.","Registration Successfully.");
        }
        else{
          this.toastr.error("Error occurred!","Try again.");
        }
      }
    );
  }
}
