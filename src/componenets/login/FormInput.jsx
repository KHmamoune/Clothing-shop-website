import { AnimatePresence } from "framer-motion"
import { useFormContext } from "react-hook-form"
import "./FormInput.css"

const FormInput = ({ id, type, label, val, setValue, validation }) => {
    const { register, formState: { errors }, } = useFormContext()

    const findInputError = (errors, name) => {
        const filtered = Object.keys(errors).filter(key => key.includes(name)).reduce((cur, key) => {
            return Object.assign(cur, {error:errors[key]})
        }, {})
        return filtered
    }

    const isFormInvalid = (err) => {
        if (Object.keys(err).length > 0) {
            return true
        } else {
            return false
        }
    }

    const inputError = findInputError(errors, label)
    const isInvalid = isFormInvalid(inputError)

    return (
        <div>
            <label htmlFor={id}>{label}</label>
                <AnimatePresence mode="wait" initial={false}>
                    {isInvalid && (
                        <InputError
                            message={inputError.error.message}
                            key={inputError.error.message}
                        />
                    )}
                </AnimatePresence>
            <input id={id} type={type} value={val} onChange={(event) => setValue(event.target.value)} {...register(label, validation) } />
        </div>
    )
}

const InputError = ({ message }) => {
  return (
    <p className="error-text" {...framer_error} >
      {message}
    </p>
  )
}

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
}

export default FormInput
