class UI{
    constructor(){
        this.profile = document.getElementById("profile")
    }

    showProfile(user){
        this.profile.innerHTML = `
        <div class="jumbotron">
        <div class="row">
            <div class="col-md-3">
            <img class="img-fluid" src="${user.avatar_url}">
            </div>
            <div class="col-md-9 p-2">
            <h1 class="display-5">${user.name}</h1>
            <p>Followers <span class="badge badge-primary badge-pill">${user.followers}</span></p>
            <p class="lead">${(user.bio) ? user.bio : "User doesn't have bio"}</p>
            </div>
        </div>
        
        <br>

        <div class="row">
            <div class="col">
            <ul class="list-group d-flex flex-row" style="justify-content: space-evenly;">
            <li class="bg-dark text-white list-group-item d-flex justify-content-between align-items-center">
                Public Repos &ThickSpace; <span class="badge badge-primary badge-pill">${user.public_repos}</span>
            </li>
            <li class="bg-dark text-white list-group-item d-flex justify-content-between align-items-center">
                Public Gists &ThickSpace; <span class="badge badge-primary badge-pill">${user.public_gists}</span>
            </li>
            <li class="bg-dark text-white list-group-item d-flex justify-content-between align-items-center">
               Following &ThickSpace; <span class="badge badge-primary badge-pill">${user.following}</span>
            </li>
        </ul>
        <br>
        
        <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Company
          <span class="badge badge-primary badge p-3">${user.compant}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Website/Blog
          <span class="badge badge-primary badge p-3">${user.blog}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Location
          <span class="badge badge-primary badge p-3">${user.location}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Member Since
          <span class="badge badge-primary badge p-3">${user.created_at}</span>
        </li>
      </ul>
            </div>
        </div>
        
        <hr class="my-4">
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
        <p class="lead">
          <a class="btn btn-primary btn-lg" href="${user.html_url}" role="button" target="_blank">Visit on Github</a>
        </p>
      </div>
        `
    }
}