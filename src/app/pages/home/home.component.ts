import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { QueryParamService } from '../../services/query-param-service.service';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink
  ],
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor(public queryParamService: QueryParamService) {
  }
}
