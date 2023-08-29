type SerializationOptions = {
  formatting?: {
    // good 
    getIndent?: () => number;
    // If I were to rename this property to something like, say, numIndentTest with a hyphen in it, 
    // we now get a syntax error in line eight. 
    // The quoted property syntax is valid in the type declaration, 
    // and it's valid in the object literal down here. It's not valid in this property chain.
    numIndentTest?: number;
  };
};

function serializeJSON(value: any, options?: SerializationOptions) {
    const indent = options?.formatting?.getIndent?.();
    const getIndent = options?.formatting?.numIndent;
    return JSON.stringify(value, null, indent);
}

const json = serializeJSON(user, {
    formatting: {
      getIndent: () => 2,
      numIndent: 2
    },
});

type ResponseData = {
  response?: {
    result: string[],
    status: {
      code: number;
    },
    error: {
      msg: string
    }
  },
}
