import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../services/theme.service';
import { QueryParamService } from '../../services/query-param-service.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  isDarkMode = true;

  constructor(private themeService: ThemeService, public queryParamService: QueryParamService) {
    let theme = "dark";
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      theme = "dark";
    } else {
      theme = "light";
    }

    this.themeService.setTheme(theme);
    this.isDarkMode = this.themeService.getCurrentTheme();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
    this.isDarkMode = this.themeService.getCurrentTheme();
  }
}
