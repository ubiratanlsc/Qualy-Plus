import React from 'react'
import './Menu.css'
import './bootstrap.css'
import Prancheta2 from '../img/Prancheta2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCogs, faDiagnoses, faFolder, faHeartbeat, faHistory, faIdCardAlt, faProcedures, faUserMd, faUserNurse, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import img from '../svg/img.svg'

export default (props) => {
    return (
        <div class="tela-principal">
            <div class="painel">
                <img src={Prancheta2} alt=""></img>
                <div class="controllers">
                    <ul>
                        <li><Link to="/triagem"className="btn btn-outline-info btn-lg btn-block"><FontAwesomeIcon className="icons" icon={faUserNurse}  />Triagens</Link></li>
                        <li><Link to="/fichas" className="btn btn-outline-info btn-lg btn-block"><FontAwesomeIcon className="icons" icon={faFolder} />Pacientes</Link></li>
                        <li><Link to="" className="btn btn-outline-info btn-lg btn-block"><FontAwesomeIcon className="icons" icon={faHistory} />Histórico</Link></li>
                        <li><Link to="" className="btn btn-outline-info btn-lg btn-block"><FontAwesomeIcon className="icons" icon={faHeartbeat} />Sintómas</Link></li>
                        <li><Link to="" className="btn btn-outline-info btn-lg btn-block"><FontAwesomeIcon className="icons" icon={faDiagnoses} />Doenças</Link></li>
                        <li><Link to="/Leitos" className="btn btn-outline-info btn-lg btn-block"><FontAwesomeIcon className="icons" icon={faProcedures} />Leitos</Link></li>
                        <li><Link to="/Medicos" className="btn btn-outline-info btn-lg btn-block"><FontAwesomeIcon className="icons" icon={faUserMd} />Médicos</Link></li>
                        <li><Link to="/Responsaveis" className="btn btn-outline-info btn-lg btn-block"><FontAwesomeIcon className="icons" icon={faUserSecret} />Responsáveis</Link></li>
                        <li><Link to="" className="btn btn-outline-info btn-lg btn-block"><FontAwesomeIcon className="icons" icon={faIdCardAlt} />Triagem Sintómas</Link></li>
                    </ul>
                </div>
                <div class="config">
                    <p>Version: 00001-00</p>
                    <a href="# "><FontAwesomeIcon className="icons" icon={faCogs} size="2x" /></a>
                </div>
            </div>
            <div class="dashboard">
                <div class="dashboard-bl1">
                    <div class="hospital">
    <p>{props.title}</p>
                    </div>
                    <div class="user">
                        <img src={img} alt=""></img>
              <p>User</p>
            </div>
                    </div>
                    <div className="conteudo">
                        {props.children}
                    </div>
                </div>
            </div>      
    )
}