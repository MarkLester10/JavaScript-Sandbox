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
            }else{
                //show profile
                ui.showProfile(data.profile)
            }
        })
    }else{
        //clear Profile
    }
})