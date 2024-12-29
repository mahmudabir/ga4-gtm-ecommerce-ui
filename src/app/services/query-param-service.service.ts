import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QueryParamService {
  private paramValue: string | null = null;

  setGtmDebugParam(value: string | null): void {
    this.paramValue = value;
  }

  getGtmDebugParam() {
    return { "gtm_debug" : this.paramValue };
  }
}
