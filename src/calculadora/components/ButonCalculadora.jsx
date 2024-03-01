import PropTypes from 'prop-types'
import { useOperation } from '../hooks/useOperation'

export const ButonCalculadora = ({ arrComponent, type, setHandleClick }) => {
    const { handleClick} = useOperation();
    const handleClickWithValue = (value) => {
        handleClick(value);
        setHandleClick(value); 
    };
    return (
        <>
            <div className={type === 'number' ? 'menu_number' : 'menu_operation'}>
                {
                    arrComponent.map((e) => (
                        <button key={e} className={type} onClick={() =>handleClickWithValue(e)}>{e}</button>
                    ))
                }
            </div>
        </>
    )
}

ButonCalculadora.propTypes = {
    arrComponent: PropTypes.array.isRequired,
    type: PropTypes.string.isRequired,
    setHandleClick: PropTypes.func,
}

ButonCalculadora.defaultProps = {
    arrComponent: [],
}