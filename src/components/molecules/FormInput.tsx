import { Translation } from '@/types/translation'
import { ChangeEventHandler } from 'react'

type FormInputProps = {
  tag: 'input' | 'textarea'
  id: 'name' | 'email' | 'message'
  translation: Translation
  value: string
  isInvalid: boolean
  onChange:
    | (ChangeEventHandler<HTMLInputElement> &
        ChangeEventHandler<HTMLTextAreaElement>)
    | undefined
  onBlur:
    | (ChangeEventHandler<HTMLInputElement> &
        ChangeEventHandler<HTMLTextAreaElement>)
    | undefined
  index: number
  animateErrorMessage: boolean
}

export default function FormInput({
  tag: Tag,
  id,
  translation,
  value,
  isInvalid,
  onChange,
  onBlur,
  index,
  animateErrorMessage
}: FormInputProps) {
  return (
    <div className="flex flex-col gap-[5px] sm:gap-[10px]">
      <label htmlFor={id} className="ml-[20px] text-[12px] sm:text-[16px]">
        {translation.contact.form[index].label}
      </label>
      <Tag
        id={id}
        type={Tag === 'input' ? 'text' : undefined}
        rows={Tag === 'textarea' ? 8 : undefined}
        placeholder={translation.contact.form[index].placeholder}
        className={`rounded-lg border ${
          isInvalid ? 'border-red-600' : 'border-[#0043FE80]'
        } bg-[#1B1B1B] text-[#FFFFFF66] text-[12px] sm:text-[16px] px-[20px] py-[12px] outline-none ring-0`}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {isInvalid && (
        <p
          className={`ml-[20px] text-[10px] sm:text-[14px] text-red-600 ${
            animateErrorMessage && 'animate-bounce'
          }`}
        >
          {translation.contact.form[index].errorMessage}
        </p>
      )}
    </div>
  )
}
