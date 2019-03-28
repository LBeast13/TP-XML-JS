//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function recupererPremierEnfantDeTypeNode(n) {
    var x = n.firstChild;
    while (x.nodeType != 1) { // Test if x is an element node (and not a text node or other)
        x = x.nextSibling;
    }
    return x;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Question 1
//change le couleur de l'arrière plan avec la couleur spécifiée et la couleur du texte du bouton avec le second paramètre
function setBgAndButtonColor(bgColor,textColor){
    //change la couleur de l'arrière plan (body)
    var corpsPage = window.document.body;
    corpsPage.style.background = bgColor;
    
    //change la couleur du texte du bouton
    var boutonModif = window.document.getElementById("buttonQ1");
    boutonModif.style.color = textColor;
}

//Question 2
//réinitialise la couleur de l'arrière plan de la page en blanc
function resetBgColor(){
    var corpsPage = window.document.body;
    corpsPage.style.background = "white";
}

//Question 3
//Charge fichier xml et xsl avec le paramètre à lui passer,
//affiche le nom officiel et la capitale du pays dont le nom est nomPays.
function getNomOfficielCapitale(xmlDocumentUrl, xslDocumentUrl, nomPays){
    var xsltProcessor = new XSLTProcessor();

    // Chargement du fichier XSL à l'aide de XMLHttpRequest synchrone 
    var xslDocument = chargerHttpXML(xslDocumentUrl);

    // Importation du .xsl
    xsltProcessor.importStylesheet(xslDocument);

    // Passage du paramètre pour la feuille de style
    xsltProcessor.setParameter(null, "nomPays", nomPays);

    // Chargement du fichier XML à l'aide de XMLHttpRequest synchrone 
    var xmlDocument = chargerHttpXML(xmlDocumentUrl);

    // Création du document XML transforme par le XSL
    var newXmlDocument = xsltProcessor.transformToDocument(xmlDocument);

    // Recherche du parent (dont l'id est "here") de l'élément à remplacer dans le document HTML courant
    var elementHtmlParent = window.document.getElementById("nomEtCapitale");

    // Premier élément fils du parent
    var elementHtmlARemplacer = recupererPremierEnfantDeTypeNode(elementHtmlParent);
    // Premier élément "elementName" du nouveau document (par exemple, "ul", "table"...)
    var elementAInserer = newXmlDocument.getElementsByTagName("p")[0];

    // Remplacement de l'élément
    elementHtmlParent.replaceChild(elementAInserer, elementHtmlARemplacer);
}

//Question 4
//Charge l'image svg dont l'URI est passée en paramètre et l'affiche dans la balise prévue via l'attribut "data"
function afficheImage(imageURL){

    // On récupère l'objet via son id
    var imgSVG = document.getElementById("imageExemple");

    // Charge l'image grâce à l'URL
    imgSVG.setAttribute("data",imageURL)
}

//Question 5
//Ajout de l'événement click à l'image d'exemple svg qui affiche la valeur de l'attribut title de l'élément cliqué
function imageClickable(){

    //Identification de l'image svg cible
    var imgSVG = document.getElementById("imageExemple");

    //Identification de l'élément pour l'affichage
    var titreElement = document.getElementById("titreElement");
    
    //Le DOM du SVG est accessible grâce à la propriété .contentDocument
    var formes = imgSVG.contentDocument;

    //Création d'un tableau avec les IDs des différents éléments du svg
    var formesElements = ['leCercle', 'leRect', 'laCourbe'];

    //Parcours des éléments
    formesElements.forEach(function (el) {
        //Identification de l'élément courant 
        var current = formes.getElementById(el);
        
        //Associate a click event-listener to show the feedback
        current.addEventListener("click", function () {
             
            //Affiche le titre de l'élément courant
            titreElement.innerHTML = current.getAttribute("title");
        });
    });

}

//Question 6
//Charge l'image svg dont l'URI est passée en paramètre et l'affiche dans la balise prévue via l'attribut "data"
function afficheImageMonde(imageURL){

    // On récupère l'objet via son id
    var imgSVG = document.getElementById("imageMonde");
    imgSVG.setAttribute("data",imageURL)
   
}

