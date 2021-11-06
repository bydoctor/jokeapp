class UnSplashApi{
    constructor() {
        this.baseURL='https://api.unsplash.com';
        this.clientID='Client-ID your_token';
        this.axiosNesne=axios.create({
            baseURL:this.baseURL,
            headers:{
                Authorization:this.clientID,
            },
            params:{
                query:'funny',
                count:'1',
                orientation:'landscape'
            }

        });

    }
    async randomResimGetir(){
        try{
            const resimResponse=await this.axiosNesne.get('/photos/random');
            //console.log(resimResponse.data[0].urls.regular)
            return resimResponse.data[0].urls.regular
        }catch (err) {
            console.log(err);
            return 'https://www.wpblog.com/wp-content/uploads/2018/02/4-580x318.jpg';
        }
    }
}