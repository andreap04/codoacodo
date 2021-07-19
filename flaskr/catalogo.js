/*

<!--  aca empieza un item         -->
        <h3>           {{h3_texto}}             </h3>
        <img src=" {{img_src}}" alt=" {{img_alt}}" width="500">
        <br><br>
        <a class="nav" href="  {{a_href}}   " class="receta">  {{a_texto}} </a> <br>
        
 <!--  aca termina un item         --></br>

 */

 var h3_texto  = [  "Sopa Crema de Calabaza", "Risotto" , "Ravioles", "Canelones" ];
 var img_src   = [  "SopaCalabaza.png" , "risotto.jpg", "ravioles.jpg", "canelones.jpg" ];
 var img_alt   = [  "Sopa Crema de Calabaza" , "Risotto", "Ravioles", "Canelones"];
 var a_href    = [  "psopaCalabaza.html", "prisotto.html" , "pravioles.html", "pcanelones.html"];
 var a_texto   = [  "Receta", "Receta" , "Receta de ravioles", "Receta"];
 
 
 var cant_productos = 4;  // var int
 var i=0;                 // var int
 var texto_html = "";     // var string
 var salto_pag = "<br>";  // var string
 var existe = true;       // var booleana
 
 for (i=0; i<cant_productos; i++){
    /*
    texto_html = texto_html + " <h3>  " + h3_texto[i] + "   </h3>" ; 
    texto_html = texto_html + "<img src='imagenes/" + img_src[i] +   "' alt='" + img_alt[i] + "' width='500'>"; 
    texto_html = texto_html + "<br><br>"
    texto_html = texto_html + "<a class='nav' href='" + a_href[i] + "' class='receta'> " + a_texto[i] + "</a> <br>" ;
    */
 
    texto_html = texto_html + ` <!--  aca empieza un item         -->
         <h3>   ${h3_texto[i]} </h3>
         <img src="${img_src[i]}" alt=" ${img_alt[i]}" width="500">
         <br><br>
         <a class="nav" href="${a_href[i]}" class="receta">${a_texto[i]}</a> <br>
       <!--  aca termina un item  --></br>`;
 }
 
 document.getElementById("productos").innerHTML = texto_html;