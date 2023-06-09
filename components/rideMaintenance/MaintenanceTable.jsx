import { useState } from "react"
import maintenanceVideos from './maintenanceVideos.js'



export default function MaintenanceTable(props) {

    const [status, setStatus] = useState('pecas')
    const [videoSelected, setVideoSelected] = useState(maintenanceVideos()[3])




    return (
        <>

            <div className="row">
                <div className={`col-6 text-center px-2 ${status === 'pecas' ? 'border-bottom' : ''}`} data-bs-target="#optionsCarousel" data-bs-slide-to="0" >
                    <span onClick={() => setStatus('pecas')} data-bs-target="#optionsCarousel" data-bs-slide-to="0"
                        className={status === 'pecas' ? 'fw-bold' : ''}><small>Peças e Ferramentas</small></span>
                </div>
                <div className={`col-6 text-center px-2 ${status === 'videos' ? 'border-bottom' : ''}`} data-bs-target="#optionsCarousel" data-bs-slide-to="1">
                    <span onClick={() => setStatus('videos')}
                        className={status === 'videos' ? 'fw-bold' : ''}><small>Mais Vídeos</small></span>
                </div>
            </div>
            <div>
                <div id="optionsCarousel" className="carousel slide" data-bs-touch="false" data-bs-interval='false' >
                    <div className="carousel-inner" style={{ height: "40vh", overflowY: "scroll" }}>
                        <div className={`carousel-item mt-3 ${status === 'pecas' ? 'active' : ''}`} >
                            <span className=""><small>Peças</small></span>
                            {maintenanceVideos().find(elem => elem.id === props.videoSelected).parts.map(elem => {
                                return (
                                    <div className="row  my-3" type="button">
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <img src={elem.image} alt="" height={80} style={{ borderRadius: '50%' }} />
                                            </div>
                                            <div className="col px-3">
                                                <div className="d-flex">
                                                    <div className="col">
                                                        <span style={{ fontSize: '14px' }}>{elem.name}</span>
                                                    </div>
                                                    <div className="col d-flex justify-content-end">
                                                        <span type="button"
                                                            className="badge text-bg-secondary">Comprar</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                            <hr />
                            <span><small>Ferramentas</small></span>

                            {maintenanceVideos().find(elem => elem.id === props.videoSelected).tools.map(elem => {
                                return (
                                    <div className="row  my-3" type="button">
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <img src={elem.image} alt="" height={80} style={{ borderRadius: '50%' }} />
                                            </div>
                                            <div className="col px-3">
                                                <div className="d-flex">
                                                    <div className="col">
                                                        <span style={{ fontSize: '14px' }}>{elem.name}</span>
                                                    </div>
                                                    <div className="col d-flex justify-content-end">
                                                        <span type="button"
                                                            className="badge text-bg-secondary">Comprar</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}



                        </div>


                        <div className={`carousel-item ${status === 'videos' ? 'active' : ''}`} >
                            {maintenanceVideos().map(elem => {
                                return (

                                    <div className="row  my-3" type="button" onClick={() => { props.setVideoSelected(elem.id), setStatus('pecas') }}>
                                        <div className=" d-flex">

                                            <div>
                                                <img src={elem.image} alt="" height={80} />
                                            </div>
                                            <div className="col px-2">
                                                <div className="d-flex slign-items-top">
                                                    <span style={{ fontSize: '14px' }}>{elem.name}</span>
                                                </div>
                                                <div>
                                                    <span style={{ fontSize: '10px' }}>{elem.level}</span>
                                                </div>
                                                <div>
                                                    <span style={{ fontSize: '10px' }}>{elem.duration}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )

                            })}
                        </div>
                    </div>
                </div>
            </div>

        </>

        // <small>
        //     <table className="table table-dark">
        //         <thead>
        //             <tr>
        //                 <td className="text-center">Vídeos</td>
        //                 <td className="text-center">Ferramentas</td>
        //                 <td className="text-center">Peças</td>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             <tr className="d-flex" >
        //                 <td colSpan={3}>

        //                     <div className="col">
        //                         <img src="/MAINTENENCE_IMAGE_2.png" alt="" height={100} />
        //                     </div>
        //                     <div className="col  justify-content-between bg-light">
        //                         <div>
        //                             <span className="fs-5">Troca de pastilhas de freio</span>
        //                         </div>
        //                         <div>
        //                             <span>Nível Fácil</span>
        //                         </div>
        //                         <div>
        //                             <span>2 min</span>
        //                         </div>


        //                     </div>
        //                 </td>
        //             </tr>

        //         </tbody>

        //     </table>
        // </small>
    )
}