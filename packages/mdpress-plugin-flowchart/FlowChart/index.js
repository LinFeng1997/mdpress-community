import React, { useState, useEffect,useRef } from "react";
import classnames from "classnames";
import Loading from "./Loading";
import presets from "./presets/index";

export default function FlowChart(props) {
  const { id, code } = props;
  const [loading, setLoading] = useState(true);
  const el = useRef(null);

  useEffect(() => {
    const preset = presets[props.preset];
    if (!preset) {
      console.warn(
        `[mdpress-plugin-flowchart] Unknown preset: ${props.preset}`
      );
      return;
    }
    el.current && el.current.setAttribute("id", id);
    const delay = () => new Promise((resolve) => setTimeout(resolve, 500));
    Promise.all([
      import(/* webpackChunkName: "flowchart" */ "flowchart.js"),
      delay(),
    ]).then(([flowchart]) => {
      const { parse } = flowchart.default;
      const svg = parse(code);
      svg.drawSVG(id, preset);
      setLoading(false);
    });
  }, []);
  return (
    <div ref={el} className={classnames("mdpress-flowchart", { loading: loading })}>
      {loading && <Loading className="mdpress-flowchart-loading-icon" />}
    </div>
  );
}
