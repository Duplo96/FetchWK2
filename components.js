export const displayCards = (pics, detail, photographer) =>
  `  
  <div class="col-4">
  <div class="card mb-4">
<img src= "${pics}" class="card-img-top "  alt="..." />
<div class="card-body">
  <h5 class="card-title">${photographer}</h5>
  <p class="card-text">
  ${detail}
  </p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>
</div>`;
