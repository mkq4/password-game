import { ALL_SPECIAL_CHARS } from "./utils"

type Rule = {
  callback: (password: string) => boolean;
  errorMessage: string;
}



const RULES: Record<string, Rule> = {
  ruleLength: {
    callback: (password: string) => password.length > 10,
    errorMessage: "Ur password len must be more than 10 symbols",
  },

  sumNumsRule: {
    callback: (password: string) => {
      const nums = password.split("").reduce((sum, num) => {
        if (Number(num)) {
          return sum + sum
        }
        return sum
      }, 0)

      if (nums > 20) return true
      return false
    },
    errorMessage: "Sum of ur nums at ur pass must be more then 20",
  },

  specialSymbol: {
    callback: (password: string) => {
      for (let char of password) {
          if (ALL_SPECIAL_CHARS.includes(char)) {
            return true
          }
      }
      return false
    },
    errorMessage: "Ur pass should include special symbol"
}

export default RULES
