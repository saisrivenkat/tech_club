import React from "react";
import logo from "../images/logo.png"

export default function Header() {
  return (
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/">
    Tech club
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
      
        <a class="nav-link" href="/"><i class="fa fa-home" aria-hidden="true" /> Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/Events">Events</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/Activities">Activities</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="/Team" ><i class="fa fa-users" aria-hidden="true" />Team</a>
      </li>
    </ul>
  </div>
</nav>
    
  );
}
