'use client'

import useSWR from "swr";
import { useForm, SubmitHandler } from "react-hook-form"
import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { FetchedAddressError, FetchedAddressInterface,TranslatedAddressInterface, InputInterface } from "@/types";
import { Button, Input } from "@/components";
import { fetcher } from "@/services/fetcher";

interface AddressSearchProps {
  setAddress: Dispatch<SetStateAction<TranslatedAddressInterface | undefined>>
}

export function AddressSearch ({ setAddress }: AddressSearchProps) {
  const [formData, setFormData] = useState<undefined | number>()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isDirty, isSubmitSuccessful },
  } = useForm<InputInterface>()
  watch("cepSearchInput")

  const onSubmit: SubmitHandler<InputInterface> = (data) => setFormData(data.cepSearchInput)

  const { data, isLoading, error } = useSWR<FetchedAddressInterface, FetchedAddressError>(
    formData ? `https://brasilapi.com.br/api/cep/v2/${formData}` : null, fetcher, {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  )
  
  useEffect(() => {
    if (error) setAddress(undefined)
    if (!!data?.cep) {
      setFormData(undefined)
      setAddress({
        'CEP': data?.cep,
        'estado': data?.state,
        'cidade': data?.city,
        'bairro': data?.neighborhood,
        'rua': data?.street,
      })
    }
  }, [data, setAddress, error])

  console.log(errors)

  return (
    <div className="flex flex-col items-center gap-16">
      <form className="flex flex-col items-center gap-4" onSubmit={handleSubmit(onSubmit)}>
        <Input
          inputName="cepSearchInput"
          registerFunction={
            register("cepSearchInput", {
            required: true,
            pattern: {
              value: /^\d{8}$/,
              message: 'Escreva oito dígitos'
            },
          })
        } />
        <Button type="submit" isLoading={isLoading} isDisabled={!isValid || !isDirty} label="Fazer busca" />
      </form>
      {(
      !isLoading && isSubmitSuccessful && error) && 
        <h6 className="font-bold text-xl">Infelizmente sua busca falhou 😕</h6>
      }
    </div>
  )
}
