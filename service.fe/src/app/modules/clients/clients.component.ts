import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'clients',
  imports: [],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss',
})
export class ClientsComponent implements OnInit {
  private route!: Route;

  constructor(
    private router: Router
  ) {}

  ngOnInit() {}

  goToAddClient() {
    console.log('Navigating to add-clients', this.route);
    this.router.navigate(['add-clients', { relativeTo: this.route }]);
  }

}
