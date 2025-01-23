
import {useState} from "react";
import type { ChangeEvent} from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import WeatherInfo from "../../components/WeatherInfo/WeatherInfo";
import WeatherInfoError from "../../components/WeatherInfoError/WeatherInfoError";
import { ButtonWrapper, HomePageWrapper, InputContainer } from "./styles";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { weatherSliceActions, weatherSliceSelectors } from "../../store/redux/weather/weatherSlice";
import Spinner from "../../components/Spinner/Spinner";




function Home(){
  const dispatch = useAppDispatch()
  const {data,error,status} = useAppSelector(weatherSliceSelectors.weatherData)
  const {temp,city,icon} = data.weatherData
  const [inputValue, setInputValue] = useState<string>('');

  const onInputChange = (event:ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);

  }


  const onSearchClick = ()=>{
    if(inputValue===''){
      alert("Enter city name!")
    } else {
    dispatch(weatherSliceActions.getWeatherData(inputValue))
    setInputValue ('')
  }
}

  return(
    <HomePageWrapper>
      <InputContainer>
        <Input name="input-data" value={inputValue} placeholder="Colrado" onChange={onInputChange}/>
    
        <ButtonWrapper><Button name='Search'onClick={onSearchClick}/></ButtonWrapper>
      </InputContainer>
      {status === "loading" && <Spinner/>}
     {status === "success" && temp !== undefined && <WeatherInfo  temp={temp} city={city} icon={icon} isHistory={false} id={""}/>}
      {status === "error" && <WeatherInfoError message={error}/> }
    </HomePageWrapper>
  )
}


export default Home;