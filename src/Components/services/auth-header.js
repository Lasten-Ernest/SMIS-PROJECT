
//function for allowing users to access authenticated headers upon receiving a token
//otherwise cors will block users to access the headers
export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.accessToken) {
      return { 'x-access-token':  user.accessToken };
    } else {
      return {};
    }
  }