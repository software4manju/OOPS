class Phone{
     private name: string ="";
     private price: number = 0;
     private color: string = "";
    constructor(name: string, price:number, color:string){
      this.setName(name);
      this.color = color;
       this.setPrice(price);
        
     }
   
    public getDetails(){
        return "I am a " + this.name + " and I cost " + this.price + " and I am " + this.color;
    }

    setName(name: string){
        this.name = name;
}
     getName(){
        return this.name;
     }

     
    setPrice(price: number){
        if(price >0){

        this.price = price;
}else{
    console.log("Price should be greater than 0");
}
}
     getPrice(){
        return this.price;
     }
    }
var iPhone = new Phone("Iphone 14 Pro Max", 120000, "Red");
var samsung = new Phone("Samsung S23 Ultra", 90000, "Black");
//Add Iphone details



//iPhone.price = 120000;
//samsung.price = 90000;

samsung.getDetails();
iPhone.getDetails()


console.log(samsung.getDetails());
console.log(iPhone.getDetails());

