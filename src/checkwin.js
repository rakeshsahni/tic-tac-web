export const checkWin = (zx) => {
    // for all top to bottom
    if (zx.d0 !== "" && zx.d0 === zx.d3 && zx.d6 === zx.d3) {
      if (zx.d0 === "x") return "x";
      else return "o";
    }

    if (zx.d1 !== "" && zx.d1 === zx.d4 && zx.d7 === zx.d4) {
      if (zx.d1 === "x") return "x";
      else return "o";
    }

    if ( zx.d2 !== "" && zx.d2 === zx.d5 && zx.d8 === zx.d5) {
      if (zx.d2 === "x") return "x";
      else return "o";
    }

    // for all left to right
    if ( zx.d0 !== "" && zx.d0 === zx.d1 && zx.d2 === zx.d1) {
      if (zx.d0 === "x") return "x";
      else return "o";
    }

    if ( zx.d3 !== "" && zx.d3 === zx.d4 && zx.d5 === zx.d4) {
      if (zx.d3 === "x") return "x";
      else return "o";
    }

    if ( zx.d6 !== "" && zx.d6 === zx.d7 && zx.d8 === zx.d6) {
      if (zx.d6 === "x") return "x";
      else return "o";
    }

    // for diagonal
    if ( zx.d0 !== "" && zx.d0 === zx.d4 && zx.d8 === zx.d0) {
      if (zx.d0 === "x") return "x";
      else return "o";
    }
    if ( zx.d2 !== "" && zx.d2 === zx.d4 && zx.d6 === zx.d2) {
      if (zx.d2 === "x") return "x";
      else return "o";
    }
    return "-1";
  };