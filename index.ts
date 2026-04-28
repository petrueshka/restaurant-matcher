import restaurants from './restaurants';

const dollarSigns = '$$';
const deliveryTimeMax = 90;
const maxDistance = 10;
let result;
let hour = new Date().getHours();

const priceBracket = dollarSigns.length;

const filteredRestaurants = restaurants.filter((restaurant) => {
  if (restaurant.priceBracket > priceBracket) {
    return false;
  }
  if (+restaurant.openHour <= hour && +restaurant.closeHour > hour) {
    return false;
  }
  if (restaurant.deliveryTimeMinutes > deliveryTimeMax) {
    return false;
  }

  if (+restaurant.distance > maxDistance) {
    return false;
  }

  return restaurant;
});

if (filteredRestaurants.length === 0) {
  result = 'There are no restaurants available right now.';
} else {
  result = `We found ${filteredRestaurants.length} restaurants, open at ${hour} the first is ${filteredRestaurants[0].name}.`;
}

console.log(result);
