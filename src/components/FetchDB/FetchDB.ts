export class FetchDB {

   async fetchDB (options: object): Promise<any> {
    const response = await fetch('https://vmesto-project-default-rtdb.firebaseio.com/places.json', options)
    if (!response.ok) {
      return Promise.reject(`Неверный запрос. Ошибка: ${response.status}`);
    }
     const data = await response.json();
     if (data !== null) {
       return Object.keys(data).map((key: string) => {
         const place = data[key];
         place.id = key;
         return place;
       });
     } else return [];
  }

  async getDataFromDB () {
    return await this.fetchDB({
      method: 'get',
      headers: { 'Content-Type': 'application/json' },
    })
  }

  async putDataToDB (place: object) {
    return await this.fetchDB({
      method: 'post',
      body: JSON.stringify(place),
      headers: { 'Content-Type': 'application/json' },
    })
  }
}

export const requestData = new FetchDB();