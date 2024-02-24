interface FieldProps {
  fieldName: string,
  fieldValue: string | number,
}

export const Field = ({ fieldName, fieldValue}: FieldProps) => {
  return (
    <div className="w-full flex items-center gap-7 justify-between py-2.5 px-4 rounded-lg bg-grey-100 dark:bg-grey-700">
      <p className="w-fit capitalize text-sm font-bold text-left">{`${fieldName}:`}</p>
      <p className="w-fit text-base font-semibold text-right">{fieldValue}</p>
    </div>
  )
}