const isNextButtonEnabled = ({ offset, total, limit }) => {
  return offset + limit >= total;
}

const isPreviousButtonEnabled = ({ offset, limit }) => {
  return offset - limit < 0;
}

let getControls = () => {
  const controls = document.getElementById('paginationControls');
  getControls = () => controls;
  return getControls();
}

const createPager = ({ offset, total, limit, onPageChange }) => {
  const controls = getControls();
  controls.innerHTML = `
    <a id="pagerPreviousButton" class="pagination-previous" ${isPreviousButtonEnabled({ offset, total, limit }) ? 'disabled': undefined }>Previous</a>
    <a id="pagerNextButton" class="pagination-next" ${isNextButtonEnabled({offset, total, limit}) ? 'disabled': undefined}>Next page</a>`
  controls.querySelector('#pagerPreviousButton').addEventListener('click', () => onPageChange({ offset: offset - limit, total, limit}))
  controls.querySelector('#pagerNextButton').addEventListener('click', () => onPageChange({ offset: offset + limit, total, limit}))
  return controls;
}


export default createPager
