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

function deleteCat(cat) {
  console.log(cat);
  api.deleteCatById(cat.id);
}

function handleFormAddCat(e) {
  e.preventDefault();
 
 const elementsFormCat = [...formAddCat.elements];
 const dataFromForm = serializeForm(elementsFormCat);

createCat(dataFromForm);
 popupAddCat.close();
}
cats.forEach((cat) => {
createCat(cat);
});

btnOpenPopupForm.addEventListener('click', () => popupAddCat.open());
btnClosePopupForm.addEventListener('click', () => popupAddCat.close());
formAddCat.addEventListener('submit', handleFormAddCat);

api.getAllCats().then((data) =>
  data.forEach((cat) => {
    createCat(cat);
    const btnDelete = document.addEventListener('click', () =>
      deleteCat(cat)
    );
  })
);

 api.deleteCatById('');

 function checkLocalStorage() {
  const localData = JSON.parse(localStorage.getItem('cats'));
  const getTimeExpires = localStorage.getItem('catsRefresh');

  if (localData && localData.length && new Date() < new Date(getTimeExpires)) {
    localData.forEach((data) => createCat(data));
  } else {
    api.getAllCats().then((data) => {
      localStorage.setItem('cats', JSON.stringify(data));
      data.forEach((cat) => {
        createCat(cat);
      });
    });
  
    const setTime = new Date(new Date().getTime() + 5000);
    localStorage.setItem('catsRefresh', setTime);
  }
}
function onClickToEdit(card, id) {
  console.log({ card, id });
  popupEditCat.setContent(card, id,);
  popupEditCat.open(card);
}

checkLocalStorage()