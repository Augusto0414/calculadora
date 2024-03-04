import PropTypes from 'prop-types'
import { useOperation } from '../hooks/useOperation'

export const ButonCalculadora = ({ arrComponent, type, setHandleClick, clickValue }) => {

    const { handleClickWithValue } = useOperation();
    const handleButtonClick = (value) => {
        handleClickWithValue(value, setHandleClick, clickValue);
    }

    return (
        <>
            <div className={type === 'number' ? 'menu_number' : 'menu_operation'}>
                {
                    arrComponent.map((e) => (
                        <button key={e} className={type} onClick={() => handleButtonClick(e)}>{e}</button>
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
    clickValue: PropTypes.string,
}

ButonCalculadora.defaultProps = {
    arrComponent: [],
}