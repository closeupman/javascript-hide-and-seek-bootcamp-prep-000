function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  // put out .target from #nested
  // first find #nested
  // then .target
  let temp = document.querySelector('#nested');
  temp = temp.querySelector('.target');
  return temp;
}

function deepestChild() {
  let temp = document.getElementById('grand-node');
  let tempChildren = temp.children[0];
  while (tempChildren) {
    temp = tempChildren;
    tempChildren = temp.children[0];
  }
  return temp;

}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list');
  const firstList = rankedLists[0];
  const secondList = rankedLists[1];
  let children = firstList.children;
  let start = 1
  for(let i=0;i<children.length;i++) {
    children[i].innerHTML = parseInt(children[i].innerHTML)+n;
  }

  children = secondList.children;
  start = 12
  for(let i=0;i<children.length;i++) {
    children[i].innerHTML = parseInt(children[i].innerHTML)+n;
  }

}
