import React from 'react'

const InputForm = ({ label, id, type, placeholder, register, success, disabled, error, onBlur }) => {

    const onblurHandler = (e) => {
        if (onBlur) {
            onBlur(e);
            register(id).onBlur(e);
        } else {
            register(id).onBlur(e);
        }
    }

    return (
        <div className="flex w-full flex-col gap-2">
            <label htmlFor={id} className="text-base-regular text-dark">{label}</label>
            <input
                type={type}
                id={id}
                name={id}
                className="rounded-lg placeholder:text-muted-foreground placeholder:text-[12px] text-sm border border-light px-3.5 py-2 transition focus:outline-none focus:border-primary hover:border-primary focus:shadow-sm"
                placeholder={placeholder}
                {...register(id)}
                onBlur={onblurHandler}
                disabled={disabled}
                aria-invalid={error ? "true" : "false"}
            />
            {error && <p className="mt-1 text-sm text-red-600" id={`${name}-error`}>{error}</p>}
            {success && <p className="mt-1 text-sm text-green-600" id={`${name}-success`}>{success}</p>}
        </div>
    )
}

export default InputForm