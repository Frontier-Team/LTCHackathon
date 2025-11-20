require("@testing-library/jest-dom/extend-expect");
const { TextDecoder, TextEncoder } = require("util");

Object.assign(global, { TextDecoder, TextEncoder });
