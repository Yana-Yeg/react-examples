import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentExchangeRate } from "../redux/counterOperations";
import { getIsLoading } from "../redux/counterSelector";
import Tablo from "../components/Tablo/Tablo";
import Exchange from "../components/Exchange/Exchange";

const ConverterPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(getIsLoading);
  const today = new Date().toLocaleDateString();

  useEffect(() => {
    dispatch(getCurrentExchangeRate("EUR", "USD"));
  }, [dispatch]);

  return (
    <div>
      <h1>Current exchange rate for {today}</h1>
      {loading && <h3>Please wait. Loading...</h3>}
      <Tablo />
      <Exchange />
    </div>
  );
};

export default ConverterPage;
