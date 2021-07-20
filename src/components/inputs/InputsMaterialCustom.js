import { Button, FormControl, Select, TextField } from '@material-ui/core';
import {

    withStyles,

  } from '@material-ui/core/styles';
import { Autocomplete } from '@material-ui/lab';
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

export const FormControlCustomCss = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#0052CC',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      
      '&:hover fieldset': {
        borderColor: '#0052CC',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#0052CC',
      },
    },
  },
  
})(FormControl);
export const SelectCustomCss = withStyles({
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
    
  })(Select);

export const TextFieldCustomCss = withStyles({
    root: {
      '& label.Mui-focused': {
        color: '#0052CC',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
      },
      '& .MuiOutlinedInput-root': {
        
        '&:hover fieldset': {
          borderColor: '#0052CC',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#0052CC',
        },
      },
    },
  })(TextField);

export const ButtonGreenCustomCss = withStyles({
    root:{
      background:'#4CAF50',
      '&:hover': {
        backgroundColor:'#4CA150',
      },
    }
    
  })(Button);