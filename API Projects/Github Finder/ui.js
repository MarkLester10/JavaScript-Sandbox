class UI{
    constructor(){
        this.profile = document.getElementById("profile")
        this.searchUser = document.getElementById("searchUser");
        this.message = document.getElementById("message");
    }

    showProfile(user){
        this.profile.innerHTML = `
        <div class="jumbotron">
        <div class="row">
            <div class="col-md-3 h-100 w-100 text-center">
            <img class="img-fluid w-100" src="${user.avatar_url}">
            </div>
            <div class="col-md-9 p-2 col-sm-12">
            <h1 class="display-5 text-center">${user.name}</h1>
            <p>Followers <span class="badge badge-success badge-pill">${user.followers}</span></p>
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
        <li class="list-group-item d-flex justify-content-between align-items-center border border-light mb-2">
          Company
          <span class="badge badge-primary badge p-3">${(user.company) ? user.company : "N/A"}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center border border-light mb-2">
          Website/Blog
          <span class="badge badge-primary badge p-3">${(user.blog) ? user.blog : "N/A"}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center border border-light mb-2">
          Location
          <span class="badge badge-primary badge p-3">${user.location}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center border border-light mb-2">
          Member Since
          <span class="badge badge-primary badge p-3">${new Date(user.created_at).getUTCFullYear()}</span>
        </li>
      </ul>
            </div>
        </div>
        
        <hr class="my-4">
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
          <p class="lead">
            <a class="btn btn-outline-primary btn-block btn-md" href="${user.html_url}" role="button" target="_blank">Visit on Github</a>
          </p>
        </div>
        `
    }

    //Show repos
    showRepos(repos){
      let output = '';
      repos.forEach((repo)=>{
        output+=`
        <div class="card bg-light mb-3 bg-dark">
        <div class="card-body">
          <div class="row">
          <div class="col-md-6">
          <a href="${repo.html_url}" target="_blank" class="text-white btn btn-outline-success">${repo.name}</a>
          </div>
          <div class="col-md-6 my-auto">

          <span class="badge badge-warning badge-pill">Stars: ${repo.stargazers_count}</span>

          <span class="badge badge-danger badge-pill">Watchers: ${repo.watchers_count}</span>

          <span class="badge badge-info badge-pill">Forks: ${repo.forks_count}</span>

          </div>
          </div>
        </div>
      </div>
        `
      });

      //output
    document.getElementById("repos").innerHTML = output;
    }

    //show alert
    showAlert(message, className1){
      
      this.searchUser.classList.add(className1);
      this.message.className = "invalid-feedback mt-2"
      this.message.textContent = message;

      setTimeout(()=>{
        this.searchUser.classList.remove(className1);
        this.message.innerHTML = '';
        this.message.className = ''
        this.message.textContent = '';
      }, 3000)
    }

    //clear profile
    clearProfile(){
      this.profile.innerHTML = '';
    }

}