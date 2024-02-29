const BASE_URL = "http://127.0.0.1:5500/data/";
export async function getData(endPoint) {
  try {
    const response = await fetch(`${BASE_URL}${endPoint}.json`);
    const data = await response.json();

    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
}

