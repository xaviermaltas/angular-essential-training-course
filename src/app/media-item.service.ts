import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class MediaItemService {
    constructor( private http: HttpClient){}

    get(medium){
      const getOptions = {
        params: { medium }
      };
      return this.http.get<MediaItemResponse>('mediaitems', getOptions)
        .pipe(
          map((response: MediaItemResponse ) => {
            return response.mediaItems;
          })
        );
    }

    add(mediaItem){
      return this.http.post('mediaitems', mediaItem);
    }

    delete(mediaItem){
      return this.http.delete(`mediaitems/${mediaItem.id}`);
    }
}

interface MediaItem {
  id: number;
  name: string;
  medium: string;
  category: string;
  year: number;
  watchedOn: number;
  isFavorite: boolean;
}

interface MediaItemResponse {
  mediaItems: MediaItem[];
}