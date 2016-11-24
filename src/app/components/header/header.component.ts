import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../../../translate';


@Component({
    moduleId: module.id,
    selector: 'header',
    templateUrl: 'header.component.html'
})
export class HeaderComponent implements OnInit {
    public translatedText: string;
    public supportedLanguages: any[];
  
    constructor(private _translate: TranslateService) { }

    ngOnInit() {
      // standing data
      this.supportedLangs = [
        { display: 'En', value: 'en' },
        { display: 'Ua', value: 'ua' },
        { display: 'Ru', value: 'ru' },
      ];
      
      this.selectLang('en');
        
    }
    
    isCurrentLang(lang: string) {
      return lang === this._translate.currentLang;
    }
    
    selectLang(lang: string) {
      this._translate.use(lang);
      this.refreshText();
    }
    
    refreshText() {
      this.translatedText = this._translate.instant('hello world');
    }
 }
