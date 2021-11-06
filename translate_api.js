class TranslateApi{
    constructor(ingilizceSaka) {
        this.baseURL='https://translation.googleapis.com';
        this.aranacakCumle=ingilizceSaka;
        this.axiosNesnesi=axios.create({
           baseURL:this.baseURL,
           params:{
               target:'tr',
               key:'your_token',
               q:this.aranacakCumle
           }
        });
    }
    async ceviriYap(){
        const ceviri=await this.axiosNesnesi.get('/language/translate/v2');
        return ceviri.data.data.translations[0].translatedText;
    }
}