//Question 7
//Rend les pays clickables et affiche leur attribut title au click
function imageMondeClickable(){
    
    //Identification de l'image svg cible
    var imgSVG = document.getElementById("imageMonde");

    //Identification de l'élément pour l'affichage
    var titreElement = document.getElementById("nomPaysClick");
    
    //Le DOM du SVG est accessible grâce à la propriété .contentDocument
    var pays = imgSVG.contentDocument;

    //Création d'un tableau avec les IDs des différents éléments du svg
    var paysTab = [{id:"AD"},{id:"AE"},{id:"AF"},{id:"AG"},{id:"AI"},{id:"AL"},{id:"AM"},{id:"AO"},{id:"AR"},{id:"AS"},{id:"AT"},{id:"AU"},{id:"AW"},{id:"AX"},{id:"AZ"},{id:"BA"},{id:"BB"},{id:"BD"},{id:"BE"},{id:"BF"},{id:"BG"},{id:"BH"},{id:"BI"},{id:"BJ"},{id:"BL"},{id:"BN"},{id:"BO"},{id:"BM"},{id:"BQ"},{id:"BR"},{id:"BS"},{id:"BT"},{id:"BV"},{id:"BW"},{id:"BY"},{id:"BZ"},{id:"CA"},{id:"CC"},{id:"CD"},{id:"CF"},{id:"CG"},{id:"CH"},{id:"CI"},{id:"CK"},{id:"CL"},{id:"CM"},{id:"CN"},{id:"CO"},{id:"CR"},{id:"CU"},{id:"CV"},{id:"CW"},{id:"CX"},{id:"CY"},{id:"CZ"},{id:"DE"},{id:"DJ"},{id:"DK"},{id:"DM"},{id:"DO"},{id:"DZ"},{id:"EC"},{id:"EG"},{id:"EE"},{id:"EH"},{id:"ER"},{id:"ES"},{id:"ET"},{id:"FI"},{id:"FJ"},{id:"FK"},{id:"FM"},{id:"FO"},{id:"FR"},{id:"GA"},{id:"GB"},{id:"GE"},{id:"GD"},{id:"GF"},{id:"GG"},{id:"GH"},{id:"GI"},{id:"GL"},{id:"GM"},{id:"GN"},{id:"GO"},{id:"GP"},{id:"GQ"},{id:"GR"},{id:"GS"},{id:"GT"},{id:"GU"},{id:"GW"},{id:"GY"},{id:"HK"},{id:"HM"},{id:"HN"},{id:"HR"},{id:"HT"},{id:"HU"},{id:"ID"},{id:"IE"},{id:"IL"},{id:"IM"},{id:"IN"},{id:"IO"},{id:"IQ"},{id:"IR"},{id:"IS"},{id:"IT"},{id:"JE"},{id:"JM"},{id:"JO"},{id:"JP"},{id:"JU"},{id:"KE"},{id:"KG"},{id:"KH"},{id:"KI"},{id:"KM"},{id:"KN"},{id:"KP"},{id:"KR"},{id:"XK"},{id:"KW"},{id:"KY"},{id:"KZ"},{id:"LA"},{id:"LB"},{id:"LC"},{id:"LI"},{id:"LK"},{id:"LR"},{id:"LS"},{id:"LT"},{id:"LU"},{id:"LV"},{id:"LY"},{id:"MA"},{id:"MC"},{id:"MD"},{id:"MG"},{id:"ME"},{id:"MF"},{id:"MH"},{id:"MK"},{id:"ML"},{id:"MO"},{id:"MM"},{id:"MN"},{id:"MP"},{id:"MQ"},{id:"MR"},{id:"MS"},{id:"MT"},{id:"MU"},{id:"MV"},{id:"MW"},{id:"MX"},{id:"MY"},{id:"MZ"},{id:"NA"},{id:"NC"},{id:"NE"},{id:"NF"},{id:"NG"},{id:"NI"},{id:"NL"},{id:"NO"},{id:"NP"},{id:"NR"},{id:"NU"},{id:"NZ"},{id:"OM"},{id:"PA"},{id:"PE"},{id:"PF"},{id:"PG"},{id:"PH"},{id:"PK"},{id:"PL"},{id:"PM"},{id:"PN"},{id:"PR"},{id:"PS"},{id:"PT"},{id:"PW"},{id:"PY"},{id:"QA"},{id:"RE"},{id:"RO"},{id:"RS"},{id:"RU"},{id:"RW"},{id:"SA"},{id:"SB"},{id:"SC"},{id:"SD"},{id:"SE"},{id:"SG"},{id:"SH"},{id:"SI"},{id:"SJ"},{id:"SK"},{id:"SL"},{id:"SM"},{id:"SN"},{id:"SO"},{id:"SR"},{id:"SS"},{id:"ST"},{id:"SV"},{id:"SX"},{id:"SY"},{id:"SZ"},{id:"TC"},{id:"TD"},{id:"TF"},{id:"TG"},{id:"TH"},{id:"TJ"},{id:"TK"},{id:"TL"},{id:"TM"},{id:"TN"},{id:"TO"},{id:"TR"},{id:"TT"},{id:"TV"},{id:"TW"},{id:"TZ"},{id:"UA"},{id:"UG"},{id:"UM-DQ"},{id:"UM-FQ"},{id:"UM-HQ"},{id:"UM-JQ"},{id:"UM-MQ"},{id:"UM-WQ"},{id:"US"},{id:"UY"},{id:"UZ"},{id:"VA"},{id:"VC"},{id:"VE"},{id:"VG"},{id:"VI"},{id:"VN"},{id:"VU"},{id:"WF"},{id:"WS"},{id:"YE"},{id:"YT"},{id:"ZA"},{id:"ZM"},{id:"ZW"}];

    //Parcours des éléments
    paysTab.forEach(function (el) {
        //Identification de l'élément courant 
        var current = pays.getElementById(el.id);
        
        //Associate a click event-listener to show the feedback
        current.addEventListener("click", function () {  
            titreElement.innerHTML = current.getAttribute("countryName");
        });
    });
}

