class UI{
  constructor(){
    this.post = document.querySelector("#posts");
    this.titleInput = document.querySelector("#title");
    this.bodyInput = document.querySelector("#body");
    this.idInput = document.querySelector("#id");
    this.postSubmit = document.querySelector(".post-submit");
    this.cancelButton = document.querySelector('.post-cancel');
    this.formState = 'add';
  }

  showPosts(posts){
    let output ='';

    posts.forEach((post) => {
      output += `
      <div class="card mb-3">
        <div class="card-header text-primary"><h4 style="font-weight: 900;">${post.title}</h4></div>
        <div class="card-body">
          <p class="card-text">${post.body}</p>
          <a href="#" class="edit card-link" data-id="${post.id}">
            <i class="fa fa-pencil text-success"></i>
          </a>
          <a href="#" class="delete card-link" data-id="${post.id}">
            <i class="fa fa-remove text-danger"></i>
          </a>
        </div>
      </div>
      `
    });

    this.post.innerHTML = output;
  }

  showAlert(message, className){
    this.clearAlert();

    //Create div
    const div = document.createElement('div');
    //Add classes
    div.className = className;
    //Add text
    div.appendChild(document.createTextNode(message));
    //Get parent
    const container = document.querySelector(".postsContainer");
    //get posts
    const posts = document.querySelector("#posts");
    //insert alert div
    container.insertBefore(div, posts);

    //timeout
    setTimeout(()=>{
     this.clearAlert() 
    }, 3000);

  }

  clearAlert(){
    const currentAlert = document.querySelector(".alert");

    if(currentAlert){
      currentAlert.remove()
    }
  }

  clearFields(){
    this.titleInput.value = "";
    this.bodyInput.value = "";
  }

  fillForm(data){ 
    this.titleInput.value = data.title;
    this.bodyInput.value = data.body;
    this.idInput.value = data.id

    this.changeFormState('edit');
  }

  clearIdInput(){
    this.idInput.value = "";
  }

  changeFormState(type){
    if(type === 'edit'){
      this.postSubmit.textContent = 'Update Post';
      this.postSubmit.className = "btn btn-primary btn-block post-submit"
      this.cancelButton.style.display = "block";
    }else{
      this.postSubmit.textContent = 'Post';
      this.postSubmit.className = "btn btn-success btn-block post-submit";

      //remove cancel button
      this.cancelButton.style.display = "none";
      //Clear id from hidden field
      this.clearIdInput();
      //Clear input text fields
      this.clearFields();
    }
  }
}

export const ui = new UI();