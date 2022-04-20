import React, { useContext, useState, useRef } from "react";
import "./header.css";

function Header() {
  return (
    <div>
      <pre>
        <div className="headerCSS">
        <div className="textClass">
        <br />

          Jeffy Lau 
          <br/>
          <br/>

          Software Engineer/ Web Developer
          <br />
          <br />
        
          <span class="cursor"></span>
          </ div>
          <br />
          <div>
<div class="row">
  <div class="col-sm-12 col-md-12 col-lg-12 col-xl-4"><a target="_blank" href='https://github.com/jeffylau50'>
  <svg className='githubButton' width="512px" height="139px" viewBox="0 0 512 139" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
    <g>
        <path d="M98.6961598,59.3124474 L55.6354962,59.3124474 C54.5247282,59.3124474 53.623096,60.2151464 53.623096,61.3259144 L53.623096,82.3792882 C53.623096,83.4900562 54.5247282,84.3938224 55.6354962,84.3938224 L72.4335936,84.3938224 L72.4335936,110.550753 C72.4335936,110.550753 68.6616775,111.836513 58.2336902,111.836513 C45.930948,111.836513 28.744455,107.341157 28.744455,69.5494382 C28.744455,31.7491835 46.6405165,26.7758029 63.4418154,26.7758029 C77.9852995,26.7758029 84.2508415,29.336651 88.2372288,30.5701264 C89.4899103,30.9542537 90.648694,29.706907 90.648694,28.5950722 L95.4524188,8.25340062 C95.4524188,7.73376182 95.2763603,7.10742103 94.6830971,6.68167999 C93.0644278,5.52716422 83.1870225,-1.42108547e-14 58.2336902,-1.42108547e-14 C29.487101,-1.42108547e-14 0,12.2301846 0,71.022993 C0,129.817935 33.7605165,138.579238 62.2094068,138.579238 C85.7649432,138.579238 100.054476,128.51297 100.054476,128.51297 C100.643471,128.187529 100.707493,127.364856 100.707493,126.987131 L100.707493,61.3259144 C100.707493,60.2151464 99.8069278,59.3124474 98.6961598,59.3124474 Z M320.495497,7.35923776 C320.495497,6.23886664 319.607737,5.33510059 318.496969,5.33510059 L294.251072,5.33510059 C293.143503,5.33510059 292.24294,6.23886664 292.24294,7.35923776 C292.24294,7.36457288 292.24934,54.215292 292.24934,54.215292 L254.456556,54.215292 L254.456556,7.35923776 C254.456556,6.23886664 253.564526,5.33510059 252.455893,5.33510059 L228.211061,5.33510059 C227.107764,5.33510059 226.208265,6.23886664 226.208265,7.35923776 L226.208265,134.231131 C226.208265,135.350435 227.107764,136.26167 228.211061,136.26167 L252.455893,136.26167 C253.564526,136.26167 254.456556,135.350435 254.456556,134.231131 L254.456556,79.9635547 L292.24934,79.9635547 C292.24934,79.9635547 292.183187,134.226863 292.183187,134.231131 C292.183187,135.350435 293.082684,136.26167 294.191317,136.26167 L318.494835,136.26167 C319.605604,136.26167 320.493364,135.350435 320.495497,134.231131 L320.495497,7.35923776 Z M144.371023,24.3216565 C144.371023,15.591298 137.371371,8.53616094 128.735977,8.53616094 C120.10912,8.53616094 113.104133,15.591298 113.104133,24.3216565 C113.104133,33.042412 120.10912,40.1167554 128.735977,40.1167554 C137.371371,40.1167554 144.371023,33.042412 144.371023,24.3216565 Z M142.447186,107.534288 L142.447186,48.9698214 C142.447186,47.8579864 141.549822,46.9488852 140.441188,46.9488852 L116.272115,46.9488852 C115.163481,46.9488852 114.171153,48.0927309 114.171153,49.2045657 L114.171153,133.109693 C114.171153,135.575576 115.707662,136.308619 117.696587,136.308619 L139.472334,136.308619 C141.861392,136.308619 142.447186,135.135964 142.447186,133.070213 L142.447186,107.534288 Z M413.161929,46.9488852 L389.10169,46.9488852 C387.998389,46.9488852 387.099963,47.8579864 387.099963,48.9772906 L387.099963,111.186697 C387.099963,111.186697 380.988068,115.658579 372.312128,115.658579 C363.637256,115.658579 361.334627,111.722341 361.334627,103.227794 L361.334627,48.9772906 C361.334627,47.8579864 360.43833,46.9488852 359.333962,46.9488852 L334.915206,46.9488852 C333.812978,46.9488852 332.910277,47.8579864 332.910277,48.9772906 L332.910277,107.335822 C332.910277,132.566579 346.972537,138.739291 366.317608,138.739291 C382.1874,138.739291 394.983106,129.971587 394.983106,129.971587 C394.983106,129.971587 395.592374,134.591784 395.867664,135.140232 C396.144024,135.686546 396.862125,136.238196 397.63785,136.238196 L413.172597,136.169906 C414.274829,136.169906 415.177528,135.258671 415.177528,134.144702 L415.170059,48.9772906 C415.170059,47.8579864 414.27056,46.9488852 413.161929,46.9488852 Z M468.596822,115.706595 C460.251661,115.452644 454.591116,111.665789 454.591116,111.665789 L454.591116,71.4882139 C454.591116,71.4882139 460.175898,68.0652134 467.027235,67.4527437 C475.691441,66.6770202 484.039804,69.2944203 484.039804,89.9626002 C484.039804,111.757553 480.272156,116.058711 468.596822,115.706595 Z M478.086899,44.2237159 C464.421573,44.2237159 455.12676,50.3206689 455.12676,50.3206689 L455.12676,7.35923776 C455.12676,6.23886664 454.231532,5.33510059 453.126097,5.33510059 L428.811913,5.33510059 C427.706479,5.33510059 426.808048,6.23886664 426.808048,7.35923776 L426.808048,134.231131 C426.808048,135.350435 427.706479,136.26167 428.815112,136.26167 L445.684702,136.26167 C446.444417,136.26167 447.019542,135.870074 447.444215,135.18398 C447.863555,134.502154 448.468557,129.334575 448.468557,129.334575 C448.468557,129.334575 458.41105,138.756363 477.232216,138.756363 C499.328069,138.756363 512,127.548384 512,88.4410293 C512,49.3336752 491.761829,44.2237159 478.086899,44.2237159 Z M212.229235,46.731213 L194.041876,46.731213 C194.041876,46.731213 194.014134,22.7093892 194.014134,22.704054 C194.014134,21.7949529 193.545712,21.3404024 192.494697,21.3404024 L167.709954,21.3404024 C166.746435,21.3404024 166.22893,21.7640094 166.22893,22.6901829 L166.22893,47.5197408 C166.22893,47.5197408 153.808816,50.5180675 152.969071,50.760281 C152.132527,51.0024947 151.516857,51.77395 151.516857,52.6937215 L151.516857,68.2967567 C151.516857,69.4192619 152.413154,70.3240948 153.521788,70.3240948 L166.22893,70.3240948 L166.22893,107.859729 C166.22893,135.739897 185.785275,138.478938 198.98218,138.478938 C205.011911,138.478938 212.224966,136.542296 213.41576,136.102684 C214.135999,135.838063 214.554271,135.092216 214.554271,134.283415 L214.574544,117.119329 C214.574544,116.000025 213.629165,115.094125 212.564279,115.094125 C211.504728,115.094125 208.79343,115.525201 206.002106,115.525201 C197.069013,115.525201 194.041876,111.371292 194.041876,105.994577 C194.041876,100.622131 194.04081,70.3240948 194.04081,70.3240948 L212.229235,70.3240948 C213.337868,70.3240948 214.235233,69.4192619 214.235233,68.2967567 L214.235233,48.7532162 C214.235233,47.633912 213.337868,46.731213 212.229235,46.731213 Z" fill="#11110F"></path>
    </g>
</svg></a>
</div>
  <div class="col-sm-12 col-md-12  col-lg-12 col-xl-4"><button type='button' className="buttonCSS">🗎<b>RESUME</b></button></div>
  <div class="col-sm-12 col-md-12  col-lg-12 col-xl-4"><a target='_blank' href='https://linkedin.com/in/jeffy-lau-962487109'>
  <svg className='linkedinButton' width="512px" height="128px" viewBox="0 0 512 128" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
    <g>
        <path d="M202.057143,74.9714286 L230.308571,109.714286 L208,109.714286 L182.857143,77.8057143 L182.857143,109.714286 L164.571429,109.714286 L164.571429,18.2857143 L182.857143,18.2857143 L182.857143,72.0457143 L206.08,45.7142857 L229.394286,45.7142857 L202.057143,74.9714286 Z M128.914286,43.8857143 C120.787189,44.0072946 113.236551,48.1071889 108.708571,54.8571429 L108.708571,45.7142857 L91.4285714,45.7142857 L91.4285714,109.714286 L109.714286,109.714286 L109.714286,79.8171429 C109.228856,75.4306044 110.587451,71.0395336 113.465306,67.6935939 C116.343161,64.3476542 120.481628,62.3475617 124.891429,62.1714286 C135.497143,62.1714286 137.142857,72.5942857 137.142857,79.8171429 L137.142857,109.714286 L155.428571,109.714286 L155.428571,75.7942857 C155.428571,55.68 148.754286,43.8857143 129.28,43.8857143 L128.914286,43.8857143 L128.914286,43.8857143 Z M292.571429,79.1771429 C292.641384,80.5171829 292.641384,81.85996 292.571429,83.2 L244.571429,83.2 L244.571429,83.84 C246.180812,91.7157313 253.271666,97.2566715 261.302857,96.9142857 C267.534814,97.1852048 273.608543,94.9075564 278.125714,90.6057143 L290.285714,99.7485714 C282.492218,107.701692 271.697708,111.986282 260.571429,111.542857 C251.352,112.12578 242.332413,108.684541 235.84426,102.108711 C229.356108,95.5328807 226.036241,86.4679167 226.742857,77.2571429 C226.553601,68.1728489 230.14904,59.4186661 236.668659,53.0897809 C243.188278,46.7608958 252.045327,43.4268918 261.12,43.8857143 C278.308571,43.8857143 292.571429,56.0457143 292.571429,79.1771429 L292.571429,79.1771429 Z M275.565714,71.3142857 C275.429974,67.6543136 273.796386,64.2108816 271.047593,61.7905603 C268.298799,59.3702389 264.676286,58.1856575 261.028571,58.5142857 C252.988748,57.6450726 245.707994,63.3078811 244.571429,71.3142857 L275.565714,71.3142857 Z M18.2857143,18.2857143 L0,18.2857143 L0,109.714286 L54.8571429,109.714286 L54.8571429,91.4285714 L18.2857143,91.4285714 L18.2857143,18.2857143 Z M347.428571,18.2857143 L365.714286,18.2857143 L365.714286,109.714286 L348.434286,109.714286 L348.434286,103.314286 C343.984638,108.796268 337.202524,111.848219 330.148571,111.542857 C321.559196,111.322256 313.441626,107.566635 307.712892,101.162914 C301.984158,94.7591935 299.152166,86.2751236 299.885714,77.7142857 C299.012676,69.1378257 301.783463,60.5891918 307.521582,54.1555424 C313.259702,47.7218931 321.437059,43.995336 330.057143,43.8857143 C336.471312,43.6048667 342.729753,45.9106081 347.428571,50.2857143 L347.428571,18.2857143 L347.428571,18.2857143 Z M348.8,77.7142857 C349.381889,73.4426146 348.085439,69.1282627 345.245304,65.8848994 C342.40517,62.6415361 338.299673,60.7869982 333.988571,60.7999321 C325.241789,61.4350869 318.614232,68.9571605 319.085714,77.7142857 C318.614232,86.4714109 325.241789,93.9934846 333.988571,94.6286393 C338.299673,94.6415732 342.40517,92.7870353 345.245304,89.543672 C348.085439,86.3003087 349.381889,81.9859569 348.8,77.7142857 L348.8,77.7142857 Z M73.1428571,16.4571429 C67.0426002,16.5439794 62.0499364,21.3369367 61.7142857,27.4285714 C61.7142857,33.7403971 66.8310314,38.8571429 73.1428571,38.8571429 C79.4546829,38.8571429 84.5714286,33.7403971 84.5714286,27.4285714 C84.2357779,21.3369367 79.2431141,16.5439794 73.1428571,16.4571429 L73.1428571,16.4571429 Z M64,109.714286 L82.2857143,109.714286 L82.2857143,45.7142857 L64,45.7142857 L64,109.714286 Z M512,9.14285714 L512,118.857143 C512,123.906603 507.906603,128 502.857143,128 L393.142857,128 C388.093397,128 384,123.906603 384,118.857143 L384,9.14285714 C384,4.09339657 388.093397,-3.55271368e-15 393.142857,-3.55271368e-15 L502.857143,-3.55271368e-15 C507.906603,-3.55271368e-15 512,4.09339657 512,9.14285714 Z M420.571429,45.7142857 L402.285714,45.7142857 L402.285714,109.714286 L420.571429,109.714286 L420.571429,45.7142857 Z M422.857143,27.4285714 C422.857143,21.1167457 417.740397,16 411.428571,16 C405.116746,16 400,21.1167457 400,27.4285714 C400,33.7403971 405.116746,38.8571429 411.428571,38.8571429 C417.740397,38.8571429 422.857143,33.7403971 422.857143,27.4285714 Z M493.714286,75.7942857 C493.714286,55.68 487.04,43.8857143 467.565714,43.8857143 C459.308825,43.8867299 451.594988,48.0007766 446.994286,54.8571429 L446.994286,45.7142857 L429.714286,45.7142857 L429.714286,109.714286 L448,109.714286 L448,79.8171429 C447.51457,75.4306044 448.873165,71.0395336 451.75102,67.6935939 C454.628875,64.3476542 458.767343,62.3475617 463.177143,62.1714286 C473.782857,62.1714286 475.428571,72.5942857 475.428571,79.8171429 L475.428571,109.714286 L493.714286,109.714286 L493.714286,75.7942857 Z" fill="#0A66C2"></path>
    </g>
</svg></a></div></div>
</div>
        </div>
      </pre>
    </div>
  );
}

export default Header;