//Question 8
//Rend les pays sensibles au passage de la souris (changement de couleur et affichage dans un tableau
// du nom, de la capitale et du drapeau du pays)
function imageMondePassageSouris(xmlDocumentUrl, xslDocumentUrl){
    
    // Fichier XSL
    var xsltProcessor = new XSLTProcessor();
    var xslDocument = chargerHttpXML(xslDocumentUrl);
    xsltProcessor.importStylesheet(xslDocument);
    
    //Identification de l'image svg cible
    var imgSVG = document.getElementById("imageMonde");

    //Le DOM du SVG est accessible grâce à la propriété .contentDocument
    var pays = imgSVG.contentDocument;

    //Création d'un tableau avec les IDs des différents éléments du svg
    var paysTab = [{id:"AD"},{id:"AE"},{id:"AF"},{id:"AG"},{id:"AI"},{id:"AL"},{id:"AM"},{id:"AO"},{id:"AR"},{id:"AS"},{id:"AT"},{id:"AU"},{id:"AW"},{id:"AX"},{id:"AZ"},{id:"BA"},{id:"BB"},{id:"BD"},{id:"BE"},{id:"BF"},{id:"BG"},{id:"BH"},{id:"BI"},{id:"BJ"},{id:"BL"},{id:"BN"},{id:"BO"},{id:"BM"},{id:"BQ"},{id:"BR"},{id:"BS"},{id:"BT"},{id:"BV"},{id:"BW"},{id:"BY"},{id:"BZ"},{id:"CA"},{id:"CC"},{id:"CD"},{id:"CF"},{id:"CG"},{id:"CH"},{id:"CI"},{id:"CK"},{id:"CL"},{id:"CM"},{id:"CN"},{id:"CO"},{id:"CR"},{id:"CU"},{id:"CV"},{id:"CW"},{id:"CX"},{id:"CY"},{id:"CZ"},{id:"DE"},{id:"DJ"},{id:"DK"},{id:"DM"},{id:"DO"},{id:"DZ"},{id:"EC"},{id:"EG"},{id:"EE"},{id:"EH"},{id:"ER"},{id:"ES"},{id:"ET"},{id:"FI"},{id:"FJ"},{id:"FK"},{id:"FM"},{id:"FO"},{id:"FR"},{id:"GA"},{id:"GB"},{id:"GE"},{id:"GD"},{id:"GF"},{id:"GG"},{id:"GH"},{id:"GI"},{id:"GL"},{id:"GM"},{id:"GN"},{id:"GO"},{id:"GP"},{id:"GQ"},{id:"GR"},{id:"GS"},{id:"GT"},{id:"GU"},{id:"GW"},{id:"GY"},{id:"HK"},{id:"HM"},{id:"HN"},{id:"HR"},{id:"HT"},{id:"HU"},{id:"ID"},{id:"IE"},{id:"IL"},{id:"IM"},{id:"IN"},{id:"IO"},{id:"IQ"},{id:"IR"},{id:"IS"},{id:"IT"},{id:"JE"},{id:"JM"},{id:"JO"},{id:"JP"},{id:"JU"},{id:"KE"},{id:"KG"},{id:"KH"},{id:"KI"},{id:"KM"},{id:"KN"},{id:"KP"},{id:"KR"},{id:"XK"},{id:"KW"},{id:"KY"},{id:"KZ"},{id:"LA"},{id:"LB"},{id:"LC"},{id:"LI"},{id:"LK"},{id:"LR"},{id:"LS"},{id:"LT"},{id:"LU"},{id:"LV"},{id:"LY"},{id:"MA"},{id:"MC"},{id:"MD"},{id:"MG"},{id:"ME"},{id:"MF"},{id:"MH"},{id:"MK"},{id:"ML"},{id:"MO"},{id:"MM"},{id:"MN"},{id:"MP"},{id:"MQ"},{id:"MR"},{id:"MS"},{id:"MT"},{id:"MU"},{id:"MV"},{id:"MW"},{id:"MX"},{id:"MY"},{id:"MZ"},{id:"NA"},{id:"NC"},{id:"NE"},{id:"NF"},{id:"NG"},{id:"NI"},{id:"NL"},{id:"NO"},{id:"NP"},{id:"NR"},{id:"NU"},{id:"NZ"},{id:"OM"},{id:"PA"},{id:"PE"},{id:"PF"},{id:"PG"},{id:"PH"},{id:"PK"},{id:"PL"},{id:"PM"},{id:"PN"},{id:"PR"},{id:"PS"},{id:"PT"},{id:"PW"},{id:"PY"},{id:"QA"},{id:"RE"},{id:"RO"},{id:"RS"},{id:"RU"},{id:"RW"},{id:"SA"},{id:"SB"},{id:"SC"},{id:"SD"},{id:"SE"},{id:"SG"},{id:"SH"},{id:"SI"},{id:"SJ"},{id:"SK"},{id:"SL"},{id:"SM"},{id:"SN"},{id:"SO"},{id:"SR"},{id:"SS"},{id:"ST"},{id:"SV"},{id:"SX"},{id:"SY"},{id:"SZ"},{id:"TC"},{id:"TD"},{id:"TF"},{id:"TG"},{id:"TH"},{id:"TJ"},{id:"TK"},{id:"TL"},{id:"TM"},{id:"TN"},{id:"TO"},{id:"TR"},{id:"TT"},{id:"TV"},{id:"TW"},{id:"TZ"},{id:"UA"},{id:"UG"},{id:"UM-DQ"},{id:"UM-FQ"},{id:"UM-HQ"},{id:"UM-JQ"},{id:"UM-MQ"},{id:"UM-WQ"},{id:"US"},{id:"UY"},{id:"UZ"},{id:"VA"},{id:"VC"},{id:"VE"},{id:"VG"},{id:"VI"},{id:"VN"},{id:"VU"},{id:"WF"},{id:"WS"},{id:"YE"},{id:"YT"},{id:"ZA"},{id:"ZM"},{id:"ZW"}];

    //Parcours des pays
    paysTab.forEach(function (el) {
        
        var current = pays.getElementById(el.id);

        //Passage de la souris sur un pays
        current.addEventListener("mouseover", function () { 
            current.setAttribute("fill","red");
            current.setAttribute("class","");
            xsltProcessor.setParameter(null, "codeCCA2", el.id);
            var xmlDocument = chargerHttpXML(xmlDocumentUrl);
            var newXmlDocument = xsltProcessor.transformToDocument(xmlDocument);

            // Recherche du parent (dont l'id est "tabPaysSurvol") de l'élément à remplacer dans le document HTML courant
            var elementHtmlParent = window.document.getElementById("tabPaysSurvol");

            // Premier élément fils du parent
            var elementHtmlARemplacer = recupererPremierEnfantDeTypeNode(elementHtmlParent);
            // Premier élément "elementName" du nouveau document (par exemple, "ul", "table"...)
            var elementAInserer = newXmlDocument.getElementsByTagName("table")[0];

            // Remplacement de l'élément
            elementHtmlParent.replaceChild(elementAInserer, elementHtmlARemplacer);
            
        });

        //La souris n'est plus sur le pays
        current.addEventListener("mouseleave", function () {  
            current.setAttribute("fill","#CCCCCC");
            var parent = window.document.getElementById("tabPaysSurvol");
            var elementHtmlARemplacer = recupererPremierEnfantDeTypeNode(parent);
            var newNode = document.createElement("p");
            parent.replaceChild(newNode, elementHtmlARemplacer);
        });
    });
}

