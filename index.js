function show() {
  let userput = document.querySelector('#emaill').value
  if (userput != '') {
    swal(
      'Congratulations',
      'You are subscribed to the OUTLOOK INDIA',
      'success',
    )
  } else {
    swal('Empty Value', '', 'warning')
  }
}





let dat = document.querySelector('#Date>p')

let today = new Date()

let month = today.getMonth() + 1
let year = today.getFullYear()
let date = today.getDate()

let current_date = `${month} / ${date} / ${year}`
dat.innerText = current_date
