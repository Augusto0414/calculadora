import PropTypes from 'prop-types'

export const DisplayPage = ({ content }) => {

    return (
        <div className="display">
            <span>{content}</span>
        </div>
    )
}

DisplayPage.propTypes = {
    content: PropTypes.string
}

