import apiGerenciador from "./apiGerenciador"
import { unMask } from 'remask';

class FichaService {
  getAll() {
    return apiGerenciador.get('fichas')
  }

  get(id) {
    return apiGerenciador.get(`fichas/${id}`)
  }

  create(data) {

    data = {...data, cpf: unMask(data.cpf), cep: unMask(data.cep)}

    return apiGerenciador.post('fichas', data)

  }

  update(id, data) {
    data = {...data, cpf: unMask(data.cpf), cep: unMask(data.cep)}

    return apiGerenciador.put(`fichas/${id}`, data)
  }

  delete(id) {
    return apiGerenciador.delete(`fichas/${id}`)
  }
}

export default new FichaService()