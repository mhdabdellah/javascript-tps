function AffichageItems(){
    var myArray = ['Rafael','Mathilde','Ahmed','Jerome','Guillaume'];//la length est de 5
    for (var i=0, c = myArray.length; i < c; i++){//on cree la variable c pour aue la condition ne soit trop laurd en caracteres 
        alert(myArray[i]);// on affiche chaque item ,l'un apres l'autre ,jusqu'a la longueure totel du tableau      
    }

}

function separerChainToTableElements(){
    // pour separer une chaine de caracter en tableau avec la fonction split() 
    var cousinsString = 'Jerome Guillaume Paul', cousinsArray = cousinsString.split(''); //Avec les espaces ,on a trois items 
    alert(cousinsString);
    alert(cousinsArray); 
}

function regroupeTableElementsInChain(){
    var cousinsArray1 = prompt('Entrer la que vous voullez convertir en tableau');
    alert(cousinsArray1);
    // pour faire l'iverse regrouper les element d'un tableau dans une chaine de caractere avec la fonction join()
    var cousinsString_2 = cousinsArray1.join('-');
    alert(cousinsString_2);
}

function ObjetLitteraux(){
    // les objets litteraux 
    var family = {
        self : 'Rafael',
        sister : 'Mathilde',
        brother : 'Ahmed',
        cousin_1 : 'Jerome',
        cousin_2 : 'Guillaume'
    };
    var id = 'sister';
    alert(family[id]);//affiche : Mothilde
    alert(family.brother);//affiche : Ahmed
    alert(family['self']);//Affiche : Rafael
    family['uncle'] = 'Pauline'; // on ajouter une donnees, avec un identifiant.
    family.aunt = 'Karim';// on ajouter aussi de cette maniere.
    alert(family.uncle);
    for (var id in family){// on stocke L'indentifiant dans << id >> pour parcourir L'objet << family >>
        alert(family[id]);
    }
}

function Prenoms(){
    var Prenoms = [],
    Prenom ;
    while(Prenom=prompt('Entrer Votre Prenom S\'il Vous Plait')){
         Prenoms.push(Prenom);
    }
    // Prenom1 = prompt('Entrer Votre Prenom1 S\'il Vous Plait');
    // Prenoms.push(Prenom1);
    // Prenom2 = prompt('Entrer Votre Prenom2 S\'il Vous Plait');
    // Prenoms.push(Prenom2);
    // Prenom3 = prompt('Entrer Votre Prenom3 S\'il Vous Plait');
    // Prenoms.push(Prenom3);
    // Prenom4 = prompt('Entrer Votre Prenom4 S\'il Vous Plait');
    // Prenoms.push(Prenom4);
    if(Prenoms.length != 0){
        // for (var i=0; i < Prenoms.length; i++){
        //     alert(Prenoms[i]);    
        // }
        var tab = Prenoms.join(' ');
        alert(tab);
    }else{
        alert('le tableau est vide !');
    }
    
}