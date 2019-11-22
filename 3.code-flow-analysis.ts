// 3. Code flow analysis

const users = [{ name: "Jon" }, { name: "Daenerys" }, { name: "Tyrion" }];

const jon = users.find(u => u.name === "jon");

if (jon) {
  jon.name;
} else {
  jon.name; // we KNOW that this is undefined
}
