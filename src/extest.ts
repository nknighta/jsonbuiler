import { APIBuilder } from ".";

const extendable = new APIBuilder();

extendable.addProperty("name", "John Doe");
extendable.addProperty("age", 30);
extendable.addProperty("isMarried", false);

extendable.addProperty("address", {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001",
});
