import React from 'react'



export default function Navbar() {
  return (
    <div>
      <nav class= "navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div class="container-fluid">
    
    <a class="navbar-brand" href="/">GDSC</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav  my-3 mx-4 d-flex justify-content-between align-items-center w-100"  >
        <a class="nav-link active text-white" aria-current="page" href="/">Home</a>
        <a class="nav-link text-white" href="/">About</a>
        <a class="nav-link text-white" href="/">Team</a>
        <a class="nav-link text-white" href="/">Event</a>
        <a class="nav-link text-white" href="/">Faculty</a>
        <button type="button" class="btn btn-outline-light">contact us</button>


        
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}
