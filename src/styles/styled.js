import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    name: String;

    size: {
      radius: string;
    };
    color: {
      text: {
        body: string;
        disabled: string;
        placeholder: string;
        primary: string;
      };
      button: {
        primary: string;
        hover: string;
        focus: string;
        disabled: string;
      };
    };
  }
}