// Question 9
// Fonction d'ajout de l'autocomplétion pour le nom du pays
function ajouterAutocompletion(){
    var zoneSaisie = window.document.getElementById("nomPays");

    //Create Attribute
    var att = document.createAttribute("onKeyUp");
    att.value = "autocompletion(this,'countriesTP.xml')";    

    //Add attribute
    zoneSaisie.setAttributeNode(att);
}

// Méthode d'autocomplétion
function autocompletion(nomPaysSaisie,xmlDocumentUrl){

    // Liste HTML de choix pour l'autocomplétion
    var parent = window.document.getElementById("autocompList");

    // Vide la liste de choix (suppression de tous les enfants)
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }

    var xmlDocument = chargerHttpXML(xmlDocumentUrl);

    //Récupération de tous les noms communs des pays
    var paysPourAutocomp = xmlDocument.getElementsByTagName("common");
  
    //Parcours de tous les pays
    for (let pays of paysPourAutocomp) {
        var nomPaysCour = pays.textContent;

        // Si le pays courant possède la chaîne de caractère saisie
        if(nomPaysCour.includes(nomPaysSaisie.value)){
            console.log(nomPaysCour);

            //Création de l'élément
            var optionListe = window.document.createElement("option");
            var att = document.createAttribute("value");
            att.value = nomPaysCour; 
            optionListe.setAttributeNode(att); 

            //Ajout de l'élément à la liste
            parent.appendChild(optionListe);
        }
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//charge le fichier XML se trouvant à l'URL relative donné dans le paramètre et le retourne
function chargerHttpXML(xmlDocumentUrl) {

    var httpAjax;

    httpAjax = window.XMLHttpRequest ?
        new XMLHttpRequest() :
        new ActiveXObject('Microsoft.XMLHTTP');

    if (httpAjax.overrideMimeType) {
        httpAjax.overrideMimeType('text/xml');
    }

    //chargement du fichier XML à l'aide de XMLHttpRequest synchrone (le 3ème paramètre est défini à false)
    httpAjax.open('GET', xmlDocumentUrl, false);
    httpAjax.send();

    return httpAjax.responseXML;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
// Charge le fichier JSON se trouvant à l'URL donnée en paramètre et le retourne
function chargerHttpJSON(jsonDocumentUrl) {

    var httpAjax;

    httpAjax = window.XMLHttpRequest ?
        new XMLHttpRequest() :
        new ActiveXObject('Microsoft.XMLHTTP');

    if (httpAjax.overrideMimeType) {
        httpAjax.overrideMimeType('text/xml');
    }

    // chargement du fichier JSON à l'aide de XMLHttpRequest synchrone (le 3ème paramètre est défini à false)
    httpAjax.open('GET', jsonDocumentUrl, false);
    httpAjax.send();

    var responseData = eval("(" + httpAjax.responseText + ")");

    return responseData;
}


