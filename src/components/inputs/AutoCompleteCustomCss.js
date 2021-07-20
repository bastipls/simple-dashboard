import { Autocomplete } from '@material-ui/lab';
import {
    withStyles,
  } from '@material-ui/core/styles';
export const AutoComlpleteCustomCss = withStyles({
    root: {
      '& label.Mui-focused': {
        color: '#FFCC00',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
      },
      '& .MuiOutlinedInput-root': {
        
        '&:hover fieldset': {
          borderColor: '#FFCC00',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#FFCC00',
        },
      },
    },
  })(Autocomplete);