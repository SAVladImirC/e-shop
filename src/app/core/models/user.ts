export class User {
    id: number;
    name: string;
    surname: string;
    email: string;
    password: string;
    address: string;

    constructor($name: string, $surname: string, $email: string, $password: string, $address: string) {
        this.id = Math.random() * 100;
        this.name = $name;
        this.surname = $surname;
        this.email = $email;
        this.password = $password;
        this.address = $address;
    }
}