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
