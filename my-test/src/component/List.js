import React from 'react'

const List = () =>{
    return(
        <div>
            <table class="table">
            <thead>
                <tr>
                <th scope="col"></th>
                <th scope="col">Name</th>
                <th scope="col">Gender</th>
                <th scope="col">Moblie Phone</th>
                <th scope="col">Nationality</th>
                <th className="text-right"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row"><input class="" type="checkbox" value="" id="defaultCheck1" /></th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Otto</td>
                <td>
                    <a href="">Edit </a>/
                    <a href=""> Delete</a>
                </td>
                </tr>
            </tbody>
            </table>
        </div>
    );
}

export default List;