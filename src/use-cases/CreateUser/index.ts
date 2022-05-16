import { MailTrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUserRepository";
import { CreateuserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailtrapMailProvider = new MailTrapMailProvider();
const postgresUsersRepository = new PostgresUsersRepository();

const createUserUseCase = new CreateUserUseCase(
  postgresUsersRepository,
  mailtrapMailProvider
);

const createUserController = new CreateuserController(createUserUseCase);

export { createUserUseCase, createUserController };
