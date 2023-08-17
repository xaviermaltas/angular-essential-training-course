import { Component, Input } from '@angular/core';

@Component({
  selector: 'media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent {
  @Input() mediaItem; 

  onDelete() {
    console.log('deleted');
  }
}
