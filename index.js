//  f(x, y) = x^2 - 2y
//  dx = 0,1
//  y0 = 1
//  x0 = 0
//  y[i+1] = y[i] + f(x[i], y[i]) * dx
//  отрезок [0;1]

export const f = (x, y) => Math.pow(x, 2) - (2 * y);

export const eulerMethod = () => {
  const dx = 0.1;
  let y = 1;
  let x = 0;
  const max_X = 1;
  const data = [[x, y]];
  for (let i = 0; data[i][0] < max_X; i += 1) {
    x = (data[i][0] + dx);
    if (x > 1) {
      let new_dx = dx - (x - 1);
      x = 1;
      y = data[i][1] + f(data[i][0], data[i][1]) * new_dx;
      data.push([x, y]);
      break;
    }
    y = data[i][1] + f(data[i][0], data[i][1]) * dx;
    data.push([x, y]);
  };
  console.log(data);
  return data;
};

eulerMethod();