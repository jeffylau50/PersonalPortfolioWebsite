import React from 'react';

function Footer(){
    return(
        <footer class="footer bg-dark py-3 mt-auto" >
    <div class="container">
    <span class="text-light">Developed by Jeffy Lau in 2022</span>
    <br />
    <span class="text-light" style={{ fontSize: "0.75rem" }}>
      3D model:{" "}
      <a
        class="text-light"
        href="https://sketchfab.com/3d-models/macbook-pro-m3-16-inch-2024-8e34fc2b303144f78490007d91ff57c4"
        target="_blank"
        rel="noreferrer"
      >
        MacBook Pro M3 16&quot; 2024
      </a>{" "}
      by jackbaeten (CC-BY-4.0)
    </span>
    </div>
</footer>
    )
}

export default Footer;