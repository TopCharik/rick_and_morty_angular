import {Component, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-model-container',
  templateUrl: './model-container.component.html',
  styleUrls: ['./model-container.component.css']
})
export class ModelContainerComponent implements OnInit {
  @Input() isLoading?: boolean;
  @Input() error?: any;
  @Input() loadingTemplate?: TemplateRef<any>;
  @Input() dataTemplate?: TemplateRef<any>;
  @Input() errorTemplate?: TemplateRef<any>;
  constructor() { }

  ngOnInit(): void {
  }

}
