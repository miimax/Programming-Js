import { faker, Faker } from "@faker-js/faker"

class DataHelper {
    createRandomData() {
        return {
            "firstName": faker.name.firstName(),
            "lastName": faker.name.lastName(),
            "emailAddress": faker.internet.email(),
            "password": faker.internet.password(20, true, "/[a-zA-Z]/", "Hello@")
        }
    }
}
export default new DataHelper()