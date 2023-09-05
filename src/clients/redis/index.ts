// Import the dotenv package and load the .env file
require('dotenv').config();

// Then access the environment variable like this
const redisURL = process.env.REDIS_URL;

// Check if the environment variable is defined
if (!redisURL) {
  throw new Error('REDIS_URL environment variable is not defined.');
}

// Now you can use redisURL to create your Redis client
import Redis from 'ioredis';

export const redisClient = new Redis(redisURL);