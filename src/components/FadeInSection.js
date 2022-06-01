import React, {useRef, useEffect} from "react";

export default function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);

  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
      // entries.forEach(entry => entry.isIntersecting && setVisible(true));
    });

    observer.observe(domRef.current);
  });
  
  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${props.delay}` }}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}