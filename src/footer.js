import React from 'react';

function Footer(){
    return(
        <footer class="footer bg-dark py-3 mt-auto" >
    <div class="container">
    <span class="text-light">Developed by Jeffy Lau in 2022</span>
    <br />
    <span class="text-light" style={{ fontSize: "0.75rem" }}>
      3D assets adapted from{" "}
      <a
        class="text-light"
        href="https://github.com/davidhckh/portfolio-2025"
        target="_blank"
        rel="noreferrer"
      >
        David Heckhoff portfolio-2025
      </a>{" "}
      (temporary — will be customized)
    </span>
    </div>
</footer>
    )
}

export default Footer;
