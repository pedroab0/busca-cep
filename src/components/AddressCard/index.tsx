import { Field } from "./components/Field";
import { TranslatedAddressInterface } from "@/types";

interface AddressCardProps {
  address: TranslatedAddressInterface;
}

export const AddressCard = ({ address }: AddressCardProps) => {
  return (
    <div className="max-w-4xl min-w-[21rem] w-5/12 flex gap-6 rounded-xl flex-col bg-grey-200 dark:bg-grey-800 p-5">
      <p className="text-xl font-bold">Endereço</p>
      {Object.entries(address).map(([addressField, addressFieldValue], i) => {
        if (!addressFieldValue) return

        return (
          <Field key={`${addressField}${i}`} fieldName={addressField} fieldValue={addressFieldValue} />
        )
      })}
    </div>
  )
}