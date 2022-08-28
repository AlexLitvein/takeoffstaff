export interface IValidationFunc {
  (text: string): [string, string];
}

export const rules = {
  alldValid: ((text: string) => {
    return [text, ""];
  }) as IValidationFunc,

  passwordValid: ((text: string) => {
    const regex = /^\d{3,12}$/;
    return [
      text,
      regex.test(text)
        ? ""
        : "Поле должно содержать только цифры и быть размером от 3 до 12 символов",
    ];
  }) as IValidationFunc,

  emailValid: ((text: string) => {
    const regex =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    return [text, regex.test(text) ? "" : "Недопустимый формат"];
  }) as IValidationFunc,

  userNameValid: ((text: string) => {
    const regex = /^[а-яА-Яa-zA-Z0-9_-\s]{3,16}$/;
    return [
      text,
      regex.test(text)
        ? ""
        : "От 3 до 16 буквенных символов, подчеркивание, тире",
    ];
  }) as IValidationFunc,

  numberValid: ((text: string) => {
    const regex = /^[0-9.,]{1,}$/;
    return [text, regex.test(text) ? "" : "Некорректное значение"];
  }) as IValidationFunc,

  phoneValid: ((text: string) => {
    let test = /^\+\d{1}\(\d{3}\) \d{3}-\d{2}-\d{2}$/;
    return [text, test.test(text) ? "" : "+X(XXX) XXX-XX-XX"];
  }) as IValidationFunc,
};
