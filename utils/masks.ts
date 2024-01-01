export const masksOptions = {
  general: (value: string, format: string): string => {
    const regex = /^[0-9]+$/;
    if (!regex.test(value[value.length - 1]) || value.length > format.length)
      return value.substring(0, value.length - 1);

    let formattedValue = "";
    let lastInsertedIndex = -1;

    if (format.includes(value[value.length - 1])) {
      formattedValue = value;

      for (let i = value.length - 1; i >= 0; i--) {
        if (!format.includes(value[i])) return formattedValue;
        formattedValue = formattedValue.substring(0, i);
      }

      return formattedValue;
    }

    for (let i = 0; i < format.length; i++) {
      if (lastInsertedIndex === value.length - 1) break;

      if (format[i] === "#") {
        for (let j = lastInsertedIndex === -1 ? 0 : lastInsertedIndex; j < value.length; j++) {
          if (!format.includes(value[j]) && j > lastInsertedIndex) {
            formattedValue += value[j];
            lastInsertedIndex = j;
            break;
          }
        }
      } else {
        formattedValue += format[i];
      }
    }

    return formattedValue;
  },
  telephone: (value: string, fallback = "") => {
    if (value.length < 15) return masksOptions.general(value, "(##) ####-####");
    if (value.length >= 15) return masksOptions.general(value, "(##) #####-####");

    return fallback;
  }
};
