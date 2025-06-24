import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  isLoading = signal(false)

  setLoading(param: boolean){
    this.isLoading.set(param)
  }

  constructor() { }
}
