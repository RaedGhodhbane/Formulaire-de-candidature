export class Candidat {
    name : string;
    lastname : string;
    email : string;
    password : string;
    role : string;


    constructor(object:any) {
        this.name = object['name'];
        this.lastname = object['lastname'];
        this.email = object['email'];
        this.password = object['password'];
        this.role = object['role'];

    }
}