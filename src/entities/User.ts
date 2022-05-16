import { v4 as uuid } from "uuid";

export class User {
  public readonly id: string;

  public name: string;
  public email: string;
  public password: string;

  //Omit dont require the id for create
  constructor(props: Omit<User, "id">, id?: string) {
    //take all props(id?,name,email,password) and put on this
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}
