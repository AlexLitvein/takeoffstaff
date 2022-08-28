import { Dispatch, SetStateAction } from "react";

export function setInputValue(
  tag: string,
  setCb: Dispatch<SetStateAction<{}>>
) {
  return (value: string) => {
    console.log(`tag: ${tag}, value: ${value}`);
    setCb((prev) => ({ ...prev, ...{ [tag]: value } }));
  };
}

export function setInputEventValue(
  tag: string,
  setCb: Dispatch<SetStateAction<{}>>
) {
  return (value: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(`tag: ${tag}, value: ${value.target.value}`);
    setCb((prev) => ({ ...prev, ...{ [tag]: value.target.value } }));
  };
}

export function delayStateSet(
  text: string,
  setFu: Dispatch<SetStateAction<string>>
) {
  setFu(text);
  setTimeout(() => {
    setFu("");
  }, 2000);
}
