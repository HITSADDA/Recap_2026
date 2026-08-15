// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// --------------------------- Introduction ---------------------------------------------------------
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

type UserType = {
  username: string;
  age: number;
};

type UserKeys = {
  [key in keyof UserType]: string;
};

const userKeys: UserKeys = {
  age: "age",
  username: "username",
};

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// --------------------------- One Case -------------------------------------------------------------
// let make a case with events
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

type Events = {
  add: string;
  remove: string;
  delete: string;
};

// STEP 1:-

type OnEvents = {
  onAdd: () => void;
  onRemove: () => void;
  onDelete: () => void;
};

const eventsObject: OnEvents = {
  onAdd: () => {},
  onRemove: () => {},
  onDelete: () => {},
};

// STEP 2:-

type EventsKeys = keyof Events;

type OnEvents_Two = {
  [key in EventsKeys]: () => void;
};

const eventsObject_Two: OnEvents_Two = {
  add: () => {},
  delete: () => {},
  remove: () => {},
};

// STEP 3:-

type On<T> = {
  [key in keyof T]: () => void;
};

const eventsObject_Three: On<Events> = {
  add: () => {},
  delete: () => {},
  remove: () => {},
};

// STEP 4:-
type OnEve<T> = {
  [key in keyof T as key extends string
    ? `on${Capitalize<key>}`
    : never]: () => void;
};

const eventsObject_Four: OnEve<Events> = {
  onAdd: () => {},
  onDelete: () => {},
  onRemove: () => {},
};
