export class Recipe{
   public name:string; 
   public description:String;
   public imagePath:String;

   constructor(name:string,description:string,imagePath:string) {
    this.name=name;
    this.description=description;
    this.imagePath=imagePath;    
   }
}