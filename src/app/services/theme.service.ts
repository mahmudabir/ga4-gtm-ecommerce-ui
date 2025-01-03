import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  isDarkMode = true;
  iconStrokeColor = "#000";

  constructor() {
    // Load the saved theme preference
    const savedTheme = localStorage.getItem('theme');
    this.isDarkMode = savedTheme === 'dark';
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);

    // Save the current theme preference
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');

    this.iconStrokeColor = this.isDarkMode ? '#fff' : '#000';
  }

  setTheme(theme: string): void {

    if (!localStorage.getItem('theme'))  {
      const currentTheme =this.getCurrentTheme() ? 'dark' : 'light';

      if (currentTheme != theme) {
        this.toggleTheme();
      }
    }

  }

  getCurrentTheme(): boolean {
    return this.isDarkMode;
  }
}
