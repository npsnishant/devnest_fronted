const name = (val) => {
    return{
        type: "NAME",
        name: val,
    }
}

const email = (val) => {
    return{
        type: "EMAIL",
        email: val,
    }
}

export {name, email};