const baseUrl = 'https://vmesto-project-default-rtdb.firebaseio.com'

const fetchDB = async (url: string, options: object): Promise<any> => {
  const response = await fetch(url, options)
  if (!response.ok) {
    return Promise.reject(`Неверный запрос. Ошибка: ${response.status}`);
  }
  return await response.json();
}

export const getDataFromDB = async () => {
  return await fetchDB(`${baseUrl}/places.json`, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
  })
}

export const putDataToDB = async (place: object) => {
  return await fetchDB(`${baseUrl}/places.json`,{
    method: 'POST',
    body: JSON.stringify(place),
    headers: {'Content-Type': 'application/json'},
  })
}

export const deleteDataToDB = async (place: string) => {
  return await fetchDB(`${baseUrl}/places/${place}.json`,{
    method: 'DELETE',
    headers: {'Content-Type': 'application/json'},
  })
}

export const patchLikesDataToDB = async (place: string, count: number) => {
  return await fetchDB(`${baseUrl}/places/${place}.json`,{
    method: 'PATCH',
    body: JSON.stringify({likesCount: count}),
    headers: {'Content-Type': 'application/json'},
  })
}

export const convertFbObjectToArray = async () => {
  const data = await getDataFromDB();
  if (data !== null) {
    return Object.keys(data).map((key: string) => {
      const place = data[key];
      place.id = key;
      return place;
    });
  } else return [];
};
