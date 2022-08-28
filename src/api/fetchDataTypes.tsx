export interface IUserLogin {
  name: string;
  password: string;
}

export const userLoginPropertyNames = new Proxy<IUserLogin>({} as IUserLogin, {
  get: function (proxy, name) {
    return name;
  },
});

export interface IContactBase {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: number;
      lng: number;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface IContact
  extends Pick<IContactBase, "id" | "name" | "username" | "email"> {}

export const contactPropertyNames = new Proxy<IContact>({} as IContact, {
  get: function (proxy, name) {
    return name;
  },
});
