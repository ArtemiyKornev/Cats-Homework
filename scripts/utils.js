function createCat(data) {
  const cardInstance = new Card(data, '#card-template');
  const newCardElement = cardInstance.getElement();
  cardsContainer.append(newCardElement);
}

// функция, которая будет доставать value из html разметки формы, которую ввел пользователь
function serializeForm(elements) {
  const formData = {};
  elements.forEach((input) => {
    console.log(input.name);
    // console.log(input.type);
    if (input.type === 'submit') return;
    if (input.type !== 'checkbox') {
      formData[input.name] = input.value;
    }
    if (input.type === 'checkbox') {
      formData[input.name] = input.checked;
    }
  });
  return formData;
}



// длинная форма =>  formData[input.name] = input.value;
// if (input.name === 'age') {
//   formData.age = input.value;
// }
// if (input.name === 'name') {
//   formData.name = input.value;
// }
// if (input.name === 'image') {
//   formData.image = input.value;
// }
// if (input.name === 'description') {
//   formData.description = input.value;
// }
// if (input.name === 'id') {
//   formData.id = input.value;
// }
// if (input.name === 'rate') {
//   formData.rate = input.value;
// }
