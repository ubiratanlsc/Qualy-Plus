import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Menu from '../../components/Menu';
import ResponsavelService from '../../services/ResponsavelService';

export default () => {

  const [responsaveis, setResponsaveis] = useState([])

  useEffect(() => {
    ResponsavelService.getAll().then(results => {
      setResponsaveis(results.data.data);
    })
  }, [])

  function handleClick(id) {

    if (window.confirm('Deseja realmente excluir o registro?')) {
      ResponsavelService.delete(id).then(results => {

        ResponsavelService.getAll().then(results => {
          setResponsaveis(results.data.data);
        })

      }).catch(error => {
        console.log(error.response.data)
      })
    }
  }

  return (
    <Menu title="Responsaveis">

      <Link className="btn btn-warning mb-3" to="/responsaveis/create">Novo</Link>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Ações</th>
            <th>Nome</th>
            <th>Telefone</th>
            <th>endereco</th>
          </tr>
        </thead>
        <tbody>
          {responsaveis.map(item => (
            <tr key={item.id}>
              <td>
                <Link className="btn btn-primary mr-3" to={`/responsaveis/${item.id}/edit`}>Alterar</Link>
                <Button variant="danger" onClick={() => handleClick(item.id)}>Excluir</Button>
              </td>
              <td>{item.nome}</td>
              <td>{item.telefone}</td>
              <td>{item.endereco}</td>
            </tr>
          ))}
        </tbody>
      </Table>

    </Menu>
  )
}