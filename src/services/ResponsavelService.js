import apiGerenciador from "./apiGerenciador"
import { unMask } from 'remask';

class ResponsavelService {
  getAll() {
    return apiGerenciador.get('responsaveis')
  }

  get(id) {
    return apiGerenciador.get(`responsaveis/${id}`)
  }

  create(data) {

    data = {...data, cpf: unMask(data.cpf), cep: unMask(data.cep)}

    return apiGerenciador.post('responsaveis', data)

  }

  update(id, data) {
    data = {...data, cpf: unMask(data.cpf), cep: unMask(data.cep)}

    return apiGerenciador.put(`responsaveis/${id}`, data)
  }

  delete(id) {
    return apiGerenciador.delete(`responsaveis/${id}`)
  }
}

export default new ResponsavelService()