import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-textarea',
  styles: [`
    @import "../../../../assets/variables";


    .textarea {
      @include text-md();
      background: none;
      border: none;
      color: var(--light);
      font-family: "DM Sans", sans-serif !important;
      min-height: 140px;
      outline: none;
      padding-top: 25px;
      resize: none;
      width: 100%;

      &::placeholder {
        color: var(--light);
        opacity: 1;
      }
    }
  `],
  template: `
    <textarea
      class="textarea"
      [placeholder]="placeholder"
      [maxLength]="maxLength ? maxLength : undefined"
      [ngModel]="text"
      (ngModelChange)="onTextChanged($event)"
      [readonly]="readonly"
      rows="5"
      cols="30"
    ></textarea>
    <app-character-counter
      *ngIf="maxLength"
      [current]="current"
      [maxLength]="maxLength"
    ></app-character-counter>
  `,
})
export class TextareaComponent {
  @Input() placeholder?: string;
  @Input() maxLength?: number;
  @Input() readonly: boolean = false;
  @Input() text: string | null = '';
  @Output() textChanged = new EventEmitter<string>();

  current: number = 0;

  onTextChanged($event: string) {
    this.current = $event.length;
    this.textChanged.emit($event);
  }

}
