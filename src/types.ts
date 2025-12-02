export interface Event {
  id: number;
  time: string;
  topic: string;
  speakers: string[];
  location: string;
}

export interface Portfolio {
  name: string;
  occupation: string;
  details: string;
  contact: string;
}

export interface Expo {
  id: number;
  name: string;
  description: string;
}

export interface ConductValue {
  name: string;
  description: string;
  icon: string;
}

export interface Conduct {
  title: string;
  introduction: string;
  whatWeWantFromYou: {
    title: string;
    items: string[];
  };
  valuesTitle: string;
  values: ConductValue[];
  closing: string;
}
