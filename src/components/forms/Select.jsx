import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

export default (props) => {

  const id = props.id ? props.id : props.name
  const labelWidth = props.labelWidth ? props.labelWidth : 3
  const inputWidth = props.inputWidth ? props.inputWidth : 12 - labelWidth
  
  const chave = props.chave ? props.chave : 'id'
  const descricao = props.descricao ? props.descricao : 'nome'

  const { errors, register, validator } = props.reference
  const required = () => (validator[props.name]?.required ? <span className="text-danger">*</span> : '')

  return (
    <>
      <Form.Group as={Row} controlId={id}>
          <Form.Label className="text-right" column sm={labelWidth}>{props.label}: {required()}</Form.Label>
          <Col sm={inputWidth}>
          <Form.Control as="select" ref={register(validator[props.name])} {...props} isInvalid={errors[props.name]}>
            <option value="">Selecione</option>
            {props.lista.map(item=>(
              <option key={item.id} value={item[chave]}>{item[descricao]}</option>
            ))}
          </Form.Control>
          <Form.Control.Feedback type="invalid">{errors[props.name]?.message}</Form.Control.Feedback>          
          </Col>
        </Form.Group>
    </>
  )
}