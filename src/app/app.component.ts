import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { QueryParamService } from './services/query-param-service.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ga4-gtm-ecommerce-ui';

  constructor(private route: ActivatedRoute, private queryParamService: QueryParamService) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const preservedParam = params['gtm_debug'];
      if (preservedParam) {
        this.queryParamService.setGtmDebugParam(preservedParam);
      }
    });
  }
}
