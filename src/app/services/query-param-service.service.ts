import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QueryParamService {
  private paramValue: string | null = null;
  private paramKey: string = "gtm_debug";

  setGtmDebugParam(value: string | null): void {
    this.paramValue = value;
  }

  getGtmDebugParam(): { [key: string]: string | null } {
    const paramKey = this.paramKey;
    return this.paramValue ? { paramKey : this.paramValue } : {};
  }
}
