const initialState = " ";

const changeEmail = (state = initialState, action) => {
    if(action.type === "EMAIL"){
        return action.email;
    }
    return state;
}

export default changeEmail;