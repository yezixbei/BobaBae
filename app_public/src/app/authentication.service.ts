import { Inject, Injectable } from '@angular/core';
import { BROWSER_STORAGE } from './storage';
import { User } from './user';
import { AuthResponse } from './auth-response';
import { BobabaeDataService } from './bobabae-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(
    @Inject(BROWSER_STORAGE) private storage: Storage, // from storage.ts
    private bobabaeDataService: BobabaeDataService
  ) { }

  public getToken(): string {
    return this.storage.getItem('boba-token'); // local browser storage
  }

  public saveToken(token: string): void {
    this.storage.setItem('boba-token', token);
  }

  public login(credentials: any): Promise<any> {
    return this.bobabaeDataService.login(credentials)
      .then((authResp: AuthResponse) => this.saveToken(authResp.token));
  }

  public register(credentials: any): Promise<any> {
    return this.bobabaeDataService.register(credentials)
      .then((authResp: AuthResponse) => this.saveToken(authResp.token));
  }

  public logout(): void {
    this.storage.removeItem('boba-token');
  }

  public isLoggedIn(): boolean {
    const token: string = this.getToken();
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp > (Date.now() / 1000);
    } else { return false; }
  }

  public getCurrentUser(): User {
    if (this.isLoggedIn()) {
      const token: string = this.getToken();
      const { email, name } = JSON.parse(atob(token.split('.')[1]));
      return { email, name } as User;
    }
  }
}
