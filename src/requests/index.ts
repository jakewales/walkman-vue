import fetch from '@/requests/instance';

const Auth = {
  async login(data: object) {
    return await fetch('/login', 'POST', data);
  },
  async signup(data: object) {
    return await fetch('/signup', 'POST', data);
  },
};

export default Auth;
