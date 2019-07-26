const initialState = "cn";
export default function (state = initialState, action) {
    switch (action.type) {
        case "en-lang":
            return "en";
        default:
            return state;
    }
}