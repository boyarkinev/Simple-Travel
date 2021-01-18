const placesData = {
  baseURL: 'https://vmesto-project-default-rtdb.firebaseio.com',
};

export const placesFetchData = async () => {
  const response = await fetch(`${placesData.baseURL}/places.json`, {
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
  });
  if (!response.ok) {
    return Promise.reject(`Неверный запрос. Ошибка: ${response.status}`);
  }
  return await response.json();
};