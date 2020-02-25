interface IEmployee { 
    nom:string; 
    prenom:string;
    dateNais:Date;
    tel:string;
    poste:String;
    adresee:String;
    getage: ()=>number; 
    getposte: ()=>String; 



 } 
 
 
 
  class Employee implements IEmployee {
    nom:string; 
    prenom:string;
    dateNais:Date;
    tel:string;
    poste:String;
    adresse:String;

    constructor(nom:string,prenom:string,dateNais:Date,tel:string,poste:string)
    {
        this.nom=nom;
        this.prenom=prenom;
        this.dateNais=dateNais;
        this.tel=tel;
        this.poste=poste;

    }
    
    getage() :number {return(new Date().getFullYear()-this.dateNais.getFullYear())}
    getposte() :String {return(this.poste)}
    

  }

let Mo = new Employee();
console.log(Mo.getage());
console.log(Mo.getposte());

  
 
 