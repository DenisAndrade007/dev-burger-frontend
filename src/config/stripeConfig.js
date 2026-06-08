import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51Tc8R82NzeNWmsb5XrdhqzQOaxKpe7g1S8LJKAwjYfQuCVgBfViXP2fEvZ7rWOb0QXKjs4BCzbukdbAcKq8G2Q9B00rTggWdXo');

export default stripePromise;