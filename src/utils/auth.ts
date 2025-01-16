export const saveUser = (userData: any) => {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  users.push(userData);
  localStorage.setItem('users', JSON.stringify(users));
};

export const validateCredentials = (name: string, password: string) => {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  return users.find((user: any) => user.name === name && user.password === password);
};