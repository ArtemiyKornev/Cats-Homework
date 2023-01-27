// class Popup {
//   constructor(className) {
//     this._className = className;
//     this.popup = document.querySelector(`.${className}`);
//     this._handleEscUp = this._handleEscUp.bind(this);
//   }


//   // закрывает форму при нажатии на escape
//   _handleEscUp(evt) {
//     if (evt.key === 'Escape') {
//       this.close();
//     }
//   }

//   // метод, который открывает форму
//   open() {
//     this.popup.classList.add('popup_active');
//     document.addEventListener('keyup', this._handleEscUp);
//   }

//   // метод, который закрывает форму
//   close() {
//     this.popup.classList.remove('popup_active');
//     document.removeEventListener('keyup', this._handleEscUp);
//   }

  
//   // метод, который слушает событие click и закрывает форму по условию
//   setEventListener() {
//     this.popup.addEventListener('click', (evt) => {
//       if (
//         evt.target.classList.contains(this._className) ||
//         evt.target.closest('.popup__close')
//       ) {
//         this.close();
//       }
//     });
//   }
// }

class Popup {
  constructor(className) {
    this._className = className;
    this.popup = document.querySelector(`.${className}`);
    this._handEsc = this._handEsc.bind(this);
  }

  _handEsc(e) {
  if (e.key==='Escape') {
  this.close();
  }
  }

  open() {
    this.popup.classList.add('popup_active');
    document.addEventListener('keyup', this._handEsc)
  }

  close() {
    this.popup.classList.remove('popup_active');
    document.removeEventListener('keyup', this._handEsc)
  }

setEventListener() {
  this.popup.addEventListener('click', (e)=>{
    if (e.target.classList.contains(this._className) || e.target.closest('.popup__close')) {
      this.close()
    }
  })
}
}