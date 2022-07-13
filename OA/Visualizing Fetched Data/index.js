/**
 * Build a histogram chart from a list of randomly-generated numbers
 * https://www.reddit.com/r/Frontend/comments/jtj9e5/how_to_prepare_for_a_front_end_interview/
 */

// Get API response in an array format
const API_URL =
  'https://www.random.org/integers/?num=200&min=1&max=10&col=1&base=10&format=plain&rnd=new';

const fetchData = async () => {
  try {
    const request = await fetch(API_URL);
    const response = await request.text();
    const numArr = response.trim().split('\n').map(Number);

    console.log(numArr);
    return numArr;
  } catch (error) {
    console.log(error);
  }
};

// Create map with number as key and its recurrence as value
const createMap = async () => {
  try {
    const dataArr = await fetchData();

    const map = {};

    dataArr.forEach((num) => {
      if (!map[num]) {
        map[num] = 1;
      } else {
        map[num]++;
      }
    });

    console.log(map);
    return map;
  } catch (error) {
    console.log(error);
  }
};

// Create Graph using createMap
const createGraph = async () => {
  try {
    const dataMap = await createMap();

    const histogramEl = document.querySelector('.histogram');
    const keys = Object.keys(dataMap);
    const maxY = Math.max(...Object.values(dataMap));
    const minX = Math.min(...Object.keys(dataMap));
    const maxX = Math.max(...Object.keys(dataMap));

    // create columns
    for (x of keys) {
      const frequency = dataMap[x] || 0;
      const heightPercentage = (frequency / maxY) * 100;

      const columnEl = document.createElement('div');
      columnEl.className = 'column';
      columnEl.style.height = `${heightPercentage}%`;
      histogramEl.appendChild(columnEl);

      // create column's x-label
      const xLabelEl = document.createElement('figure');
      xLabelEl.className = 'x-label';
      xLabelEl.innerHTML = x;
      columnEl.appendChild(xLabelEl);
    }

    // create y-label
    for (let y = 0; y < maxY; y += 10) {
      const yLabelEl = document.createElement('figure');
      const yLabelHeight = (y / maxY) * 100;
      yLabelEl.className = 'y-label';
      yLabelEl.innerHTML = y;
      yLabelEl.style.bottom = `${yLabelHeight}%`;
      histogramEl.appendChild(yLabelEl);
    }

    console.log(keys, maxY, minX, maxX);
  } catch (error) {}
};

// Init
createGraph();
