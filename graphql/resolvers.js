const puppy = {
  name: "pug",
  age: 3,
  gender: "male",
  owner: "rontend"
};

const people = [
  {
    id: 1,
    name: "donggyu",
    age: 18,
    gender: "male"
  },
  {
    id: 2,
    name: "suji",
    age: 28,
    gender: "female"
  },
  {
    id: 3,
    name: "albert",
    age: 28,
    gender: "male"
  },
  {
    id: 4,
    name: "john",
    age: 18,
    gender: "male"
  },
  {
    id: 5,
    name: "suyoung",
    age: 19,
    gender: "female"
  },
  {
    id: 6,
    name: "gil",
    age: 23,
    gender: "male"
  },
  {
    id: 7,
    name: "minjun",
    age: 22,
    gender: "male"
  },
  {
    id: 8,
    name: "sua",
    age: 23,
    gender: "female"
  }
];

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || "world"}`,
    puppy: () => puppy,
    people: () => people,
    person: (_, { id }) => getById(id)
  }
};

const getById = id => {
  const filteredPerson = people.filter(person => id === person.id);
  return filteredPerson[0];
};

module.exports = resolvers;
