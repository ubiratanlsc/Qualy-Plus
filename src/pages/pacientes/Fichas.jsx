import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Menu from '../../components/Menu'
import FichaService from '../../services/FichaService'

export default () => {

  const [fichas, setFichas] = useState([])

  useEffect(() => {
    FichaService.getAll().then(results => {
      setFichas(results.data.data);
    })
  }, [])
  

  function handleClick(id) {

    if (window.confirm('Deseja realmente excluir o registro?')) {
      FichaService.delete(id).then(results => {

        FichaService.getAll().then(results => {
          setFichas(results.data);
        })
      }).catch(error => {
        console.log(error.response)
      })
    }
  }
  return (
    <Menu title="Pacientes">
      <Link className="btn btn-outline-info mb-3" to="/fichas/create">Novo Paciente</Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Data de Nascimento</th>
            <th>Sexo</th>
          </tr>
        </thead>
        <tbody>
          {fichas.map(item => (
            <tr hey={item.id}>
              <td>
                <Link className="btn btn-primary mr-3" to={`/fichas/${item.id}/edit`}>Alterar</Link>
                <Button variant="danger" onClick={() => handleClick(item.id)}>Excluir</Button>
              </td>
              <td>{item.nome}</td>
              <td>{item.data_nascimento}</td>
              <td>{item.sexo}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Menu>
  )
}