import NavBar from "../NavBar";
import { Link } from "react-router-dom";

function AddStrayPage(){
    return <div>
        <div>
            <NavBar/>
        </div>

        <div className=" is-flex is-justify-content-center mt-5">
        <div className="card">
            <div className="is-flex is-justify-content-center is-size-3">
                <h1>Add Stray</h1>
            </div>

        <div className="is-flex is-justify-content-center mt-5 mb-3 mr-5 ml-5">
        <div className="is-flex is-flex-direction-column">
            <div className="column is-flex ml-3">
                    <label className="mr-5">Type</label>
                    <label className="is-flex mr-5"  style={{marginLeft:"7px"}}>
                        <input type="radio" name="type"/>
                        <p>Cat</p>
                    </label>
                    <label className=" is-flex">
                        <input type="radio" name="type"/>
                        <p>Dog</p>
                    </label>
            </div>
            <div className="column is-flex" style={{marginLeft: "15px"}}>
                <label className="mr-5">Breed</label>
                <div className="select is-dark">
                            <select>
                            <option></option>
                            <option>German Shepered</option>
                            <option>Bulldog</option>
                            </select>
                </div>
            </div>
            <div className="column is-flex" style={{marginLeft: "15px"}} >
                <label className="mr-5">Age</label>
                <div className="select is-dark" style={{marginLeft: "15px"}}>
                            <select>
                            <option></option>
                            <option>Baby</option>
                            <option>Middle aged</option>
                            <option>Old</option>
                            </select>
                </div>
            </div>
            <div className="column is-flex ml-5">
                    <label className="mr-5">Sex</label>
                    <label className="is-flex mr-5"  style={{marginLeft:"7px"}}>
                        <input type="radio" name="sex"/>
                        <p>Male</p>
                    </label>
                        <label className=" is-flex">
                            <input type="radio" name="sex"/>
                            <p>Female</p>
                    </label>
            </div>
            <div className="column is-flex">
                <label>Location</label>
                <input className="input is-dark ml-3" type="text" placeholder="Location captured"/>
            </div>
            <div className="column is-flex">
                <label>Capture Date</label>
                <input className="input is-dark" type="date" placeholder="Date captured"/>
            </div>
            <div className="column is-flex">
                    <label className="mr-5">Status</label>
                    <label className="is-flex mr-5"  style={{marginLeft:"7px"}}>
                        <input type="radio" name="status"/>
                        <p>Still in</p>
                    </label>
                    <label className=" is-flex mr-5">
                            <input type="radio" name="status"/>
                            <p>Return</p>
                    </label>
                    <label className=" is-flex">
                            <input type="radio" name="status"/>
                            <p>Adopt</p>
                    </label>
            </div>
            <div className="column is-flex">
                <label>Return Date</label>
                <input className="input is-dark" type="date" placeholder="Return Date"/>
            </div>
            <hr/>
            <div className="is-flex is-justify-content-center">
                <Link to="/">
                    <button className="button is-light mr-5" type="submit" >Cancel</button>
                </Link>
                <button className="button is-dark" type="submit" >Add</button>
            </div>
        </div>
        </div>
        </div></div>
    </div>
}

export default AddStrayPage;