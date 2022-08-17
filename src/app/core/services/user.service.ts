import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "src/environments/environment";
import { apiConfig } from "src/app/api-url.config";
import {map, catchError} from "rxjs/operators";
import {throwError} from "rxjs";


@Injectable({providedIn: 'root'})
export class UserService {
  API_END_POINT: string;



  constructor(private http: HttpClient) {
    this.API_END_POINT = environment.API_URL;
  }

  uploadFile(userEnteredValue: any) {
    let params = new HttpParams().set('user_input', userEnteredValue);
    return this.http.post(`${this.API_END_POINT}${apiConfig.upload.vuln1}`,{} ,{params})
        .pipe(
          map((res: any) => res),
          catchError((err: any) => {
            return throwError(err.error);
          })
        );
  }
  uploadFile2(userEnteredValue: any) {
    let params = new HttpParams().set('user_input1', userEnteredValue);
    return this.http.post(`${this.API_END_POINT}${apiConfig.upload.vuln2}`,{} ,{params})
        .pipe(
          map((res: any) => res),
          catchError((err: any) => {
            return throwError(err.error);
          })
        );
  }

}
