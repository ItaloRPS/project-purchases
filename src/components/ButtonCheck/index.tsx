import './styles.scss'
type ButtonCheck = {
    type:'radio'|'checkbox'
    name:string
    id: string
    children:string
    value:string|number
    disabled?:boolean
}

export const ButtonCheck = ({type, name, id, value, disabled = false, children}:ButtonCheck) => {
    return (
        <>
            <input type={type} name={name} id={id} value={value} disabled={disabled} />
            <label htmlFor={id} className={(disabled?'unavailable':'')}>{children}</label>
        </>
        )
  }