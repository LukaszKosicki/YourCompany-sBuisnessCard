import pl from "../../languages/pl";

export const languages = (state = [pl], action) => {
    switch (action.type) {
        case "SET_LANGUAGE":
            return [
                action.language
            ]
        default:
            return state
    }
}