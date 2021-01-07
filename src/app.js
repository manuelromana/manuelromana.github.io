import './scss/main.scss';

const svgList = document.getElementById('svg-list');
const svgTemplateCircle = document.getElementById('svg-circle');
const circles = [];
for (let i = 0; i < 5; i++) {
  circles.push(document.importNode(svgTemplateCircle.content, true));
}

const circlesHorizontalWrapper = document.createElement('div');
circles.forEach(circleTemplate => {
  circlesHorizontalWrapper.append(circleTemplate);
});

for (let i = 0; i < 5; i++) {
  let line = circlesHorizontalWrapper.cloneNode(true);
  svgList.append(line);
}
