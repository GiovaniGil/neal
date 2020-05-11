/* eslint-disable */
import { Server, Model } from 'miragejs';

export function makeServer({ environment = 'development' } = {}) {
  const server = new Server({
    environment,
    models: {
      item: Model,
    },
    routes() {
      this.namespace = 'api';

      this.get('/items', () => [
        {
          id: 1,
          name: 'Big Mac',
          image: 'https://neal.fun/spend/minified/bigmac.jpg',
          price: 2,
          quantity: 0,
        },
        {
          id: 2,
          name: 'Big Mac',
          image: 'https://neal.fun/spend/minified/bigmac.jpg',
          price: 2,
          quantity: 0,
        },
        {
          id: 3,
          name: 'Big Mac',
          image: 'https://neal.fun/spend/minified/bigmac.jpg',
          price: 2,
          quantity: 0,
        },
        {
          id: 4,
          name: 'Big Mac',
          image: 'https://neal.fun/spend/minified/bigmac.jpg',
          price: 2,
          quantity: 0,
        },
        {
          id: 5,
          name: 'Big Mac',
          image: 'https://neal.fun/spend/minified/bigmac.jpg',
          price: 2,
          quantity: 0,
        },
        {
          id: 6,
          name: 'Big Mac',
          image: 'https://neal.fun/spend/minified/bigmac.jpg',
          price: 2,
          quantity: 0,
        },
        {
          id: 7,
          name: 'Big Mac',
          image: 'https://neal.fun/spend/minified/bigmac.jpg',
          price: 2,
          quantity: 0,
        },
        {
          id: 8,
          name: 'Big Mac',
          image: 'https://neal.fun/spend/minified/bigmac.jpg',
          price: 2,
          quantity: 0,
        },
      ]);
    },
  });
  return server;
}