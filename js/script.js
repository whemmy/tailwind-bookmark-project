const tabs = document.querySelectorAll('.tab')
const panels = document.querySelectorAll('.panel')
const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')
const logo = document.getElementById('logo')

// Tabs menu event listener

tabs.forEach((tab) => {
 tab.addEventListener('click', onTabClick)
})

function onTabClick(e) {
 // Deactivate all tabs
 tabs.forEach((tab) => {
  tab.children[0].classList.remove(
   'border-softRed',
   'border-b-4',
   'md:border-b-0'
  )
 })
 // Hide all pannel 
 panels.forEach((panel) => {
  panel.classList.add('hidden')
 })
 // Activate a new tab and panel based on a target 
 e.target.classList.add('border-softRed', 'border-b-4')
 const classString = e.target.getAttribute('data-target')
 // console.log(classString);
 // const lab = panels.querySelector(classString[0])
 // console.log(lab);
 // const bad = document.getElementById('panels').getElementsByClassName(classString)[0]
 // console.log(bad);
 // bad.classList.remove('hidden')

 panels.forEach((panel) => {
  if (panel.classList.contains(classString)) {
   panel.classList.remove('hidden')
  }
 })
}

function navToggle() {
 btn.classList.toggle('open')
 menu.classList.toggle('flex')
 menu.classList.toggle('hidden')

 if (menu.classList.contains('flex')) {
  logo.setAttribute('src', './images/logo-bookmark-footer.svg')
 } else {
  logo.setAttribute('src', './images/logo-bookmark.svg')
 }
}

