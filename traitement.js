var lesObjets = document.getElementsByTagName('*');
var lesMots = [/baleine/gi, /thon/gi, /camion/gi, /train/gi, /maman/gi, /sumo/gi,
	/big mom/gi, /vache/gi, /tracteur/gi, /paquebot/gi, /patate/gi, /notre-dame/gi];

for(var i = 0; i < lesObjets.length; i++){
		var unObjet = lesObjets[i];
		for(var j = 0; j < unObjet.childNodes.length; j++){
			var unNode =  unObjet.childNodes[j];
			// type 3 == texte
			if(unNode.nodeType === 3){
				var unTexte = unNode.nodeValue;
				for(l = 0; l < lesMots.length; l++){
					var texteRemplacement = unTexte.replace(lesMots[l], 'grosse mere');
					if(texteRemplacement !== unTexte){
							unObjet.replaceChild(document.createTextNode(texteRemplacement), unNode);
					}
				}
			}	
		}
	}

	