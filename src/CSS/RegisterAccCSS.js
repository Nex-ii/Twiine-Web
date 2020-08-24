import Tooltip from '@material-ui/core/Tooltip';
import { withStyles} from '@material-ui/core/styles';


const CustomTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: 'white',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 250,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    borderRadius: '15px',
  },
}))(Tooltip);

  export {CustomTooltip};