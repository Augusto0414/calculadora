import PropTypes from 'prop-types'
export const ButonCalculadora = ({arrNumber, type}) => {
    return (
        <>
            <div className={type === 'number' ? 'menu_number' : 'menu_operation'}>
            {
                arrNumber.map((e) => (
                    <button key={e} className={type}>{e}</button>
                ))
            }    
            </div>
        </>
    )
}

ButonCalculadora.propTypes = {
     arrNumber: PropTypes.array, 
     type: PropTypes.string.isRequired, 
 }

 ButonCalculadora.defaultProps = {
    arrNumber: [],
 }