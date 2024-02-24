export interface ButtonProps {
  label: string,
  isDisabled?: boolean,
  isLoading?: boolean,
  type?: 'submit' | 'button',
  onClick?: () => {}
}

export const Button = ({
  label, isLoading = false, isDisabled = false, type = 'button', onClick
}: ButtonProps) => {
  return (
    <button
      className="max-w-xl w-5/12 min-w-[21rem]
                rounded-xl disabled:opacity-50 p-4
                bg-cyan-500 hover:brightness-90
                text-center text-lg font-bold text-white"
      type={type}
      disabled={isDisabled}
      onClick={onClick}
    >
      {isLoading ? 'Carregando...' : label}
    </button>
  )
}