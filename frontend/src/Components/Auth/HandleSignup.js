import userApi from "../Api/UserApi.js";


const HandleSignup = async (userCred,setDialog) => {

    const res = await userApi.post('/signup', userCred);

    if(res.data.status===true){
        return true;
    }

    else{
        setDialog(res.data.massage)
        return false;
    }
}

export default HandleSignup;