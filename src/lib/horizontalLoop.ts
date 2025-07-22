import gsap from "gsap";

export default function HorizontalLoop(
  items: string | object | null | Array<HTMLElement>,
  config: GSAPTimelineVars
) {
  const elements: HTMLElement[] = gsap.utils.toArray(items) as HTMLElement[];
  config = config;
  let tl = gsap.timeline({
    repeat: config.repeat,
    paused: config.paused,
    defaults: config.defaults || { ease: "none" },
    onReverseComplete: () => {
      tl.totalTime(tl.rawTime() + tl.duration() * 100);
    },
  });
  let length: number = elements.length,
    startX: number = elements[0]?.offsetLeft ?? 0,
    times: Array<number> = [],
    widths: Array<number> = [],
    xPercents: Array<number> = [],
    curIndex: number = 0,
    pixelsPerSecond: number = (config.speed || 1) * 100,
    snap: (v: number) => number =
      config.snap === false
        ? (v: number): number => v
        : gsap.utils.snap(config.snap || 1),
    totalWidth: number = 0,
    curX: number = 0,
    distanceToStart: number = 0,
    distanceToLoop: number = 0,
    item: HTMLElement | null = null,
    i: number = 0;

  gsap.set(elements, {
    xPercent: (i: number, el: HTMLElement): number => {
      let w = (widths[i] = parseFloat(
        String(gsap.getProperty(el, "width", "px"))
      ));
      xPercents[i] =
        snap(parseFloat(String(gsap.getProperty(el, "x", "px"))) / w) * 100 +
        parseFloat(String(gsap.getProperty(el, "xPercent")));
      return Number(xPercents[i]);
    },
  });

  gsap.set(elements, { x: 0 });
  totalWidth =
    elements[length - 1].offsetLeft +
    (xPercents[length - 1] / 100) * widths[length - 1] +
    startX +
    elements[length - 1].offsetWidth *
      parseFloat(String(gsap.getProperty(elements[length - 1], "scaleX"))) +
    (parseFloat(config.paddingRight) || 0);

  for (i = 0; i < length; i++) {
    item = elements[i];
    curX = (xPercents[i] / 100) * widths[i];
    distanceToStart = item.offsetLeft + curX - startX;
    distanceToLoop =
      distanceToStart +
      widths[i] * parseFloat(String(gsap.getProperty(item, "scaleX")));

    tl.to(
      item,
      {
        xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
        duration: distanceToLoop / pixelsPerSecond,
      },
      0
    )
      .fromTo(
        item,
        {
          xPercent: snap(
            ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
          ),
        },
        {
          xPercent: xPercents[i],
          duration:
            (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
          immediateRender: false,
        },
        distanceToLoop / pixelsPerSecond
      )
      .add("label" + i, distanceToStart / pixelsPerSecond);
    times[i] = distanceToStart / pixelsPerSecond;
  }

  function toIndex(index: number, vars: GSAPTimelineVars = {}) {
    vars = vars || {};
    Math.abs(index - curIndex) > length / 2 &&
      (index += index > curIndex ? -length : length);
    let newIndex = gsap.utils.wrap(0, length, index);
    let time = times[newIndex];
    if (time > tl.time() !== index > curIndex) {
      vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
      time += tl.duration() * (index > curIndex ? 1 : -1);
    }
    curIndex = newIndex;
    vars.overwrite = true;
    return tl.tweenTo(time, vars);
  }

  tl.next = (vars: GSAPTimelineVars) => {
    return toIndex(curIndex + 1, vars);
  };

  tl.previous = (vars: GSAPTimelineVars) => {
    return toIndex(curIndex - 1, vars);
  };
  
  tl.current = () => {
    return curIndex;
  };

  tl.toIndex = ( index: number, vars: GSAPTimelineVars = {} ) => {
    return toIndex(index, vars);
  };

  tl.times = times;
  tl.progress(1,true).progress(0, true); 
  if(config.reversed){
    if (typeof tl.vars.onReverseComplete === "function") {
      tl.vars.onReverseComplete();
    }
    tl.reverse();
  }
  return tl;
}
