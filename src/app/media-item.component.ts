import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent {
  @Input() mediaItem;
  @Output() delete = new EventEmitter; 

  onDelete() {
    console.log('deleted');
    this.delete.emit(this.mediaItem); //This will emit an event to delete the media item component
  }
}