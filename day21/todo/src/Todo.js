import React, { useState } from 'react'

const Todo = () => {

    const [inputData, setInputdata] = useState('');
    const [inputCalories, setInputcalories] = useState('');
    const [inputItems, setinputItems] = useState([]);
    const [caloriesItems, setCaloriesItems] = useState([]);
    const [isEditing, setIsEditing] = useState(false);



    const addItem = () => {
        if (inputData && inputCalories) {
            setinputItems([...inputItems, inputData]);
            setCaloriesItems([...caloriesItems, inputCalories])
            setInputdata('');
            setInputcalories('');
        }

    }


    const deleteItem = (id) => {
        // console.log(id);
        const updateItems = inputItems.filter((elem, index) => {
            return index !== id;
        })

        const updateCalories = caloriesItems.filter((elem, index) => {
            return index !== id;
        })

        setinputItems(updateItems);
        setCaloriesItems(updateCalories)
    }


    return (
        <>
            <div className="form-container">
                <form>
                    <div className="input-item">
                        <input type="text" placeholder="Enter items" required
                            value={inputData}
                            onChange={(e) => setInputdata(e.target.value)}
                        />
                        <input type="number" placeholder="Your calories" required
                            value={inputCalories}
                            onChange={(e) => setInputcalories(e.target.value)}
                        />
                    </div>
                    <div>
                        <a className="btn" onClick={addItem}>Add Item</a>
                    </div>
                </form>
            </div>

            <div className="show-item">

                {
                    inputItems.map((elem, index) => {

                        var cal = caloriesItems[index];

                        return (

                            <div className="show-container" key={index}>

                                <h2 className="text">{elem}</h2>
                                <p className="des">You have consumed {cal} calories</p>
                                <a className="delete-btn" onClick={() => deleteItem(index)} >Delete</a>
                                <a className="edit-btn" onClick={() => setIsEditing(!isEditing)}>
                                    Edit</a>

                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}

export default Todo
