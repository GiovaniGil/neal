import Vue from 'vue';

export default class ItemsService {
  lista() {
    return Vue.http.get('/api/items')
      .then(response => response.data, (err) => {
        console.log(err);
      });
  }
}
