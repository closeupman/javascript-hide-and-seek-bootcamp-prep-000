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

  for(let i=0; i < rankedLists.length; i++) {
    let children = rankedLists[i].children;

    for (let j=0; j < children.length; j++) {
      children[j].innerHTML = parseInt(children[i].innerHTML)+n;
    }
  }
}
