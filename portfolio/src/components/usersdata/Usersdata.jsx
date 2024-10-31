import { useSelector } from "react-redux"
import { useState } from "react"
function Usersdata() {
    var data = useSelector((store) => {
        return store.a
    })
    // console.log(data);
    return (

        <div>
            {
                data.length > 0 ? (
                    <div>
                        {
                            data.map((ele, ind) => {
                                return <div className="d-flex justify-content-evenly w-50 " key={ind}>
                                    <dl>
                                        <dt>Name</dt>
                                        <dd>{ele.name}</dd>
                                    </dl>
                                    <dl>
                                        <dt>Number</dt>
                                        <dd>{ele.mobile}</dd>
                                    </dl>
                                    <dl>
                                        <dt>email</dt>
                                        <dd>{ele.email}</dd>
                                    </dl>
                                </div>
                            })
                        }
                    </div>
                ) : (<h2>No data</h2>)
            }
        </div>
    )
}
export default Usersdata