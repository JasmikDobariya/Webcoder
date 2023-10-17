import { NavLink } from 'react-router-dom'

function Searchany(props) {
    return (
        <section id='header' className='d-flex align-items-center mb-5'>
            <div className='container-fluid nav-bg' >
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div className='row d-flex align-items-center row_div '>
                            <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 flex-column '>
                                <h1 className='header_div'>
                                    {props.name}
                                </h1>
                                <h5 className='dis_div  my-3'>
                                    Rippling lets you easily manage your employees’ payroll, benefits, expenses, devices, apps & more—in one place.
                                </h5>
                                <div className='mt-5'>
                                    <NavLink to={props.visit} className='btn btn-success'>{props.btnname}</NavLink>
                                </div>
                            </div>
                            <div className='col-lg-6 order-1 order-lg-2 d-flex justify-content-center'>
                                <img className='img-fluid' alt='/ '  src={props.imgsrc} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Searchany