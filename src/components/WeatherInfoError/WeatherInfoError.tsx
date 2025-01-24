import Button from "../Button/Button";
import { ApiError, ButtonsWrapper, ErrorMessage, WeatherInfoContainer} from "./styles";
import type { WeatherInfoErrorProps } from "./types";
import { useAppDispatch } from "../../store/hooks"; 
import { weatherSliceActions } from "../../store/redux/weather/weatherSlice"; 



function WeatherInfoError({message}:WeatherInfoErrorProps) {
  function onCardDeleteClick(): void {
    throw new Error("Function not implemented.");
  }

const dispatch = useAppDispatch()
const onDeleteButtonClick =()=>{
  dispatch(weatherSliceActions.deleteErrorInfo())
}

  return (
    <WeatherInfoContainer>
      <ApiError>API Error</ApiError>
      <ErrorMessage>{message}</ErrorMessage>
      <ButtonsWrapper>
      <Button name ="Delete" onClick={onDeleteButtonClick}/>
    </ButtonsWrapper>
    </WeatherInfoContainer>
  )
}

export default WeatherInfoError;

function useState<T>(arg0: boolean): [any, any] {
  throw new Error("Function not implemented.");
}
