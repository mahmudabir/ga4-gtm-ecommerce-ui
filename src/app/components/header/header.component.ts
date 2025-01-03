import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../services/theme.service';
import { QueryParamService } from '../../services/query-param-service.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private themeService: ThemeService, public queryParamService: QueryParamService) {
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
