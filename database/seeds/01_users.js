exports.seed = function (knex) {
  // Deletes ALL existing entries
  const users = [
    { username: "Kolade", password: "grape" },
    { username: "Brown", password: "blueberry" },
    { username: "Green", password: "potato" },
    { username: "Felix", password: "crimson" },
  ];

  // Inserts seed entries
  return knex("users").insert(users);
};
