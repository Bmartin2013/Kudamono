import { makeStyles } from '@material-ui/styles';

const centeredStyleObj = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
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
    title: {
        margin: '10px 0'
    },
    link: {
        margin: '15px 5px',
    }

});