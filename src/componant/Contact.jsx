import React, { useState } from 'react'

function Contact() {

    const [data, setdata] = useState({
        fullname: '',
        email: '',
        Phone: '',
        massage: '',
    });

    const submiteve = (e) => {

        const { name, value } = e.target;

        setdata((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })




    }

    const submitform = (e) => {
        e.preventDefault();
        alert(`My Name Is ${data.fullname} My E-Mail is ${data.email} My Phone Number Is ${data.Phone} My Massage Is ${data.massage} `)
        setdata({
            fullname: '',
            email: '',
            Phone: '',
            massage: ''
        })
    }

    return (
        <section className='mb-2'>
            <div className='my-5'>
                <h1 className='text-center'>
                   * Contact Us *
                </h1>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <form onSubmit={submitform}>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">FullName</label>
                                <input name='fullname' onChange={submiteve} value={data.fullname} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Full Name" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input name='email' onChange={submiteve} value={data.email} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Phone Number</label>
                                <input name='Phone' onChange={submiteve} value={data.Phone} type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Phone Number" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Massage</label>
                                <textarea name='massage' onChange={submiteve} value={data.massage} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div className="col-12 ">
                                <button type="submit" className="btn btn-primary">Sign in</button>
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </section>

    )
}

export default Contact