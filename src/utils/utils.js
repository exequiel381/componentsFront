import * as moment from "moment";

export const orderMinToMax = (
  arrayObjets,
  columnKey,
  auxColumn,
  correctColumn
) => {
  //Recibe el array a ordenar y la columna por la cual se va a ordenar, los ordena de menor a mayor

  if (auxColumn && correctColumn) {
    columnKey = correctColumn;
  }

  let orderData = [];
  if (areDates(arrayObjets[0][columnKey])) {
    orderData = arrayObjets.sort(
      (a, b) =>
        moment(a[columnKey], "DD-MM-YYYY").unix() -
        moment(b[columnKey], "DD-MM-YYYY").unix()
    );
  } else {
    orderData = arrayObjets.sort((o1, o2) => {
      if (o1[columnKey] < o2[columnKey]) {
        return -1;
      } else if (o1[columnKey] > o2[columnKey]) {
        return 1;
      } else return 0;
    });
  }
  return orderData;
};

export const orderMaxToMin = (
  arrayObjets,
  columnKey,
  auxColumn,
  correctColumn
) => {
  //Recibe el array a ordenar y la columna por la cual se va a ordenar, los ordena de mayor a menor
  if (auxColumn && correctColumn) {
    columnKey = correctColumn;
  }
  let orderData = [];
  if (areDates(arrayObjets[0][columnKey])) {
    orderData = arrayObjets.sort(
      (a, b) =>
        moment(b[columnKey], "DD-MM-YYYY").unix() -
        moment(a[columnKey], "DD-MM-YYYY").unix()
    );
  } else {
    orderData = arrayObjets.sort((o1, o2) => {
      if (o1[columnKey] < o2[columnKey]) {
        return 1;
      } else if (o1[columnKey] > o2[columnKey]) {
        return -1;
      } else return 0;
    });
  }

  return orderData;
};

export const areDates = (firstItem) => {
  if (!firstItem) return false;
  let result = moment(
    (firstItem + "").substring(0, 10),
    "DD-MM-YYYY",
    true
  ).isValid();
  return result;
};

export const showTime = () => {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let session = "AM";

  if (h === 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  let time = `${h} : ${m} : ${s} : ${session}`;

  if (
    document.getElementById("clockDisplay") &&
    document.getElementById("clockDisplay")
  ) {
    document.getElementById("clockDisplay").innerText = time;
    document.getElementById("clockDisplay").textContent = time;
  }

  setTimeout(showTime, 1000);
};
