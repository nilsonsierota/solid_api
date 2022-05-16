import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUserRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider
  ) {}

  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExist = await this.usersRepository.findByEmail(data.email);

    if (userAlreadyExist) {
      throw new Error("User already exists.");
    }

    const user = new User(data);

    await this.usersRepository.save(user);

    await this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email,
      },
      from: {
        name: "Equipe app",
        email: "equipe@app.com",
      },
      subject: "Seja bem vindo a Plataforma",
      body: "<p>Você já pode fazer login em nossa Plataforma</p>",
    });
  }
}
