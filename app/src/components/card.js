const createCard = ({
  thumbnail,
  name,
  logo,
  description,
  date
                    }) => `<div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="${thumbnail}" loading="lazy" alt="${name} thumbnail image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img class="is-rounded" loading="lazy" src="${logo}" alt="${name} logo image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">${name}</p>
      </div>
    </div>
    <div class="content">
      ${description}
      <time datetime="${new Date(date).toLocaleDateString('en-us', {year: '2-digit', month: '2-digit', day: '2-digit'})}">${new Date(date).toLocaleDateString('en-us', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' })}</time>
    </div>
  </div>
</div>`


export default createCard
