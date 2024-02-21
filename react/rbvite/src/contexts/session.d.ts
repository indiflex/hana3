type LoginUser = { id: number; name: string };
type Cart = { id: number; name: string; price: number };
type Session = {
  loginUser: LoginUser | null;
  cart: Cart[];
};
