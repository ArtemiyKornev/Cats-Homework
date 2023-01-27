const cardsContainer = document.querySelector('.cards');
const btnOpenPopupForm = document.querySelector('#add');
const btnClosePopupForm = document.querySelector('#close-btn');
const formAddCat = document.querySelector('#popup-form-cat');
const popupAddCat = new Popup('popup-add-cats');
popupAddCat.setEventListener();


function handleFormAddCat(e) {
  e.preventDefault();
  console.log(formAddCat.elements);
  const elementsFormCat = [...formAddCat.elements];
  const dataFromForm = serializeForm(elementsFormCat);
  api.addNewCat(dataFromForm);
  createCat(dataFromForm);
  popupAddCat.close();
  }

cats.forEach((cat) =>createCat(cat));

  // const cardInstance = new Card(cat, '#card-template');
  // console.log({cardInstance});
  // const newCardElement = cardInstance.getElement();
  // cardsContainer.append(newCardElement);

  

  btnOpenPopupForm.addEventListener('click', () => popupAddCat.open());

  //btnClosePopupForm.addEventListener('click', () => popupAddCat.close());
  formAddCat.addEventListener('submit', handleFormAddCat);


function deleteCat(cat) {
  console.log(cat);
  api.deleteCatById(cat.id);
}

function handleFormAddCat(e) {
  e.preventDefault();
  console.log(formAddCat.elements);

 const elementsFormCat = [...formAddCat.elements];
 const dataFromForm = serializeForm(elementsFormCat);

createCat(dataFromForm);
 popupAddCat.close();
}
cats.forEach((cat) => {
createCat(cat);
});


api.getAllCats().then((data) =>
  data.forEach((cat) => {
    createCat(cat);
    const btnDelete = document.addEventListener('click', () =>
      deleteCat(cat)
    );
  })
);

 api.deleteCatById('');