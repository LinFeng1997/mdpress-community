import FlowChart from "../FlowChart";
import MdFlowChart from '../markdownItPlugin';

function enhanceMarkdown(md) {
  md.use(MdFlowChart);
}
export default function (ctx) {
  const { sandbox,mdConfig } = ctx;
  const extendMarkdown = mdConfig.extendMarkdown;
  if (extendMarkdown){
    mdConfig.extendMarkdown = md => {
      extendMarkdown(md);
      enhanceMarkdown(md);
    }
  } else {
    mdConfig.extendMarkdown = enhanceMarkdown;
  }
  sandbox.FlowChart = FlowChart;
}
