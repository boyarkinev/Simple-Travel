// interface IResponse {
//   body: any;
//   bodyUsed: boolean;
//   headers: any;
//   ok: boolean;
//   redirected: boolean;
//   status: number;
//   statusText: string;
//   type: string;
//   url: string;
//   json(): any
// }

const dbURL = 'https://vmesto-project-default-rtdb.firebaseio.com/places.json'

const fetchDB = async (options: object): Promise<any> => {
  const response = await fetch(dbURL, options)
  if (!response.ok) {
    return Promise.reject(`Неверный запрос. Ошибка: ${response.status}`);
  }
  return await response.json();
}

export const getDataFromDB = async () => {
  return await fetchDB({
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
  })
}

export const putDataToDB = async (place: object) => {
  return await fetchDB({
    method: 'POST',
    body: JSON.stringify(place),
    headers: {'Content-Type': 'application/json'},
  })
}

export const deleteDataToDB = async (data: object) => {
  return await fetchDB({
    method: 'DELETE',
    body: JSON.stringify(data),
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
