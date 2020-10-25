import { makeStyles } from '@material-ui/styles';

const topStyleObj = {
    display: 'flex',
    alignItems: 'top',
    justifyContent: 'top'
}


export default makeStyles({
    container: {
        height: '100vh',
        flexDirection: 'column',
        ...topStyleObj
    },
    title: {
        margin: '10px 5px',
    }

});