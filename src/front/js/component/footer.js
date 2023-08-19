import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer mt-5 py-3 text-center">
		<p>&copy; 2023 Rodrigo Almeida. All rights reserved.</p>
	  <ul class="nav flex-row d-flex justify-content-center">
          <li class="nav-item mb-2 me-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
          <li class="nav-item mb-2 me-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
          <li class="nav-item mb-2 me-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
          <li class="nav-item mb-2 me-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
          <li class="nav-item mb-2 me-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
        </ul>
	</footer>
);
