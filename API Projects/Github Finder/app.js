//Search input UI Variables
const searchUser = document.getElementById("searchUser");

//Event Listeners
searchUser.addEventListener("keyup", (e)=>{
    const userText = e.target.value;
    //Init GitHub class
    const github = new GitHub();
    //Init UI Class
    const ui = new UI();

    if(userText != ''){

        github.getUser(userText)
        .then(data=>{
            if(data.profile.message === "Not Found"){
                //show alert
                ui.showAlert("Oh snap! User not found, try submitting again.", "is-invalid")
            }else{
                //show profile
                e.target.classList.remove("is-invalid");
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })
    }else{
        //clear Profile
        ui.clearProfile();
    }
})