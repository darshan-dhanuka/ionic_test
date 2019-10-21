/**
* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/

import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-sweet-alert',
  templateUrl: './sweet-alert.page.html',
  styleUrls: ['./sweet-alert.page.scss'],
})
export class SweetAlertPage implements OnInit {
  public showAlertData: Array<any>;

  constructor() {
    this.showAlertData = [
      { title: 'A basic message', buttonTitle: 'Click Here', clickEvent: 'basicMessage' },
      { title: 'Normal Alert', buttonTitle: 'Click Here', clickEvent: 'normalAlert' },
      { title: 'An Error message', buttonTitle: 'Click Here', clickEvent: 'errorMessage' },
      { title: 'A title with a text under', buttonTitle: 'Click Here', clickEvent: 'titleWithText' },
      { title: 'A modal with a title, an error icon, a text, and a footer', buttonTitle: 'Click Here', clickEvent: 'modalWithTitleError' },
      { title: 'A modal window with a long content inside', buttonTitle: 'Click Here', clickEvent: 'windowModal' },
      { title: 'Custom HTML description and buttons with ARIA labels', buttonTitle: 'Click Here', clickEvent: 'customHtml' },
      { title: 'Rating popup', buttonTitle: 'Click Here', clickEvent: 'ratingPopup' },
      { title: 'A custom top positioned dialog', buttonTitle: 'Click Here', clickEvent: 'customTopEnd' },
      { title: 'A custom center positioned dialog', buttonTitle: 'Click Here', clickEvent: 'customCenter' },
      { title: 'A custom bottom positioned dialog', buttonTitle: 'Click Here', clickEvent: 'customBottom' },
      { title: 'Custom animation Tada', buttonTitle: 'Click Here', clickEvent: 'animationTada' },
      { title: 'Custom animation Swing', buttonTitle: 'Click Here', clickEvent: 'animationSwing' },
      { title: 'Custom animation Jello', buttonTitle: 'Click Here', clickEvent: 'animationJello' },
      { title: 'Custom animation Flip', buttonTitle: 'Click Here', clickEvent: 'animationFlip' },
      { title: 'A confirm dialog, with a function attached', buttonTitle: 'Click Here', clickEvent: 'confirmDialogFunction' },
      { title: 'Passing a parameter, you can execute something else for "Cancel', buttonTitle: 'Click Here', clickEvent: 'confirmDialogPassingparameter' },
      { title: 'A message with a custom image and CSS animation disabled', buttonTitle: 'Click Here', clickEvent: 'confirmDialogWithImage' },
      { title: 'Custom width, padding, background and animated Image', buttonTitle: 'Click Here', clickEvent: 'confirmDialogWithImage' },
      { title: 'AJAX request example', buttonTitle: 'Click Here', clickEvent: 'ajaxRequest' },
      { title: 'Dynamic queue example', buttonTitle: 'Click Here', clickEvent: 'dynamicQuery' },
      { title: 'Timer function example', buttonTitle: 'Click Here', clickEvent: 'timerFunction' },

    ]

  }

  ngOnInit() {
  }

  normalAlert() {
    Swal.fire(
      'Good job!',
      'You clicked the button!',
      'success',
    )
  }

  /*##### */
  basicMessage() {
    Swal.fire('Welcome To Enappd');

  }

  titleWithText() {
    Swal.fire({
      type: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
    })
  }

  errorMessage() {
    Swal.fire('Oops...',
      'Something went wrong!',
      'error')
  }
  modalWithTitleError() {
    Swal.fire({
      type: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href>Why do I have this issue?</a>'
    })
  }

  windowModal() {
    Swal.fire({
      imageUrl: 'http://placekitten.com/300/300',
      imageHeight: 300,
      imageAlt: 'A tall image',
    })
  }

  customHtml() {
    Swal.fire({
      title: '<strong>Enappd <u>Starter</u></strong>',
      type: 'info',
      html:
        'You can buy  <b>this Starter kit by</b>, ' +
        '<a href="https://store.enappd.com/product/ionic-4-full-app/">Click Here</a> ' +
        'and other Starter Kit',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Buy!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText:
        '<i class="fa fa-thumbs-down"></i> Cancel',
      cancelButtonAriaLabel: 'Thumbs down',
    })
  }

  ratingPopup(){
    Swal.fire({
      title: 'Rate your ride',
      type: 'info',
      html:
        "<div class='custom-class'><div class='star-five'></div><div class=\'star-five'></div><div class='star-five'></div></div>",
      showCloseButton: false,
      showCancelButton: false,
      showConfirmButton: false
    })
  }

  customTopEnd() {
    Swal.fire({
      position: 'top-end',
      type: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }

  customCenter() {
    Swal.fire({
      position: 'center',
      type: 'success',
      title: 'Your work has been saved',
      showConfirmButton: true,
      timer: 1500
    })
  }
  customBottom() {
    Swal.fire({
      position: 'bottom',
      type: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }

  animationTada() {
    Swal.fire({
      title: 'Custom animation with Animate.css using tada Effect',
      animation: false,
      customClass: {
        popup: 'animated tada'
      }
    })
  }

  animationSwing() {
    Swal.fire({
      title: 'Custom animation with Animate.css using swing Effect',
      animation: false,
      customClass: {
        popup: 'animated swing'
      }
    })
  }

  animationJello() {
    Swal.fire({
      title: 'Custom animation with Animate.css using jello Effect',
      animation: false,
      customClass: {
        popup: 'animated jello'
      }
    })
  }
  animationFlip() {
    Swal.fire({
      title: 'Custom animation with Animate.css using flip Effect',
      animation: false,
      customClass: {
        popup: 'animated flip'
      }
    })
  }

  confirmDialogFunction() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  confirmDialogPassingparameter() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: true,
    })

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } else if (
        // Read more about handling dismissals
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

  confirmDialogWithImage() {
    Swal.fire({
      title: 'Sweet!',
      text: 'Modal with a custom image.',
      imageUrl: 'https://unsplash.it/400/200',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      animation: false
    })
  }

  ajaxRequest() {
    Swal.fire({
      title: 'Submit your Github username',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Look up',
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        return fetch(`//api.github.com/users/${login}`)
          .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText)
            }
            return response.json()
          })
          .catch(error => {
            Swal.showValidationMessage(
              `Request failed: ${error}`
            )
          })
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url
        })
      }
    })

  }

  dynamicQuery() {
    const ipAPI = 'https://api.ipify.org?format=json'

    Swal.queue([{
      title: 'Your public IP',
      confirmButtonText: 'Show my public IP',
      text:
        'Your public IP will be received ' +
        'via AJAX request',
      showLoaderOnConfirm: true,
      preConfirm: () => {
        return fetch(ipAPI)
          .then(response => response.json())
          .then(data => Swal.insertQueueStep(data.ip))
          .catch(() => {
            Swal.insertQueueStep({
              type: 'error',
              title: 'Unable to get your public IP'
            })
          })
      }
    }])
  }


  timerFunction() {
    let timerInterval
    Swal.fire({
      title: 'Auto close alert!',
      html:
        'I will close in <strong></strong> seconds.<br/><br/>' +
        "<button id='increase' class='btn btn-warning'>" +
        'I need 5 more seconds!' +
        '</button><br/>' +
        "<button id='stop' class='btn btn-danger'>" +
        'Please stop the timer!!' +
        '</button><br/>' +
        "<button id='resume' class='btn btn-success' disabled>" +
        'Phew... you can restart now!' +
        '</button><br/>' +
        "<button id='toggle' class='btn btn-primary'>" +
        'Toggle' +
        '</button>',
      timer: 10000,
      onBeforeOpen: () => {
        const content = Swal.getContent()
        const $ = content.querySelector.bind(content)

        const stop = $('#stop')
        const resume = $('#resume')
        const toggle = $('#toggle')
        const increase = $('#increase')

        Swal.showLoading()

        function toggleButtons() {
          stop.disabled = !Swal.isTimerRunning()
          resume.disabled = Swal.isTimerRunning()
        }

        stop.addEventListener('click', () => {
          Swal.stopTimer()
          toggleButtons()
        })

        resume.addEventListener('click', () => {
          Swal.resumeTimer()
          toggleButtons()
        })

        toggle.addEventListener('click', () => {
          Swal.toggleTimer()
          toggleButtons()
        })

        increase.addEventListener('click', () => {
          Swal.increaseTimer(5000)
        })

        timerInterval = setInterval(() => {
          Swal.getContent().querySelector('strong')
            .textContent = (Swal.getTimerLeft() / 1000)
              .toFixed(0)
        }, 100)
      },
      onClose: () => {
        clearInterval(timerInterval)
      }
    })
  }

}
