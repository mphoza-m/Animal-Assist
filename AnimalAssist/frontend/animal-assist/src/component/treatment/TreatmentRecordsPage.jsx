import NavBar from "../NavBar";
import { Link } from "react-router-dom";
function TreatmentRecordsPage(){
    return (<div>
        <div>
            <NavBar/>
        </div>
        <div className="is-flex is-justify-content-center">
            <h1 className="is-size-3">Treatment Records</h1>
        </div>
        <div className="card" style={{height: "80dvh"}}>
        <div className="card-content">
            <div className="is-flex is-justify-content-space-evenly">
                <div>
                    <h3 className="is-size-5">Filters</h3>
                    <br/>
                    <label>Type</label>
                    <div className="control ml-5">
                    <input type="checkbox" name="type"/>
                    <label>Dog</label>
                    <br/>
                    <input type="checkbox" name="type"/>
                    <label>Cat</label>
                    </div>
                    <label>Age</label>
                    <div className="ml-5">
                    <input type="checkbox"/>
                    <label>Baby</label>
                    <br/>
                    <input type="checkbox"/>
                    <label>Young</label>
                    <br/>
                    <input type="checkbox"/>
                    <label>Adult</label>
                    </div>
                    <label>Gender</label>
                    <div className="ml-5">
                    <input type="checkbox"/>
                    <label>Male</label>
                    <br/>
                    <input type="checkbox"/>
                    <label>Female</label>
                    </div>
                    <br/>
                    <label>Year</label>
                    <br/>
                    <div className="select is-dark" style={{marginLeft: "15px"}}>
                            <select style={{width: "100px"}}>
                            <option></option>
                            <option>2024</option>
                            <option>2023</option>
                            <option>2022</option>
                            <option>2021</option>
                            <option>2020</option>
                            </select>
                    </div>
                    <br/>
                    <div className="mt-5">
                        <button className="button is-dark" style={{width: "120px"}}>Apply</button>
                    </div>
                </div>
                <div>
                    <div className="is-flex mb-3">
                        <input className="input is-dark mr-3" placeholer="Search word"/>
                        <button className="button is-dark">Search</button>
                    </div>

                    <table className="table is-bordered is-striped">
                        <thead style={{backgroundColor: "darkgray"}}>
                           <tr>
                            <th>Treatment ID</th>
                            <th>Treatment Date</th>
                            <th>Vet Assist</th>
                            </tr> 
                        </thead>
                        <tbody>
                            <tr>
                                <td>19</td>
                                <td>2022/10/12</td>
                                <td>John Doe</td>
                            </tr>
                            <tr>
                                <td>23</td>
                                <td>2022/10/12</td>
                                <td>Jane Doe</td>
                            </tr>
                            <tr>
                                <td>41</td>
                                <td>2021/12/11</td>
                                <td>John Doe</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="is-flex is-flex-direction-column">
                    <button className="button is-info mb-3" style={{width: "150px"}}>View</button>
                    <Link to="/addtreatment">
                        <button className="button is-dark mb-3" style={{width: "150px"}}>Add</button> 
                    </Link>
                    <button className="button is-warning mb-3" style={{width: "150px"}}>Edit</button>
                    <button className="button is-danger mb-3" style={{width: "150px"}}>Delete</button>
                </div>
            </div>
        </div>
        </div>
    </div>)
}

export default TreatmentRecordsPage;