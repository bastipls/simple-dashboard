// Esta funcion es para anteponer 0 o algun otro caracter a algun valor
export const  pad = (n, width, z) => {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }