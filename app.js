const durationInput = document.querySelector("#duration");
const startbtn = document.querySelector("#start");
const pausebtn = document.querySelector("#pause");
const timer = new Timer(60, durationInput, startbtn, pausebtn, {
  onStart() {},
  onTick() {
    circle.setAttribute("stroke-dashoffset", calcCircleOffset());
  },
  onComplete() {},
});

const circle = document.querySelector("circle");
const circleCenter = [200, 200];
const circleRadius = 190;
const circlePerimeter = 2 * Math.PI * circleRadius;
const circleStrokeWidth = 10;
circle.setAttribute("r", circleRadius);
circle.setAttribute("cx", circleCenter[0]);
circle.setAttribute("cy", circleCenter[1]);
circle.setAttribute("stroke-width", circleStrokeWidth);
circle.setAttribute("stroke-dasharray", circlePerimeter);
circle.setAttribute(
  "transform",
  `rotate(-90,${circleCenter[0]},${circleCenter[1]})`
);

function calcCircleOffset() {
  console.log(
    (timer.duration / timer.initialDuration) * circlePerimeter - circlePerimeter
  );
  return (
    (timer.duration / timer.initialDuration) * circlePerimeter - circlePerimeter
  );
}
