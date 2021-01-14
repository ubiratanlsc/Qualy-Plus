import React, { useEffect, useState } from 'react';
import { Form, Row, Col, Button, Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form'
import { Link, withRouter } from 'react-router-dom';
import Input from '../../components/forms/Input';
import Select from '../../components/forms/Select';
import Menu from '../../components/Menu';
import apiIbge from '../../services/apiIbge';
import FichaService from '../../services/FichaService';
import validator from '../../validator/FichasValidator';

const FichaForm = (props) => {

  const { register, handleSubmit, errors } = useForm()
  const reference = { register, validator, errors }

  const [dados, setDados] = useState({})

  const [ufs, setUfs] = useState([])
  const [municipios, setMunicipios] = useState([])

  useEffect(() => {

    const id = props.match.params.id

    if(id){
      FichaService.get(id).then(results=>{
        setDados(results.data);
      })
    }

    apiIbge.get('estados?orderBy=nome').then(results => {
      setUfs(results.data);
    })

    apiIbge.get('estados/GO/municipios?orderBy=nome').then(results => {
      setMunicipios(results.data);
    })

  }, [props])

  function enviarDados(data) {

    const resultado = dados.id ? FichaService.update(dados.id, data) : FichaService.create(data)
    
    resultado.then(results => {
      
      props.history.push('/fichas')
      console.log(data)

    }).catch(error => {
      console.log(error.response.data)
    })
  }
  return (
    <Menu title="Paciente">

      <Form>

        <Row>
          <Col>
            <Card>
              <Card.Header className="bg-info text-white">Dados do Paciente</Card.Header>
              <Card.Body>
                <Input label="Nome" name="nome" reference={reference} valor={dados.nome} />
                <Input label="CPF" name="cpf" reference={reference} valor={dados.cpf} mask="999.999.999-99" />
                <Input label="Identidade" name="identidade" reference={reference} valor={dados.identidade} />
                <Input label="Telefone" name="telefone" reference={reference} valor={dados.telefone} mask={['(99) 9999-9999', '(99) 99999-9999']} />
                <Input label="Data de Nascimento" name="Data de nascimento" reference={reference} valor={dados.data_nascimento} mask={'99/99/9999'} />
                <Input label="Sexo" name="sexo" reference={reference} valor={dados.sexo} />
                <Input label="Risco de Contagio" name="riscoContagio" reference={reference} valor={dados.riscoContagio} />
                <Input label="Internação" name="internacao" reference={reference} valor={dados.internacao} />
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12}>
            <Card>
              <Card.Header className="bg-info text-white">Endereço</Card.Header>
              <Card.Body>
                <Input label="CEP" name="cep" reference={reference} labelWidth={4} valor={dados.cep} />
                <Select label="UF" name="uf" reference={reference} lista={ufs} chave="sigla" labelWidth={4} />
                <Select label="Município" name="municipio" reference={reference} lista={municipios} labelWidth={4} />
                <Input label="Bairro" name="bairro" reference={reference} valor={dados.bairro} labelWidth={4} />
                <Input label="Logradouro" name="logradouro" reference={reference} valor={dados.logradouro} labelWidth={4} />
                <Input label="Complemento" name="complemento" reference={reference} valor={dados.complemento} labelWidth={4} />
                <Input label="Número" name="numero" reference={reference} valor={dados.numero} labelWidth={4} />
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="text-center mt-3 mb-3">
          <Button variant="success" onClick={handleSubmit(enviarDados)} >Salvar</Button>
          <Link to="/fichas" className="btn btn-danger ml-1">Voltar</Link>
        </div>
      </Form>
    </Menu>
  )
}

export default withRouter(FichaForm)