import { ChangeEventHandler } from 'react'

type Props = {
  tag: 'input' | 'textarea'
  id: 'name' | 'email' | 'message'
  value: string
  label: string
  errorMessage: string
  isInvalid: boolean
  onChange:
    | (ChangeEventHandler<HTMLInputElement> &
        ChangeEventHandler<HTMLTextAreaElement>)
    | undefined
  onBlur:
    | (ChangeEventHandler<HTMLInputElement> &
        ChangeEventHandler<HTMLTextAreaElement>)
    | undefined
  flashInvalidInput: boolean
}

export default function FormInput({
  tag: Tag,
  id,
  value,
  label,
  errorMessage,
  isInvalid,
  onChange,
  onBlur,
  flashInvalidInput
}: Props) {
  return (
    <div className="flex flex-col gap-[5px] sm:gap-[10px]">
      <label htmlFor={id} className="ml-[20px] text-[12px] sm:text-[16px]">
        {label}
      </label>
      <Tag
        id={id}
        type={Tag === 'input' ? 'text' : undefined}
        rows={Tag === 'textarea' ? 8 : undefined}
        className={`rounded-lg border ${
          isInvalid ? 'border-red-600' : 'border-[#0043FE80]'
        } bg-[#1B1B1B] text-[#FFFFFF66] text-[12px] sm:text-[16px] px-[20px] py-[12px] outline-none ring-0 ${
          isInvalid && flashInvalidInput && 'animate-flash'
        }`}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {isInvalid && (
        <p className="ml-[20px] text-[10px] sm:text-[14px] text-red-600">
          {errorMessage}
        </p>
      )}
    </div>
  )
}
