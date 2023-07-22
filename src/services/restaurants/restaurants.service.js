import { camelCase } from "react-native-svg/lib/typescript/xml";
import { mocks } from "./mock";
import camelize from "camelize";
const restaurantRequest = (location = "51.219448,4.402464") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

const restaurantTransform = (resulter) => {
  const newResult = camelize(result);
  //   newResult.someExtraProperty = 'new'
  return newResult;
};
restaurantRequest()
  .then(restaurantTransform)
  .then((transformedResponse) => {
    console.log(transformedResponse);
  })
  .catch((err) => {
    console.log(error);
  });
