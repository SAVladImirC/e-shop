import { User } from "./user";

export class Cart{
    id: number;
    user: User;

	constructor($user: User) {
		this.id = Math.random() * 100;
		this.user = $user;
	}
}