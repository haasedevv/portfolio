import { DDDs } from "~/enums";

export function validateEmail(email: string) {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
}

export function validateTelephone(telephone: string) {
  const replacedValue = telephone.replace(/[()-\s]/g, "");
  const DDD = replacedValue.substring(0, 2);
  const validCode = DDDs.find((item) => item.ddd === DDD);

  if (!validCode) return false;

  const unformattedTelephone = replacedValue.substring(2);

  return unformattedTelephone.length === 8 || (unformattedTelephone[0] === "9" && unformattedTelephone.length === 9);
}
