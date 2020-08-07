class GitHub {
    constructor(){
        this.client_id = '9b3172ccd57ebc324617'
        this.client_secret = '6b0c89266bc9442c2e382012787a22da451bd7ab'
    }
    

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        //return an object
        return{
            profile
        }
    }
}