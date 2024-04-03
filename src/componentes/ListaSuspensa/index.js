import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    console.log(props.label)
    return (
        <div className='ListaSuspensa'>
            <label> {props.label}</label>
            <select>
                {props.itens.map((item, index)=> {
                    return <option key={index}>{item}</option>                })}
            </select>
        </div>
    )

}

export default ListaSuspensa