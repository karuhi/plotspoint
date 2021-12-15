let margin = 5;
let circleSize = 8;
let plots = [];

window.onload = function () {
  const queryStr = getUrlQueries();
  console.log(JSON.parse(queryStr.plots));
  plots = JSON.parse(queryStr.plots);
};

function getUrlQueries() {
  var queryStr = window.location.search.slice(1); // 文頭?を除外
  queries = {};

  // クエリがない場合は空のオブジェクトを返す
  if (!queryStr) {
    return queries;
  }

  // クエリ文字列を & で分割して処理
  queryStr.split("&").forEach(function (queryStr) {
    // = で分割してkey,valueをオブジェクトに格納
    var queryArr = queryStr.split("=");
    queries[queryArr[0]] = queryArr[1];
  });

  return queries;
}

function setup() {
  createCanvas(400 + margin * 2, 240 + margin * 2);
}

function draw() {
  background(255);
  // 机
  fill(230, 230, 230);
  rect(0 + margin, 0 + margin, 200, 20);
  rect(200 + margin, 0 + margin, 200, 20);
  rect(0 + margin, 220 + margin, 200, 20);
  rect(200 + margin, 220 + margin, 200, 20);

  // センサーの場所
  fill(255, 165, 0);
  ellipse(0 + margin, 20 + margin, circleSize);
  ellipse(200 + margin, 20 + margin, circleSize);
  ellipse(0 + margin, 220 + margin, circleSize);

  // URLで渡されたPlotを描画する
  // ?plots=[[x,y],[x,y]...]
  plots.forEach((point) => {
    plotPoint(point[0], point[1]);
  });
}

function plotPoint(x, y) {
  fill(0, 255, 0);
  ellipse(x + margin, y + margin + 20, circleSize);
}
