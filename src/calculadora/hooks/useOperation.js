
export const useOperation = () => {
    const handleClickWithValue = (value, setHandleClick, clickValue) => {
        switch (value) {
            case 'DEL':
                setHandleClick(prevValue => prevValue.slice(0, -1));
                break;
            case '=':
                responOperation(setHandleClick, clickValue);
                break;
            case '+':
                setHandleClick(prevValue => prevValue + '+');
                break;
            case '-':
                setHandleClick(prevValue => prevValue + '-');
                break;
            case '*':
                setHandleClick(prevValue => prevValue + '*');
                break;
            case '/':
                setHandleClick(prevValue => prevValue + '');
                break;

            default:
                setHandleClick(prevValue => prevValue === '0' ? value : prevValue + value);
                break;
        }

    };


    const responOperation = (setHandleClick, clickValue) => {
        try {
            const operation = eval(clickValue);
            setHandleClick(operation.toString());
        } catch (error) {
            setHandleClick('Error!');
        }

    }
    return {

        handleClickWithValue
    }

}


