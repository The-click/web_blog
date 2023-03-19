import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { CounterActions } from "../model/slice/counterSlice";
import { StateSchema } from "../../../app/providers/StoreProvider/config/StateSchema";

import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";

interface CounterProps {}

export const Counter: React.FC<CounterProps> = (props) => {
    const counterValue = useSelector(getCounterValue);
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const increment = () => {
        dispatch(CounterActions.increment());
    };

    const decrement = () => {
        dispatch(CounterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button onClick={increment} data-testid="increment-btn">
                {t("+")}
            </Button>
            <Button onClick={decrement} data-testid="decrement-btn">
                {t("-")}
            </Button>
        </div>
    );
};
