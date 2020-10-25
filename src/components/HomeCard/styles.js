import { makeStyles } from '@material-ui/styles';

const centeredStyleObj = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

const largeIcon = {
    fontSize: '2.3rem',
    padding: '0 5px'
}

export default makeStyles({
    cardContainer: {
        flexDirection: 'column',
        width: '400',
        height: '200',
        padding: '2em',
        marginTop: '1em',
        ...centeredStyleObj
    },
    titleGridContainer: {
        ...centeredStyleObj
    },
    textField: {
        width: '90%'
    },
    buttonsContainer: {
        marginTop: '.5rem',
        marginRight: '.5rem',
        "& Button": {
            margin: '10px'
        }
    },
    fruitIcon: {
        ...largeIcon
    }
});