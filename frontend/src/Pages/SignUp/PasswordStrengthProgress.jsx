import { Progress } from "@nextui-org/react";
import zxcvbn from "zxcvbn";

export default function PasswordStrengthProgress(props) {

    const {checkPassword} = props;

    const passwordResult = zxcvbn(checkPassword);
    const num = passwordResult.score * 100/4;

    // console.log(passwordResult)

    const handleChangeColor = () => {
        switch(passwordResult.score) {
            case 0:
                return "danger";
            case 1: 
                return "danger";
            case 2:
                return "warning";
            case 3:
                return "primary";
            case 4:
                return "success";
            default:
                return "default";
        }
    }

    return (
        <Progress
            color={handleChangeColor()}
            size="sm"
            aria-label="Loading..."
            value={num}
            className="py-4 px-2"
        />
    );
};