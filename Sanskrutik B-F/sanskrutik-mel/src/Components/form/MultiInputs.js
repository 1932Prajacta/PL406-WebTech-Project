import Reat from 'react'
import './MultiInputs.css'

const MultiInputs = () => {
    return(
        <>
        <form action="">
            <div></div>
        </form>
        <form>
            <div>
                <label>Account type:</label>
                <select>
                    <option>Personal Account</option>
                    <option>Group Account</option>
                </select>
            </div>
            
            <div>
                <label> Email : </label>
                <input type="email"/>
            </div>
            <div>
                <label>Name:</label>
                <input type="text"/>
            </div>
            <div>
                <label>Date of Birth :</label>
                <input type="date"/>
            </div>
        <input type="submit" value="Submit" />
      </form>
        </>
        )
}

export default MultiInputs