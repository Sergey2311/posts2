console.log('worked');

// form->input->button

const rootEl = document.getElementById('root');

const links = [];

const addFormEl = document.createElement('form');
addFormEl.innerHTML = `
<p></p>
<input class="form-control" type="text" id="inputHttps">

<form class="form-inline">
  <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Какой пост</label>
  <select class="form-control" data-type="select">
    <option selected>Тип</option>
    <option value="1">Простой пост</option>
    <option value="2">С картинкой</option>
    <option value="3">С видео</option>
    <option value="4">С музыкой</option>
  </select>

  <div class="custom-control custom-checkbox my-1 mr-sm-2">
    <input type="checkbox" class="custom-control-input" id="customControlInline">
  </div>

  <button type="button" class="btn btn-primary my-1">Щёлкай</button>
</form>
`;




rootEl.appendChild(addFormEl);


