import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as S}from"./iframe-DbaQb1ny.js";import{S as A,j as I,r as J,h as j,l as q,s as i,A as $,k as L}from"./Axis-DIDJYMyg.js";import"./preload-helper-D9Z9MdNV.js";function E(e,s){let n;if(s===void 0)for(const t of e)t!=null&&(n<t||n===void 0&&t>=t)&&(n=t);else{let t=-1;for(let a of e)(a=s(a,++t,e))!=null&&(n<a||n===void 0&&a>=a)&&(n=a)}return n}function k(e){return typeof e=="string"?new A([document.querySelectorAll(e)],[document.documentElement]):new A([I(e)],J)}const B=L.div`
  width: 100%;
  height: auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  box-sizing: border-box;
`;L.h2`
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;const Q=({data:e,width:s=600,height:n=300})=>{const t=S.useRef(null),a={top:20,right:30,bottom:40,left:40},x=s-a.left-a.right,l=n-a.top-a.bottom;let d=j().domain(e.map(p=>p.name)).range([0,x]).padding(.1),c=q().domain([0,E(e,p=>p.value)||0]).range([l,0]);return S.useEffect(()=>{if(!t.current||!e.length)return;d=j().domain(e.map(r=>r.name)).range([0,x]).padding(.1),c=q().domain([0,E(e,r=>r.value)||0]).range([l,0]),i(t.current).selectAll("*").remove(),i(t.current).selectAll(".bar").data(e).enter().append("rect").attr("class","bar").attr("x",r=>d(r.name)||0).attr("y",r=>c(r.value)).attr("width",d.bandwidth()).attr("height",r=>l-c(r.value)).attr("fill","#69b3a2").on("mouseover",function(r,D){i(this).attr("fill","#4a9b8e");const C=i("body").append("div").attr("class","tooltip").style("opacity",0).style("position","absolute").style("background","black").style("color","white").style("padding","5px").style("border-radius","3px").style("pointer-events","none");C.transition().duration(200).style("opacity",.9),C.html(`${D.name}: ${D.value}`).style("left",r.pageX+10+"px").style("top",r.pageY-28+"px")}).on("mouseout",function(){i(this).attr("fill","#69b3a2"),k(".tooltip").remove()})},[e,s,n]),o.jsx(B,{children:o.jsxs("svg",{width:s,height:n,style:{display:"block",margin:"0 auto"},children:[o.jsx("g",{ref:t,className:"main-chart",transform:`translate(${a.left},${a.top})`}),o.jsx($,{scale:d,orientation:"bottom",transform:`translate(${a.left},${l+a.top})`,animationDuration:0}),o.jsx($,{scale:c,orientation:"left",transform:`translate(${a.left},${a.top})`,animationDuration:0})]})})};Q.__docgenInfo={description:"",methods:[],displayName:"BasicChart",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"DataPoint"}],raw:"DataPoint[]"},description:""},width:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"600",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"300",computed:!1}}}};const w=[{name:"January",value:30},{name:"February",value:45},{name:"March",value:60},{name:"April",value:35},{name:"May",value:80},{name:"June",value:55}],M=[{name:"Q1",value:125},{name:"Q2",value:180},{name:"Q3",value:95},{name:"Q4",value:200}],R=[{name:"A",value:10},{name:"B",value:25},{name:"C",value:15}],T=[{name:"Jan",value:30},{name:"Feb",value:45},{name:"Mar",value:60},{name:"Apr",value:35},{name:"May",value:80},{name:"Jun",value:55},{name:"Jul",value:70},{name:"Aug",value:85},{name:"Sep",value:65},{name:"Oct",value:90},{name:"Nov",value:75},{name:"Dec",value:95}],H={title:"Components/BasicChart",component:Q,parameters:{layout:"centered",docs:{description:{component:"A customizable bar chart component built with React, D3.js, and styled-components. Features interactive tooltips and responsive design."}}},tags:["autodocs"],argTypes:{data:{description:"Array of data points to display in the chart",control:"object"},width:{description:"Width of the chart in pixels",control:{type:"range",min:50,max:1200,step:50}},height:{description:"Height of the chart in pixels",control:{type:"range",min:200,max:800,step:50}}}},m={args:{data:w,width:600,height:300}},u={args:{data:M,width:500,height:350},parameters:{docs:{description:{story:"Chart displaying quarterly sales data with higher values."}}}},h={args:{data:R,width:400,height:250},parameters:{docs:{description:{story:"Chart with a minimal dataset of only 3 data points."}}}},g={args:{data:T,width:800,height:400},parameters:{docs:{description:{story:"Chart displaying a full year of monthly data."}}}},y={args:{data:w,width:400,height:200},parameters:{docs:{description:{story:"Compact version of the chart suitable for dashboards."}}}},f={args:{data:w,width:900,height:500},parameters:{docs:{description:{story:"Large chart ideal for detailed analysis and presentations."}}}},v={args:{data:w,width:700,height:400},parameters:{docs:{description:{story:"Interactive version where you can modify all properties using the controls panel."}}}},b={args:{data:[],width:600,height:300},parameters:{docs:{description:{story:"Chart behavior when no data is provided."}}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    width: 600,
    height: 300
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    data: quarterlyData,
    width: 500,
    height: 350
  },
  parameters: {
    docs: {
      description: {
        story: "Chart displaying quarterly sales data with higher values."
      }
    }
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    data: smallDataset,
    width: 400,
    height: 250
  },
  parameters: {
    docs: {
      description: {
        story: "Chart with a minimal dataset of only 3 data points."
      }
    }
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    data: largeDataset,
    width: 800,
    height: 400
  },
  parameters: {
    docs: {
      description: {
        story: "Chart displaying a full year of monthly data."
      }
    }
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    width: 400,
    height: 200
  },
  parameters: {
    docs: {
      description: {
        story: "Compact version of the chart suitable for dashboards."
      }
    }
  }
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    width: 900,
    height: 500
  },
  parameters: {
    docs: {
      description: {
        story: "Large chart ideal for detailed analysis and presentations."
      }
    }
  }
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    width: 700,
    height: 400
  },
  parameters: {
    docs: {
      description: {
        story: "Interactive version where you can modify all properties using the controls panel."
      }
    }
  }
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    data: [],
    width: 600,
    height: 300
  },
  parameters: {
    docs: {
      description: {
        story: "Chart behavior when no data is provided."
      }
    }
  }
}`,...b.parameters?.docs?.source}}};const O=["Default","QuarterlyData","SmallDataset","LargeDataset","SmallChart","LargeChart","Interactive","EmptyData"];export{m as Default,b as EmptyData,v as Interactive,f as LargeChart,g as LargeDataset,u as QuarterlyData,y as SmallChart,h as SmallDataset,O as __namedExportsOrder,H as default};
