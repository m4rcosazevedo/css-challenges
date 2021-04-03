addTheme = (e) => {
  const domTheme = document.querySelector('.frame')
  const domElements = document.querySelectorAll('.frame > div')

  domElements.forEach((item) => {
    if (e.target.checked) {
      domTheme.classList.add('active')
      item.classList.add('active')
    }
    else {
      domTheme.classList.remove('active')
      item.classList.remove('active')
    }
  })
}

document.addEventListener('input', addTheme)