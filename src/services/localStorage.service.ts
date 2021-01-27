export const setDataToLocalStorage = (name: string, job: string) => {
  localStorage.setItem('user', JSON.stringify({name, job}));
};

export const getDataFromLocalStorage = () => {
  const json: any = localStorage.getItem('user');
  if (json !== null) {
    return JSON.parse(json);
  }
  else return {name: '', job: ''}
};