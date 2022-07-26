import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private accountService: AccountService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  Register() {
    this.accountService.Register(this.model).subscribe({
      next: response => {
        console.log(response);
        this.Cancel();
      },
      error: error => {
        console.log(error);
        this.toastr.error(error.error);
      }
    })
  }

  Cancel() {
    this.cancelRegister.emit(false);
  }

}
