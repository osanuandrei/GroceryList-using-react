const apiRequest = async (url = ' ', optionsObj=null, errorMessaje=null) =>{
    try{
        const response = await fetch(url,optionsObj);
        if(!response.ok) throw Error("pls reload the app");

    }
    catch(err){
        errorMessaje= err.message;

    }
    finally{
        return errorMessaje;

    }

}


export default apiRequest;