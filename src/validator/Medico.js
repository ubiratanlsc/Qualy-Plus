import mensagens from "./mensagens";

export default {
  nome: {
    required: mensagens.required,
    minLength: {value: 2, message: mensagens.minLength + ' (mínimo de 2 caracteres)' },
    maxLength: {value: 50, message: mensagens.maxLength + ' (máximo de 50 caracteres)' },
  },
  cpf: {
    required: mensagens.required,
  },
  identidade: {
    required: mensagens.required,
  },
  crm: {
    required: mensagens.required,
  },
  sexo: {
    required: mensagens.required,
  },
  uf: {
    required: mensagens.required,
  },
  email: {
    maxLength: {value: 100, message: mensagens.maxLength + ' (máximo de 100 caracteres)' },
  },
  telefone: {
    minLength: {value: 14, message: mensagens.minLength + ' (mínimo de 14 caracteres)' },
    maxLength: {value: 15, message: mensagens.maxLength + ' (máximo de 15 caracteres)' },
  },
  cep: {
    maxLength: {value: 8, message: mensagens.maxLength + ' (máximo de 8 caracteres)' },
  },
  logradouro: {
    maxLength: {value: 100, message: mensagens.maxLength + ' (máximo de 100 caracteres)' },
  },
  complemento: {
    maxLength: {value: 100, message: mensagens.maxLength + ' (máximo de 100 caracteres)' },
  },
  bairro: {
    maxLength: {value: 100, message: mensagens.maxLength + ' (máximo de 100 caracteres)' },
  },
  numero: {
    maxLength: {value: 20, message: mensagens.maxLength + ' (máximo de 20 caracteres)' },
  },
}