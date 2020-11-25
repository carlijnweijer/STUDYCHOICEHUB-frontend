//src/store/types

enum Role {
  scholar,
  student,
}

enum Level {
  havo,
  vwo,
  hbo,
  wo,
}

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
  level: Level;
};
