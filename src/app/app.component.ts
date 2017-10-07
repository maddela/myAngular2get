import { Component } from '@angular/core';
import {UserService} from './user.service';
import {Employee} from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
  title = 'app';
  profile: any[] = [];
  name:string;
  age:string;
  city:string;
  keyValue: boolean =false;
  employee: Employee;
  constructor(private user: UserService){
    this.loadUser();
    this.employee = new Employee();

  }

  loadUser() {
    this.user.getUser().subscribe((data) => {
      this.profile = data;
      for(let i= 0; i < this.profile.length; i++) {
        let stringAray = JSON.parse(this.profile[i].Headers);
        console.log('stringAray', stringAray);
        this.profile = stringAray;
      }
    })
  }
public submit(employee: Employee) {
      console.log(employee);
      this.user.postUser(employee).subscribe((res) => {
        this.name = res.Username;
    
        
      })
  }

  public addKeyValue(event) {
      this.profile.push({"key": "", "value": ""});
  }
}
