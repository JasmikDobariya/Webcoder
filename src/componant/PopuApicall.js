import React, { useEffect, useState } from 'react'

function PopuApicall() {

    const [Api, setApi] = useState([]);


    const getapi = async () => {
        const res = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
        const resdata = await res.json();
        setApi(resdata.data)
        console.log(resdata.data)
    }

    useEffect(() => {
        // getapi();
    }, []);
    return (
        <div className=''>
            <div className='container-fluid '>
                <div>
                    <h1 className='text-center my-5'>
                        Population Table
                    </h1>
                </div>
                <div className='table-responsive'>
                    <table className='table table-hover' >
                        <thead className=''>
                            <tr className='table-dark text-center'>
                                <th>Nation</th>
                                <th>Population</th>
                                <th>Year</th>
                               
                            </tr>
                        </thead>
                        {
                            Api.map((el, idx) => {
                                return (
                                    <tbody key={idx}>
                                        <tr className='table-success text-center ' >
                                            <th>{el.Nation}</th>
                                            <td>{el.Population}</td>
                                            <td>{el.Year}</td>
                                           
                                           
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

export default PopuApicall