import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Image } from './image.model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  getImages(){
    const headerDict = { 'x-api-key' : 'c768f6f6-e567-456e-b122-8a5b6b3b43a1' }

    const requestOptions = { headers: new HttpHeaders(headerDict) };

    return this.http.get<Image[]>('https://api.thecatapi.com/v1/images/search', requestOptions);
  }
}
