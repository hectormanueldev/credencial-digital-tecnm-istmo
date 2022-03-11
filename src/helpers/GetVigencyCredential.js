const date = new Date();
let month = date.getMonth();
let year = date.getFullYear();

let vigency = month >= 0 && month <= 6 ? `ENE - JUL ${year}` : `AGO - DIC ${year}`;

export { vigency };
