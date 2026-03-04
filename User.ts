export class User{

    username: string = "Jacob";
    password: string = "JacobPassword";

}

const user = new User();
user.password = "passwordHacked";
console.log(user.password);