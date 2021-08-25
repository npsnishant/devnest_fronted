const initialState = " ";

const changeName = (state = initialState, action) => {
    if(action.type === "NAME"){
        return action.name;
    }
    return state;
}

export default changeName;