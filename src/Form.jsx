import React from 'react'
import { getDatabase, ref, set } from "firebase/database";
import {app} from "./FirebaseConfig"

export default function Form() {

    const db = getDatabase(app);

    let UserData=(e)=>{
        e.preventDefault()

        let userObj={
            name:e.target.uname.value,
            mobile:e.target.umobile.value,
            email:e.target.uemail.value,
            password:e.target.upassword.value,

        }

        set(ref(db , "BCA-1/" ),userObj)

        alert("done")
    }

    return (
        <div className='m-5 bg-danger p-4 ' >
            <form onSubmit={UserData} >
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Name</label>
                    <input type="text" name='uname' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Mobile Number</label>
                    <input type="text"  name='umobile' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="text"  name='uemail' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="text"  name='upassword' class="form-control" id="exampleInputPassword1" />
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
