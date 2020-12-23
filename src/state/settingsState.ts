import { State } from "@simple-html/core";

type formDetails = { firstName: string; lastLame: string, loggedin: boolean };

export const formState = new State<formDetails>(
  "FORM_STATE",
  {} as formDetails
);
