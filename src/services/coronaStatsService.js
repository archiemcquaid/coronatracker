import HTTPService from './HTTPService';

const getStats = () => {
    return HTTPService.get('/stats');
};

const getStatsMock = () => {
    return new Promise((resolve) => {
        resolve({
            stats: buildRandomCountry('stats'),
            countries: generateMockData(20)
        })
    })
};

const generateMockData = (number) => {
    let result = [];
    for(let i = 0; i < number; i++) {
        result.push(buildRandomCountry(i));
    }
    return result;
};

const generateRandomNumber = (upperLimit) => {
    return Math.floor((Math.random() * upperLimit) + 1);
};

const buildRandomCountry = (suffix) => {
  return {
      country: `Test country ${suffix}`,
      totalCases: generateRandomNumber(10000),
      newToday: generateRandomNumber(100),
      deaths: generateRandomNumber(10000),
      newDeathsToday: generateRandomNumber(100),
      recovered: generateRandomNumber(1000),
      active: generateRandomNumber(1000)
  }
};

export default {
    getStats,
    getStatsMock
}