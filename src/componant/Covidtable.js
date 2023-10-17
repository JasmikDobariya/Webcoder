import React, { useEffect, useState } from 'react'


function Covidtable() {

    const [Data, setData] = useState([]);

    const getcoviddata = async () => {
        const res = await fetch('https://data.covid19india.org/data.json')
        const resdata = await res.json();
        setData(resdata.statewise)
        console.log(resdata.statewise)
    }

    useEffect(() => {
        // getcoviddata();
    }, []);

    return (
        <div className=''>
            <div className='container-fluid '>
                <div>
                    <h1 className='text-center my-5 '>
                        India Covid-19 Table
                    </h1>
                </div>
                <div className='table-responsive'>
                    <table className='table table-hover' >
                        <thead className=''>
                            <tr className='table-dark text-center'>
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>Death</th>
                                <th>active</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        {
                            Data.map((el, idx) => {
                                return (
                                    <tbody key={idx}>
                                        <tr className='table-secondary text-center ' >
                                            <th>{el.state}</th>
                                            <td>{el.confirmed}</td>
                                            <td>{el.recovered}</td>
                                            <td>{el.deaths}</td>
                                            <td>{el.active}</td>
                                            <td>{el.lastupdatedtime}</td>
                                        </tr>
                                    </tbody>

                                )
                            })
                        }


                    </table>
                </div>
            </div>
        </div>
    )
}

export default Covidtable