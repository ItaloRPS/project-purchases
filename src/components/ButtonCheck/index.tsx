import './styles.scss'
type ButtonCheck = {
    type:'radio'|'checkbox'
    name:string
    id: string
    children:string
    value:string|number
}

export const ButtonCheck = ({type, name, id, value, children}:ButtonCheck) => {
    return (
        <>
            <input type={type} name={name} id={id} value={value} />
            <label htmlFor={id}>{children}</label>
        </>
        )
  }