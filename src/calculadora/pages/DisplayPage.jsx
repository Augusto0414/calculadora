import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

export const DisplayPage = ({ content }) => {
    const [displayContent, setDisplayContent] = useState('');
    useEffect(() => {
        const operations = ["+", "-", "*", "/", "DEL"];
        if (!operations.includes(content)) {
            setDisplayContent(content);
        }
    }, [content]);
    return (
        <div className="display">
            <span>{displayContent}</span>
        </div>
    )
}

DisplayPage.propTypes = {
    content: PropTypes.string
}

