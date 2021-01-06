import './scss/main.scss';

const svgList = document.getElementById('svg-list');
const svgTemplateCircle = document.getElementById('svg-circle');
const circles = [];
for (let i = 0; i < 5; i++) {
  circles.push(document.importNode(svgTemplateCircle.content, true));
}

console.log(circles);
circles.forEach(circleTemplate => {
  svgList.append(circleTemplate);
});
