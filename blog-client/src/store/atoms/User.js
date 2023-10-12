import { atom } from "recoil";

const userState = atom({
  key: "userState",
  default: {
    userEmail: null,
    isLoggedIn: false,
  },
});
