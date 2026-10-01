export default function Projects() {
  return (
    <>
<section className="proj" id="projects"><div className="wrap"><p className="mono">03 — Selected work</p>
<article className="case" id="wft">
<div className="chead"><h3>Water Footprint<br />Tracker</h3><span className="badge">3rd place · BIT Hackathon 2025</span></div>
<div className="cgrid"><div>
<div className="tabs" role="tablist" aria-label="Water Footprint Tracker case study">
<button className="tab" role="tab" aria-selected="true" aria-controls="w1">Problem</button><button className="tab" role="tab" aria-selected="false" aria-controls="w2">Solution</button><button className="tab" role="tab" aria-selected="false" aria-controls="w3">Features</button></div>
<div className="panel" id="w1" role="tabpanel"><p>The water behind everyday food is invisible to consumers. The app shows the total in litres/kg. Knowing what a product costs in agricultural water, and whether a crop suits the local region, normally takes research.</p></div>
<div className="panel" id="w2" role="tabpanel" hidden><p>An AI-powered web app that identifies a food product from an uploaded image, a camera scan or typed text, then estimates its agricultural water footprint, split into Blue, Green and Grey components.</p></div>
<div className="panel" id="w3" role="tabpanel" hidden><ul><li>Image upload</li><li>Camera scanning</li><li>Manual food input</li><li>Litres per kg result</li><li>Blue / Green / Grey split</li><li>Crop suitability by location</li><li>Irrigation method info</li><li>Interactive visualizations</li><li>Rated Excellent / Moderate / Poor</li></ul></div>
<div className="pc"><span>React.js</span><span>Node.js</span><span>Express.js</span><span>MongoDB</span><span>AI</span><span>REST APIs</span><span>Team size: 1</span></div></div>
<aside className="viz" aria-label="Interactive pipeline">
<p className="mono">How it flows — tap a stage</p>
<div className="flow" id="flow"><button className="step on" style={{"textAlign": "left", "background": "none", "color": "inherit", "font": "inherit", "cursor": "pointer"}}><i>01</i>Input: photo, camera or text</button><button className="step" style={{"textAlign": "left", "background": "none", "color": "inherit", "font": "inherit", "cursor": "pointer"}}><i>02</i>AI identifies the food product</button><button className="step" style={{"textAlign": "left", "background": "none", "color": "inherit", "font": "inherit", "cursor": "pointer"}}><i>03</i>Express API + MongoDB lookup</button><button className="step" style={{"textAlign": "left", "background": "none", "color": "inherit", "font": "inherit", "cursor": "pointer"}}><i>04</i>Footprint shown in litres/kg</button></div>
<div className="wbar" id="wbar" role="group" aria-label="Water footprint components"><div className="b" tabIndex="0" data-t="Blue water: surface and groundwater used for irrigation.">BLUE</div><div className="g" tabIndex="0" data-t="Green water: rainwater absorbed by the crop.">GREEN</div><div className="y" tabIndex="0" data-t="Grey water: water needed to dilute pollution from production.">GREY</div></div>
<p className="wnote" id="wnote" aria-live="polite">Hover or focus a component to see what it means.</p></aside></div></article>

<article className="case" id="gpsh">
<div className="chead"><h3>Green Product<br />Sales Hub</h3><span className="badge">Farmer ⇄ Customer</span></div>
<div className="cgrid"><div>
<div className="tabs" role="tablist" aria-label="Green Product Sales Hub case study">
<button className="tab" role="tab" aria-selected="true" aria-controls="g1">Problem</button><button className="tab" role="tab" aria-selected="false" aria-controls="g2">Solution</button><button className="tab" role="tab" aria-selected="false" aria-controls="g3">Functionality</button></div>
<div className="panel" id="g1" role="tabpanel"><p>Farmers often depend on intermediary brokers to reach buyers, which cuts into their profit and limits direct contact with customers. Reducing that dependence can improve their potential profit margins.</p></div>
<div className="panel" id="g2" role="tabpanel" hidden><p>A web platform that connects farmers directly with customers for communication and product sales, with separate workflows for each side and multilingual support.</p></div>
<div className="panel" id="g3" role="tabpanel" hidden><ul><li>Farmer workflow</li><li>Customer workflow</li><li>Authentication</li><li>Product listings</li><li>Direct communication</li><li>Multilingual interface</li><li>Responsive React UI</li><li>REST APIs + MongoDB</li></ul></div>
<div className="pc"><span>React.js</span><span>Node.js</span><span>Express.js</span><span>MongoDB</span><span>Team size: 1</span></div></div>
<aside className="viz" style={{"position": "static"}} aria-label="Role toggle"><p className="mono">Choose a side</p>
<div className="tabs fh" id="roles"><button className="tab" aria-pressed="true" aria-selected="true">Farmer</button><button className="tab" aria-selected="false">Customer</button></div>
<p className="wnote" id="rnote" aria-live="polite" style={{"minHeight": "5em"}}>Farmers sign in, list their products and speak with customers directly, with no broker in between.</p></aside></div></article>
</div></section>
    </>
  )
}
