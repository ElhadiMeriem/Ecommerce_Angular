import { Component } from '@angular/core';
declare var window: any; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  ngOnInit(){


    (function(d, m){
        
      var kommunicateSettings = 
          {"appId":"d7748a7d9a2f6716c70833de9825ebd","popupWidget":true,"automaticChatOpenOnNavigation":true};
      var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0]; h.appendChild(s);

      window.kommunicate = m; m._globals = kommunicateSettings;
  })(document, window.kommunicate || {});
    
  }
}

