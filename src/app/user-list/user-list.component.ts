import { transition } from '@angular/animations';
import { UserService } from './../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  public users!: string[];
  public newUsername: string = '';
  public subscription: Subscription = new Subscription();

  constructor(
    private userService: UserService // il faut probablement injecter un service ici !
  ) {}

  ngOnInit() {
    // il faut initialiser les users ici avec le service
    this.subscription.add(
      this.userService.users$.subscribe((users) => (this.users = users))
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // public addUser(): void {
  //   this.userService.addUser(this.newUsername);
  //   this.newUsername = '';
  // }
}
