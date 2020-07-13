const durationInput = document.querySelector('#duration');
const startbtn = document.querySelector('#start');
const pausebtn = document.querySelector('#pause');
const timer = new Timer(durationInput,startbtn,pausebtn);

const circle = document.querySelector('circle');
const circleCenter = [200,200];
const circleRadius = 190;
const circleStrokeWidth = 10;
circle.setAttribute('r', circleRadius);
circle.setAttribute('cx',circleCenter[0]);
circle.setAttribute('cy',circleCenter[1]);
circle.setAttribute('stroke-width', circleStrokeWidth);