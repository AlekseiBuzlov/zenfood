import {catchError} from 'rxjs/internal/operators';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as Actions from '@actions/app.actions';
import {Observable} from 'rxjs';
import environment from '@environment/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiClientService {
    constructor(
        private http: HttpClient
    ) {
    }

    makeRequest(method, url, body, params, headers?) {
        const httpOptions: any = {'Content-Type': 'application/json'};
        const options: any = {
            body,
            params
        };
        if (headers && headers.responseType) {
            options.responseType = 'text';
        }
        return this.http.request(method, `${environment.baseURL}${url}`, options).pipe(
            catchError((err) => {
                // this.store.dispatch(new Actions.ShowAlertMessage({message: err.error || err, type: 'danger'}));
                throw(err);
            })
        );
    }

    get(url, params, headers?) {
        return this.makeRequest('GET', url, null, params, headers);
    }

    post(url, body, params = {}) {
        return this.makeRequest('POST', url, body, params);
    }

    delete(url, params = {}, headers?) {
        return this.makeRequest('DELETE', url, null, params, headers);
    }

    update(url, body, params = {}) {
        return this.put(url, body, params);
    }

    put(url, body, params) {
        return this.makeRequest('PUT', url, body, params);
    }

    private getParams(params) {
        if (!params) {
            return '';
        }
        return '?' + Object
            .keys(params)
            .map((key) =>key + '=' + encodeURIComponent(params[key]))
            .join('&');
    }
}
