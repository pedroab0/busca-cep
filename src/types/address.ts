export interface FetchedAddressInterface {
  cep: string,
  city: string,
  neighborhood: string,
  state: string,
  street: string,
}

export interface FetchedAddressError {
  errors: {
    name: string,
    message: string,
    service: string,
  }[],
  message: string,
  name: string,
  type: string,
}

export interface TranslatedAddressInterface {
  CEP?: string,
  estado?: string,
  cidade?: string,
  bairro?: string,
  rua?: string
}