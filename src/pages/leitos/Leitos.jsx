import React, { useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Menu from '../../components/Menu'
import apiGerenciador from '../../services/apiGerenciador'
import FichaService from '../../services/FichaService'

export default (props) => {
  const [leitos, setLeitos] = useState([]);
  apiGerenciador.get('leitos').then(results => {
    setLeitos(results.data)
  }, [props])


  function handleClick(id) {

    if (window.confirm('Deseja realmente excluir o registro?')) {
      FichaService.delete(id).then(results => {

        FichaService.getAll().then(results => {
          setLeitos(results.data);
        })

      }).catch(error => {
        console.log(error.response)
      })
    }
  }
  return (
    <Menu title="Leitos">
      <Link className="btn btn-outline-info mb-3" to="/leitos/create">Novo Paciente</Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Tipo</th>
            <th>Capacidade</th>
          </tr>
        </thead>
        <tbody>
          {leitos.map(item => (
            <tr hey={item.id}>
              <td>
                <Link className="btn btn-primary mr-3" to={`/leitos/${item.id}/edit`}>Alterar</Link>
                <Button variant="danger" onClick={() => handleClick(item.id)}>Excluir</Button>
              </td>
              <td>{item.tipo}</td>
              <td>{item.capacidade}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Menu>
  )
}