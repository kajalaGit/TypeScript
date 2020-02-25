class User {
name:String;
constructor(name:String)
{
this.name=name;

}
getName(){
    return this.name;
}
}
let Mo=new User('Kaouther');
console.log(Mo.getName())