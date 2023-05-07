import {Component, OnChanges, SimpleChanges} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnChanges{
  constructor(private router: Router) {
  }
  ngOnChanges (changes: SimpleChanges) {
    this.errormsg='Helytelen jelszó mivel csak 1 fiók létezik'
    console.log('jelsó vagy email cím változtatás esetén a belépés nem lesz lehetséges');
    console.log(changes)
  }
  errormsg='';
  email = new FormControl('test');
  password = new FormControl('testpw');
  login() {
    console.error(this.errormsg);
    if (this.email.value ==='test' && this.password.value==='testpw') {
      this.router.navigateByUrl('/main');
    }
  }
}
