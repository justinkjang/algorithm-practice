// retrieve list of numbers api
// plot histogram showing frequency of each number case
// have x, y axis

const API_URL =
  'https://www.random.org/integers/?num=200&min=1&max=10&col=1&base=10&format=plain&rnd=new';

// get fetch data into arr
const fetchData = async () => {
  const request = await fetch(API_URL);
  const response = await request.text();

  const dataArr = response.trim().split('\n').map(Number);

  return dataArr;
};

// create hashmap of numArr
const createMap = async () => {
  const dataArr = await fetchData();
  const map = {};

  for (let num of dataArr) {
    if (!map[num]) {
      map[num] = 1;
    } else {
      map[num]++;
    }
  }

  return map;
};

// create graph based on hased data
const createGraph = async () => {
  const map = await createMap();

  const minX = Math.min(...Object.keys(map));
  const maxX = Math.max(...Object.keys(map));
  const maxY = Math.max(...Object.values(map));
  const keys = Object.keys(map);

  const graphEl = document.querySelector('.graph');

  for (let xVal of keys) {
    const columnEl = document.createElement('div');
    columnEl.className = 'column';
    columnEl.style.height = `${(map[xVal] / maxY) * 100}%`;

    const xAxis = document.createElement('span');
    xAxis.className = 'x-axis';
    xAxis.innerHTML = xVal;
    columnEl.appendChild(xAxis);

    graphEl.appendChild(columnEl);
  }

  for (let yVal = 0; yVal < maxY; yVal += 10) {
    const yAxis = document.createElement('span');
    yAxis.innerHTML = yVal;
    yAxis.className = 'y-axis';
    yAxis.style.bottom = `${(yVal / maxY) * 100}%`;

    graphEl.appendChild(yAxis);
  }
};

// Init
createGraph();
