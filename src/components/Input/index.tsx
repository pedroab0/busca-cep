import { UseFormRegisterReturn } from 'react-hook-form'

import SearchIcon from '@/assets/MagnifyingGlass.svg'

export interface InputProps {
  registerFunction: UseFormRegisterReturn<string>
  inputName: string
}

export const Input = ({ registerFunction, inputName }: InputProps) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <label htmlFor={inputName} className="text-left text-sm w-full">Digite o CEP</label>
      <input
        id={inputName}
        style={{ backgroundImage: `url(${SearchIcon.src})`, backgroundSize: '12% 30%' }}
        className="dark:bg-grey-800 min-w-[21rem] py-5 pl-9 pr-4 rounded-xl
                  placeholder:text-grey-300 dark:placeholder:text-grey-500 placeholder:text-base
                  focus:outline focus:outline-2 focus:outline-cyan-500
                  bg-no-repeat bg-left
                  "
        type="number"
        placeholder="00000000"
        {...registerFunction}
      />
    </div>
  )
}