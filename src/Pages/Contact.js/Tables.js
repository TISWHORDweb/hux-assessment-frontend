import React from 'react'
import TableAction from './TableAction'

function Tables() {
    return (
        <div className='container'>
            <div className="Table">
                <div className="table">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">First name</th>
                                <th scope="col">Last name</th>
                                <th scope="col">Phone Number</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>Otto</td>
                                <td className=''>
                                    <TableAction />
                                </td>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>Otto</td>
                                <td className=''>
                                    <TableAction />
                                </td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>Otto</td>
                                <td className='action'>
                                    <TableAction />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Tables