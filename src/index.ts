import "reflect-metadata";
import { Container, inject } from '@adonisjs/fold'

async function main() {
    class Database {}

    @inject()
    class UserService {
      constructor(public db: Database) {}
    }


  // console.log(UserService.containerInjections)

  const container = new Container()
  const service = await container.make(UserService)

  console.log(service instanceof UserService)
}

main()
