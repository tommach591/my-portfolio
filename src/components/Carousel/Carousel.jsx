import { useCallback, useEffect, useState } from "react";
import "./Carousel.css";
import Content from "../Content";

function Carousel({ list }) {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(list.length - 1);
  const [next, setNext] = useState(1);

  const handleNext = useCallback(() => {
    setPrev(current);
    setCurrent(next);
    if (next < list.length - 1) setNext(next + 1);
    else setNext(0);
  }, [current, next, list]);

  const handlePrev = useCallback(() => {
    setNext(current);
    setCurrent(prev);
    if (prev > 0) setPrev(prev - 1);
    else setPrev(list.length - 1);
  }, [current, prev, list]);

  const handleSet = useCallback(
    (i) => {
      setCurrent(i);
      if (i > 0) setPrev(i - 1);
      else setPrev(list.length - 1);
      if (i < list.length - 1) setNext(i + 1);
      else setNext(0);
    },
    [list]
  );

  useEffect(() => {
    const interval = setTimeout(() => {
      handleNext();
    }, [5000]);

    return () => {
      clearInterval(interval);
    };
  }, [handleNext]);

  return (
    <div className="Carousel">
      <Content item={list[prev]} />
      <Content item={list[current]} />
      <Content item={list[next]} />
      <img
        className="Prev"
        onClick={() => handlePrev()}
        src="https://api.iconify.design/material-symbols:arrow-circle-left.svg?color=%23ffffff"
        alt=""
      />
      <img
        className="Next"
        onClick={() => handleNext()}
        src="https://api.iconify.design/material-symbols:arrow-circle-right.svg?color=%23ffffff"
        alt=""
      />
      <div className="CarouselIndicators">
        {list.map((item, i) => (
          <div
            key={i}
            style={
              current === i ? { background: "white" } : { background: "gray" }
            }
            onClick={() => handleSet(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;

